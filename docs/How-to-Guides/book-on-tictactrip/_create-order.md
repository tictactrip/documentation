---
sidebar_position: 3
---

# Create an order

The creation of an order is done from a cart, so you will not be able to create an order if you have not **[created](./create-cart)** and **[updated](./update-cart)** the cart before.  
You must pass the `cartId` in the body of the request.

```
curl --location --request POST 'https://api.tictactrip.eu/booking/v3/orders' \
--header 'Authorization: Bearer token' \
--header 'Content-Type: application/json' \
--data-raw '{
    "cartId": "bf58e6091bd04eb2"
}'
```

## Response body example

```json
{
  "order": {
    "id": "fde73760a5354d18",
    "orderDate": "2022-09-13T13:59:06.070Z",
    "cartId": "bf58e6091bd04eb2",
    "orderStatus": "CREATED",
    "trips": {
      "outboundTrip": {
        "id": "309508",
        "origin": {
          "city": "Pralognan La Vanoise",
          "country": "France",
          "station": "PRALOGNAN LA VANOISE Airelles"
        },
        "destination": {
          "city": "Moûtiers",
          "country": "France",
          "station": "Moûtiers - Salins-les-Thermes - Brides-les-Bains"
        },
        "priceCents": 1180,
        "feeCents": 0,
        "paidPrice": 1180,
        "departureUTC": 1663561920,
        "arrivalUTC": 1663566300,
        "originOffset": "+0200",
        "destinationOffset": "+0200",
        "durationMinutes": 73,
        "companies": ["Altibus"],
        "segments": [
          {
            "id": "406325",
            "company": "Altibus",
            "mean": "bus",
            "origin": {
              "city": "Pralognan La Vanoise",
              "country": "France",
              "station": "PRALOGNAN LA VANOISE Airelles",
              "lat": 45.3886,
              "long": 6.7163
            },
            "destination": {
              "city": "Moûtiers",
              "country": "France",
              "station": "Moûtiers - Salins-les-Thermes - Brides-les-Bains",
              "lat": 45.4867,
              "long": 6.5311
            },
            "priceCents": 1180,
            "feeCents": 100,
            "includedProviderFeeCents": 120,
            "departureUTC": 1663561920,
            "arrivalUTC": 1663566300,
            "originOffset": "+0200",
            "destinationOffset": "+0200",
            "durationMinutes": 73,
            "isBookable": true,
            "redirectionLink": "/redirect?company=21&trip=MOG577&date=19/09/2022&env=production"
          }
        ],
        "mean": "BUS",
        "co2g": 669
      }
    },
    "passengers": [
      {
        "id": 349419,
        "title": "MR",
        "lastName": "lastName",
        "firstName": "firstName",
        "category": "adults",
        "discountCards": [],
        "isCustomer": true,
        "age": 30,
        "birthDay": 9,
        "birthMonth": 9,
        "birthYear": 1992,
        "discountCardId": null
      }
    ],
    "customer": {
      "mail": "mail@mail.com",
      "title": "MR",
      "lastName": "lastName",
      "firstName": "firstName",
      "birthDay": 9,
      "birthMonth": 9,
      "birthYear": 1992
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
