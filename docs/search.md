---
sidebar_position: 2
---

# Search

:::tip
You can use this [**POSTMAN collection**](../static/Tictactrip.postman_collection.json) to test the API.
:::

## 1. Get origin and destination IDs

**`GET /stopClusters`**

In order to search on **[Tictactrip](https://www.tictactrip.eu/)** you will need the IDs of two places. They can be of two types : **[stopCluster](/docs/glossary#stopcluster)** or **[stopGroup](/docs/glossary#stopGroup)**.

For example `c|FRlyon____@u05kq` for Lyon and `g|FRlysaextg@u05s5e` for its airport train station, "Lyon-Saint-Exupery TGV".

```bash
curl --location --request GET 'https://api.tictactrip.eu/v2/stopClusters' \
--header 'Authorization: Bearer token'
```

### Response body example


```json
[
  //...
  // The stopCluster for Lyon
    {
        "id": "c|FRlyon____@u05kq",
        "name": "Lyon",
        "city": "Lyon",
        "region": "Auvergne-Rhône-Alpes",
        "country": "FR",
        "latitude": 45.764043,
        "longitude": 4.835659,
        "transportTypes": [
            "train"
        ],
        // The stopGroups belonging to this stopCluster
        "stopGroups": [
            {
                "id": "g|FRlyonperr@u05kmb",
                "name": "Lyon, Perrache",
                "city": "Lyon",
                "region": "Auvergne-Rhône-Alpes",
                "country": "FR",
                "address": "Voute Ouest De Perrache, 69002 Lyon, France",
                "latitude": 45.74916,
                "longitude": 4.82632,
                "transportTypes": [
                    "train"
                ]
            },
            {
                "id": "g|FRlysaextg@u05s5e",
                "name": "Lyon-Saint-Exupery Tgv",
                "city": "Lyon",
                "region": "Auvergne-Rhône-Alpes",
                "country": "FR",
                "address": "2 Rue De Finlande, 69125 Colombier-Saugnieu, France",
                "latitude": 45.7209,
                "longitude": 5.0759,
                "transportTypes": [
                    "train"
                ]
            },
            // ... other stopGroups
        ]
    }
      // ... other stopClusters
  }
]
```


:::tip

Check the definition of a **[stopCluster](/docs/glossary#stopcluster)** and the full description of this **[request](/api#operation/GetAllStopClusters)**.

:::

:::info

Updates on these entities are generally done every 1 to 2 months.

:::

:::caution

For performance and load reasons, we strongly recommend that you do not do this mapping in a live manner.

:::

## 2. Get results

**`POST /v2/results`**


Now that you have an origin and a destination id from the **[previous step](/docs/search#1-get-origin-and-destination-ids)** you can do a search by specifying a date and the age of a passenger.

```bash
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

### Filters
It is also possible to pass filters during the search. These filters allow to add precision to the search such as earliest departure time, latest arrival time, maximum number of stopovers, or minimum trip duration. For round trips, filters should be specified for each way.
Available Filters for Search Results

#### `timeFilters`
In 'YYYY-MM-DDTHH:mm' format.

`minDepartureTime`: Earliest time a trip should depart.

`maxDepartureTime`: Latest time a trip should depart.

`minArrivalTime`: Earliest time by which a trip should arrive at the destination.

`maxArrivalTime`: Latest time by which a trip should arrive at the destination.

#### `durationFilters`
In Minutes

`minDuration`: Shortest acceptable trip duration, measured in minutes.

`maxDuration`: Longest acceptable trip duration, also in minutes.

#### `stopoverFilters`
`minStopovers`: Minimum number of stopovers allowed during the trip.

`maxStopovers`: Maximum number of stopovers allowed.

#### `connectionFilters`
In kilometers.

`maxConnectionDistance`: Indicates the maximum distance, between two stops during a trip.

#### `relevanceSorts`
`durationOverPriceFactor`: A value between 0 and 1 to balance the relevance between trip price and duration.

0 implies price is the only factor.

0.5 means both factors are equally important.

1 implies duration is the only factor considered.

```bash
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
 ],
  "outboundFilters": {
    "timeFilters": {
      "minDepartureTime": "2022-09-19T00:00",
      "minArrivalTime": "2022-09-19T10:00",
      "maxArrivalTime": "2022-09-19T22:00"
    },
    "durationFilters": {
      "minDuration": 10,
      "maxDuration": 1000
    }
    // ...
  }
}'
```

### Response body example

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
    }
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
