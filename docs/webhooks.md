---
sidebar_position: 4
---

# Webhooks

Instead of polling **[`GET /booking/v3/orders/{order_id}`](/api#operation/GetOrder)** to follow your bookings, register a webhook: we call your url each time one of your carts or orders changes.

:::tip
You can use this [**POSTMAN collection**](../static/Tictactrip.postman_collection.json) (folder **15. Webhooks**) to test the API.
:::

## How it works

1. You register one or more urls with **[`POST /booking/v3/webhooks`](/api#operation/CreateWebhook)**.
2. When one of your carts or orders changes, we `POST` a small event on each of your urls.
3. The event only tells **what** changed and **which** cart or order: you read it with the API.

```json
{
  "version": "1",
  "event_id": "3f1c2a4e-8b7d-4e21-9c55-0a6b2d9e7f10",
  "action_type": "order.booked",
  "occurred_at": "2026-11-03T10:12:45.123Z",
  "test": false,
  "cart": { "id": "6771146ca0b7432b" },
  "order": { "id": "8bc8557793fe4447" }
}
```

| Field | Description |
|---|---|
| `version` | Version of the body. It changes when a field is removed or changes meaning, not when one is added: ignore the fields you do not know. |
| `event_id` | Unique id of the event. The same event can be sent more than once: use it to ignore the ones you already handled. |
| `action_type` | What happened, see **[Events](#events)**. |
| `occurred_at` | When it happened (ISO 8601, UTC). The same on every retry. |
| `test` | `true` for the events sent by **[the test route](#send-test-events)**. |
| `cart.id` | The cart. Read it with **[`GET /booking/v3/carts/{cart_id}`](/api#operation/GetCart)**. |
| `order.id` | The order, only once the cart has one. Read it with **[`GET /booking/v3/orders/{order_id}`](/api#operation/GetOrder)**. |

## Events

| `action_type` | When | `order` |
|---|---|---|
| `cart.created` | A cart is created | — |
| `cart.updated` | A cart is updated with **[`PATCH /booking/v3/carts/{cart_id}`](/api#operation/UpdateCart)** | if any |
| `order.created` | An order is created from the cart | ✓ |
| `order.pending_booking` | The booking started | ✓ |
| `order.booked` | The booking succeeded: the tickets are ready | ✓ |
| `order.presold` | The order is presold: it will be booked when the sales open | ✓ |
| `order.unavailable` | The trip is not available anymore | ✓ |
| `order.errored` | The booking failed | ✓ |
| `order.canceled` | Every ticket of the order is canceled | ✓ |
| `order.partially_canceled` | Some tickets of the order are canceled | ✓ |
| `order.refunded` | The order is refunded | ✓ |

The `order.*` events follow the `orderStatus` of the order: `order.booked` is the `SUCCESS` status.

## Receive the events

Your url must:

- be a public `https` url (no `localhost`, no private IP address, no credentials in the url);
- answer with a `2xx` status within **10 seconds**. Do the work after answering, the body of your answer is ignored;
- not redirect: redirections are not followed.

When a call fails (timeout, network error, status other than `2xx`), we retry it **24 times**, with an exponential delay: 30 seconds, 1 minute, 2 minutes… up to 1 hour between two attempts, about 18 hours in all. Only the urls that failed are called again.

As a call can be retried, and events can arrive in any order:

- ignore an `event_id` you already handled;
- read the cart or the order with the API rather than guessing its state from the `action_type`.

```js
// Express example
app.post('/tictactrip/webhook', express.json(), (req, res) => {
  res.sendStatus(204);

  const { event_id, action_type, order, test } = req.body;

  if (test || alreadyHandled(event_id)) {
    return;
  }

  if (action_type === 'order.booked') {
    // Read the order and its tickets: GET /booking/v3/orders/{order.id}
  }
});
```

## Manage your webhooks

You can register **5 webhooks** at most, an url only once. Every route needs your token.

### Register a webhook
**[`POST /booking/v3/webhooks`](/api#operation/CreateWebhook)**

```bash
curl --location 'https://api.tictactrip.eu/booking/v3/webhooks' \
--header 'Authorization: Bearer token' \
--header 'Content-Type: application/json' \
--data '{
    "url": "https://partner.example/tictactrip/webhook"
}'
```

**Response** `201`:

```json
{
  "webhook": {
    "id": "0b8f6b0e-6a2e-4b8e-9f4b-6c7a0f1b2c3d",
    "url": "https://partner.example/tictactrip/webhook",
    "createdAt": "2026-11-03T10:00:00.000Z"
  }
}
```

An url that is not a public `https` url, already registered, or a sixth webhook answers a `400`.

### List your webhooks
**[`GET /booking/v3/webhooks`](/api#operation/GetWebhooks)**

```bash
curl --location 'https://api.tictactrip.eu/booking/v3/webhooks' \
--header 'Authorization: Bearer token'
```

**Response** `200`:

```json
{
  "webhooks": [
    {
      "id": "0b8f6b0e-6a2e-4b8e-9f4b-6c7a0f1b2c3d",
      "url": "https://partner.example/tictactrip/webhook",
      "createdAt": "2026-11-03T10:00:00.000Z"
    }
  ]
}
```

### Get a webhook
**[`GET /booking/v3/webhooks/{webhook_id}`](/api#operation/GetWebhook)**

Answers `{ "webhook": { ... } }`, or a `404` if it is not one of yours.

### Change the url of a webhook
**[`PUT /booking/v3/webhooks/{webhook_id}`](/api#operation/UpdateWebhook)**

```bash
curl --location --request PUT 'https://api.tictactrip.eu/booking/v3/webhooks/0b8f6b0e-6a2e-4b8e-9f4b-6c7a0f1b2c3d' \
--header 'Authorization: Bearer token' \
--header 'Content-Type: application/json' \
--data '{
    "url": "https://partner.example/tictactrip/webhook-v2"
}'
```

### Delete a webhook
**[`DELETE /booking/v3/webhooks/{webhook_id}`](/api#operation/DeleteWebhook)**

```bash
curl --location --request DELETE 'https://api.tictactrip.eu/booking/v3/webhooks/0b8f6b0e-6a2e-4b8e-9f4b-6c7a0f1b2c3d' \
--header 'Authorization: Bearer token'
```

Answers a `204`: the url is not called anymore.

### Send test events
**[`POST /booking/v3/webhooks/test`](/api#operation/TestWebhooks)**

Sends events flagged `"test": true` to your webhooks, the same way as the real ones (same body, same retries), to try your integration:

- `actionType` (optional): the event to send. Without it, one event of each type.
- `cartId` (optional): one of your carts. The events are then on this cart and its order, so you can try reading them. Without it, they are on the example id `0000000000000000`, which answers a `404` when read.

```bash
curl --location 'https://api.tictactrip.eu/booking/v3/webhooks/test' \
--header 'Authorization: Bearer token' \
--header 'Content-Type: application/json' \
--data '{
    "actionType": "order.booked",
    "cartId": "6771146ca0b7432b"
}'
```

**Response** `202`:

```json
{
  "events": [
    {
      "eventId": "3f1c2a4e-8b7d-4e21-9c55-0a6b2d9e7f10",
      "actionType": "order.booked"
    }
  ]
}
```

An unknown `actionType`, or no webhook registered, answers a `400`; a cart that is not one of yours, a `404`.
