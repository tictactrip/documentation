---
sidebar_position: 1
---

# Create a cart

The first step to make a booking is to create a cart. It has to contain at least an `outboundTripId` which you can retrieve with a **[search](../search-on-tictactrip/get-results)** and minimal passenger information for it to work.

```
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

## Response body example

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

Check the definition of a **[trip](../../Reference/trip.md)** and the full description of this **[request](/api#operation/CreateCart)**.

:::