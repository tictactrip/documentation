---
sidebar_position: 1
---

# Get all stop clusters



```
curl --location --request GET 'https://api.tictactrip.eu/v2/stopClusters' \
--header 'Authorization: Bearer token'
```
## Response body example

```json
[
  //...
  {
    "id": "c|FRparis___@u09tv",
    "name": "Paris",
    "city": "Paris",
    "region": "Île-de-France",
    "country": "fr",
    "latitude": 48.8566,
    "longitude": 2.3515
  },
  {
    "id": "c|ROvatrdorn@u86j3",
    "name": "Vatra Dornei",
    "city": "Vatra Dornei",
    "region": "Suceava",
    "country": "ro",
    "latitude": 47.3471814,
    "longitude": 25.3556149
  },
  {
    "id": "c|PTvilareal@ez66z",
    "name": "Vila Real",
    "city": "Vila Real",
    "region": "Norte",
    "country": "pt",
    "latitude": 41.2979376,
    "longitude": -7.75298965523
  }
  //...
]
```

:::tip

Check the definition of a **[stopCluster](../Reference/stop-cluster.md)**.

:::

:::info

Updates on these entities are generally done every 1 to 2 months.

:::

:::caution

For performance and load reasons, we strongly recommend that you perform your mapping in a cold stage.

:::