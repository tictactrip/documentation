---
sidebar_position: 2
---

# Get results

Now that you have an origin and a destination id from the **[previous step](./get-origin-and-destination-ids)** you can do a search by specifying a date and the age of a passenger.
```
curl --location --request POST 'https://api.tictactrip.eu/v2/results' \
--header 'Authorization: Bearer token' \
--header 'Content-Type: application/json' \
--data-raw '{
	"originGpuid": "c|FRpralvano@u0hf0",
	"destinationGpuid": "c|FRmoutiers@u0hdu",
	"outboundDate": "2022-09-19T00:00:00Z",
	"passengers": [
		{
			"age": 30
		}
	]
}'
```

## Response body example

```json
{
  "trips": {
    "91c2b506-6667-46d4-ac7d-886b2a91cd01": {
      "id": "91c2b506-6667-46d4-ac7d-886b2a91cd01",
      "direction": "outboundTrip",
      "origin": {
        "id": "g|FRpravanai@u0hf0y",
        "name": "PRALOGNAN LA VANOISE Airelles",
        "city": "Pralognan La Vanoise",
        "region": " Auvergne-Rhône-Alpes",
        "country": " France",
        "address": "359 Rue Des Darbelays, 73710 Pralognan-la-Vanoise, France",
        "latitude": 45.3886,
        "longitude": 6.7163
      },
      "destination": {
        "id": "g|FRmosathba@u0hdu8",
        "name": "Moûtiers - Salins-les-Thermes - Brides-les-Bains",
        "city": "Moûtiers",
        "region": " Auvergne-Rhône-Alpes",
        "country": " France",
        "address": "352 Avenue Des Seizième Jeux Olympiques, 73600 Moûtiers, France",
        "latitude": 45.4867,
        "longitude": 6.5311
      },
      "available": true,
      "priceCents": 1420,
      "durationMinutes": 73,
      "departureUTC": 1663561920,
      "arrivalUTC": 1663566300,
      "originOffset": "+0200",
      "arrivalLocalISO": "2022-09-19T07:45:00+02:00",
      "departureLocalISO": "2022-09-19T06:32:00+02:00",
      "destinationOffset": "+0200",
      "transportType": "BUS",
      "providers": [
        {
          "name": "Altibus",
          "transportType": "bus"
        }
      ],
      "segments": [
        {
          "id": "db9b35a9-987c-4953-927f-f6782e598ec4",
          "provider": {
            "name": "Altibus",
            "transportType": "bus"
          },
          "origin": {
            "id": "g|FRpravanai@u0hf0y",
            "name": "PRALOGNAN LA VANOISE Airelles",
            "city": "Pralognan La Vanoise",
            "region": " Auvergne-Rhône-Alpes",
            "country": " France",
            "address": "359 Rue Des Darbelays, 73710 Pralognan-la-Vanoise, France",
            "latitude": 45.3886,
            "longitude": 6.7163
          },
          "destination": {
            "id": "g|FRmosathba@u0hdu8",
            "name": "Moûtiers - Salins-les-Thermes - Brides-les-Bains",
            "city": "Moûtiers",
            "region": " Auvergne-Rhône-Alpes",
            "country": " France",
            "address": "352 Avenue Des Seizième Jeux Olympiques, 73600 Moûtiers, France",
            "latitude": 45.4867,
            "longitude": 6.5311
          },
          "priceCents": 1420,
          "durationMinutes": 73,
          "departureUTC": 1663561920,
          "arrivalUTC": 1663566300,
          "originOffset": "+0200",
          "destinationOffset": "+0200",
          "arrivalLocalISO": "2022-09-19T07:45:00+02:00",
          "departureLocalISO": "2022-09-19T06:32:00+02:00",
          "transportType": "bus",
          "co2g": 669
        }
      ]
    },
    //...
  }
}
```

:::tip

Check the full description of this **[request](/api#operation/GetResults)**.

:::

:::info

For our partners who do not know the age of their visitors, we recommend that they enter a default age of 30 years corresponding to an "Adult" typology.

:::