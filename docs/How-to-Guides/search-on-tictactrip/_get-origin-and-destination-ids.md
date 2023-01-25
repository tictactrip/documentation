---
sidebar_position: 1
---

# Get origin and destination ids

In order to search on **[Tictactrip](https://www.tictactrip.eu/)** you will need two **[stopCluster](../../Reference/stop-cluster.md)** ids, one for the origin and one for the destination.  
For example `c|FRpralvano@u0hf0` and `c|FRmoutiers@u0hdu`. You can notice that they are always prefixed by a "c" for "cluster".

```
curl --location --request GET 'https://api.tictactrip.eu/v2/stopClusters' \
--header 'Authorization: Bearer token'
```

## Response body example

```json
[
  //...
  {
    "id": "c|FRpralvano@u0hf0",
    "name": "Pralognan La Vanoise",
    "city": "Pralognan La Vanoise",
    "region": "Auvergne-Rhône-Alpes",
    "country": "FR",
    "latitude": 45.3819,
    "longitude": 6.72121
    //...
  },
  {
    "id": "c|FRmoutiers@u0hdu",
    "name": "Moûtiers",
    "city": "Moûtiers",
    "region": "Auvergne-Rhône-Alpes",
    "country": "FR",
    "latitude": 45.4852,
    "longitude": 6.5291
    //...
  },
  {
    "id": "c|PTvilareal@ez66z",
    "name": "Vila Real",
    "city": "Vila Real",
    "region": "Norte",
    "country": "pt",
    "latitude": 41.2979376,
    "longitude": -7.75298965523
    //...
  }
  //...
]
```

:::tip

Check the definition of a **[stopCluster](../../Reference/stop-cluster.md)** and the full description of this **[request](/api#operation/GetAllStopClusters)**.

:::

:::info

Updates on these entities are generally done every 1 to 2 months.

:::

:::caution

For performance and load reasons, we strongly recommend that you do not do this mapping in a live manner.

:::
