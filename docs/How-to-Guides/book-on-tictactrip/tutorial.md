---
sidebar_position: 1
---

# Tutorial

## Create a cart

The first step to make a booking is to create a cart. It has to contain at least an `outboundTripId` which you can retrieve with a **[search](/docs/How-to-Guides/search-on-tictactrip/tutorial)** and minimal passenger information for it to work.

```bash
curl --location --request POST 'https://api.tictactrip.eu/booking/v3/carts' \
--header 'Authorization: Bearer token' \
--header 'Content-Type: application/json' \
--data-raw '{
    "outboundTripId": "91c2b506-6667-46d4-ac7d-886b2a91cd01",
    "passengers": [
        {
            "age": 30,
            "discountCards": []
        }
    ]
}
'
```

### Response body example

```json
{
  "cart": {
    "id": "bf58e6091bd04eb2",
    "partnerId": null,
    "partnerExternalId": null,
    "paidPrice": 1420,
    "rawPrice": 1320,
    "trips": {
      "outboundTrip": {
        "id": "1165038",
        "uuid": "91c2b506-6667-46d4-ac7d-886b2a91cd01",
        "origin": {
          "id": 12709,
          "city": "Pralognan La Vanoise",
          "country": "France",
          "station": "PRALOGNAN LA VANOISE Airelles"
        },
        "destination": {
          "id": 549,
          "city": "Moûtiers",
          "country": "France",
          "station": "Moûtiers - Salins-les-Thermes - Brides-les-Bains"
        },
        "originOffset": "+0200",
        "destinationOffset": "+0200",
        "priceCents": 1420,
        "feeCents": 0,
        "paidPrice": 1420,
        "departureUTC": 1663561920,
        "arrivalUTC": 1663566300,
        "durationMinutes": 73,
        "companies": [
          "Altibus"
        ],
        "segments": [
          {
            "id": "1764105",
            "company": "Altibus",
            "mean": "bus",
            "origin": {
              "city": "Pralognan La Vanoise",
              "country": "France",
              "station": "PRALOGNAN LA VANOISE Airelles",
              "lat": 45.3819,
              "long": 6.72121
            },
            "destination": {
              "city": "Moûtiers",
              "country": "France",
              "station": "Moûtiers - Salins-les-Thermes - Brides-les-Bains",
              "lat": 45.4852,
              "long": 6.5291
            },
            "isBookable": true,
            "priceCents": 1420,
            "feeCents": 100,
            "includedProviderFeeCents": 120,
            "departureUTC": 1663561920,
            "arrivalUTC": 1663566300,
            "originOffset": "+0200",
            "destinationOffset": "+0200",
            "durationMinutes": 73,
            "redirectionLink": "/redirect?company=21&trip=MOG577&date=19/09/2022&env=production"
          }
        ],
        "mean": "BUS",
        "co2g": 669
      }
    },
    "passengers": [
      {
        "id": 1445775,
        "lastName": null,
        "firstName": null,
        "title": null,
        "isCustomer": false,
        "discountCardId": null,
        "category": "adults",
        "discountCards": [],
        "age": 30,
        "birthdate": null
      }
    ]
  }
}
```

:::tip

Check the definition of a **[trip](/docs/Reference/glossary#trip)** and the full description of this **[request](/api#operation/CreateCart)**.

:::

## Update a cart

Now that you have created a cart, you will have to update it with the information of the passengers and the customer.  
You must pass the id of the cart **[previously created](/docs/How-to-Guides/book-on-tictactrip/tutorial#create-a-cart)** as a parameter in the url.

```bash
curl --location --request PATCH 'https://api.tictactrip.eu/booking/v3/carts/bf58e6091bd04eb2' \
--header 'Authorization: Bearer token' \
--header 'Content-Type: application/json' \
--data-raw '{
    "passengers": [
        {
            "lastName": "lastName",
            "discountCards": [],
            "isCustomer": true,
            "title": "MR",
            "firstName": "firstName",
            "category": "adults",
            "age": 30,
            "birthdate": "1992-09-09"
        }
    ],
    "customer": {
        "lastName": "lastName",
        "mail": "mail@mail.com",
        "isSubscribedToNewsletter": false,
        "title": "MR",
        "firstName": "firstName",
        "birthdate": "1992-09-09"
    }
}'
```

### Response body example

```json
{
  "cart": {
    "id": "bf58e6091bd04eb2",
    "partnerId": null,
    "partnerExternalId": null,
    "paidPrice": 1180,
    "rawPrice": 1080,
    "trips": {
      //...
    },
    "passengers": [
      {
        "id": 1445778,
        "lastName": "lastName",
        "firstName": "firstName",
        "title": "MR",
        "isCustomer": true,
        "discountCardId": null,
        "category": "adults",
        "discountCards": [],
        "age": 30,
        "birthdate": "1992-09-09T00:00:00.000Z"
      }
    ],
    "customer": {
      "mail": "mail@mail.com",
      "title": "MR",
      "lastName": "lastName",
      "firstName": "firstName",
      "birthdate": "1992-09-09T00:00:00.000Z"
    }
  },
  "priceCentsDiff": 0,
  "isAvailable": true
}
```

:::tip

Check the full description of this **[request](/api#operation/UpdateCart)**.

:::

:::caution

A price lookup is done everytime a cart is updated.

:::

## Create an order

The creation of an order is done from a cart, so you will not be able to create an order if you have not **[created](/docs/How-to-Guides/book-on-tictactrip/tutorial#create-a-cart)** and **[updated](/docs/How-to-Guides/book-on-tictactrip/tutorial#update-a-cart)** the cart before.  
You must pass the `cartId` in the body of the request.

```bash
curl --location --request POST 'https://api.tictactrip.eu/booking/v3/orders' \
--header 'Authorization: Bearer token' \
--header 'Content-Type: application/json' \
--data-raw '{
    "cartId": "bf58e6091bd04eb2"
}'
```

### Response body example

```json
{
  "order": {
    "id": "fde73760a5354d18",
    "orderDate": "2022-09-13T13:59:06.070Z",
    "cartId": "bf58e6091bd04eb2",
    "orderStatus": "CREATED",
    "trips": {
      //...
    },
    "passengers": [
      {
        //...
      }
    ],
    "customer": {
      //...
    },
    "paymentStatus": "ACCEPTED"
  },
  "priceCentsDiff": 0,
  "isAvailable": true,
  "expiresAt": "2022-09-13T14:14:06.070Z"
}

```

:::tip

Check the full description of this **[request](/api#operation/CreateOrder)**.

:::

:::info

When creating an order an option is placed on the ticket(s).

:::

## Book an order

The booking is done asynchronously from an **[order](/docs/How-to-Guides/book-on-tictactrip/tutorial#create-an-order)**.  
You must pass the id of the order **[previously created](/docs/How-to-Guides/book-on-tictactrip/tutorial#create-an-order)** as a parameter in the url.

```bash
curl --location --request POST 'https://api.tictactrip.eu/booking/v3/orders/fde73760a5354d18/book' \
--header 'Authorization: Bearer token'
```

### Response body example

```json
{
  "order": {
    "id": "fde73760a5354d18",
    "rawPrice": 1080,
    "paidPrice": 1180,
    "totalPrice": 1180,
    "orderDate": "2022-09-13T15:54:21.975Z",
    "cartId": "bf58e6091bd04eb2",
    "orderStatus": "PENDING_BOOKING",
    "trips": {
      //...
    },
    "passengers": [
      {
        //...
      }
    ],
    "customer": {
      //...
    },
    "paymentStatus": "ACCEPTED"
  }
}

```

:::tip

Check the full description of this **[request](/api#operation/CreateBook)**.

:::

## Get an order

As the booking is done asynchronously, you have to call this endpoint to know if the booking was successful or not.  
If the `orderStatus` is set to `SUCESSS`, then the booking went well.

```bash
curl --location --request GET 'https://api.tictactrip.eu/booking/v3/orders/fde73760a5354d18' \
--header 'Authorization: Bearer token'
```

### Response body example

```json
{
  "order": {
    "id": "fde73760a5354d18",
    "rawPrice": 1080,
    "paidPrice": 1180,
    "totalPrice": 1180,
    "orderDate": "2022-09-13T15:54:21.975Z",
    "cartId": "bf58e6091bd04eb2",
    "orderStatus": "SUCCESS",
    "trips": {
      //...
    },
    "passengers": [
      {
        //...
      }
    ],
    "customer": {
      //...
    },
    "paymentStatus": "ACCEPTED"
  }
}

```

:::tip

Check the full description of this **[request](/api#operation/GetOrder)**.

:::

:::info

A booking can be long, it may be necessary to call this endpoint several times.

:::

## Download tickets

Once you have validated that the booking was successful by **[getting the order](/docs/How-to-Guides/book-on-tictactrip/tutorial#get-an-order)** you can download the tickets of the order.
You must pass the id of the order and the file name you want to give to the file as a parameters in the url.

```bash
curl --location --request GET 'https://api.tictactrip.eu/booking/v3/orders/fde73760a5354d18/ticket?filename=ticketName' \
--header 'Authorization: Bearer token'
```

### Response body example

![ticket screenshot](../../../static/img/altibusTicketPdf.png)

:::tip

Check the full description of this **[request](/api#operation/DownloadTicket)**.

:::

:::info

If there are several tickets in the order they will all be in the same pdf.

:::