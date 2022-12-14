---
sidebar_position: 4
---

# Book an order

The booking is done asynchronously from an **[order](./create-order)**.  
You must pass the id of the order **[previously created](./create-order)** as a parameter in the url.

```
curl --location --request POST 'https://api.tictactrip.eu/booking/v3/orders/fde73760a5354d18/book' \
--header 'Authorization: Bearer token'
```

## Response body example

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
      "outboundTrip": {
        "id": "309519",
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
        "companies": [
          "Altibus"
        ],
        "segments": [
          {
            "id": "406338",
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
        "id": 349430,
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
  }
}

```

:::tip

Check the full description of this **[request](/api#operation/CreateBook)**.

:::