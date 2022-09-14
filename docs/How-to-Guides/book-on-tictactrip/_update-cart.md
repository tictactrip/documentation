---
sidebar_position: 2
---

# Update a cart

Now that you have created a cart, you will have to update it with the information of the passengers and the customer.  
You must pass the id of the cart **[previously created](./create-cart)** as a parameter in the url.
```
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

## Response body example

```json
{
  "cart": {
    "id": "bf58e6091bd04eb2",
    "partnerId": null,
    "partnerExternalId": null,
    "paidPrice": 1180,
    "rawPrice": 1080,
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
        "priceCents": 1080,
        "feeCents": 0,
        "paidPrice": 1180,
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
            "priceCents": 1180,
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