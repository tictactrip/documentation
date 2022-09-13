---
sidebar_position: 3
---

# Get all stop groups



```
curl --location --request GET 'https://api.tictactrip.eu/v2/stopGroups' \
--header 'Authorization: Bearer token'
```

## Response body example

```json
[
  //...
  {
    "id": "g|FRpamo12__@u09tug",
    "name": "Paris Montparnasse 1 Et 2",
    "city": "Paris",
    "region": "Île-de-France",
    "country": "fr",
    "latitude": 48.8409,
    "longitude": 2.3205,
    "transportTypes": [
      "bus",
      "train"
    ]
  },
  {
    "id": "g|FRpamo3va_@u09tug",
    "name": "Paris Montparnasse 3 Vaugirard",
    "city": "Paris",
    "region": "Île-de-France",
    "country": "fr",
    "latitude": 48.8409,
    "longitude": 2.3205,
    "transportTypes": [
      "bus",
      "train"
    ]
  },
  {
    "id": "g|FRparsaila@u09whc",
    "name": "Paris Saint-Lazare",
    "city": "Paris",
    "region": "Île-de-France",
    "country": "fr",
    "latitude": 48.8756,
    "longitude": 2.3254,
    "transportTypes": [
      "bus",
      "train"
    ]
  }
  //...
]
```

:::tip

Check the definition of a **[stopGroup](../Reference/stop-group.md)**.

:::

:::info

Updates on these entities are generally done every 1 to 2 months.

:::

:::caution

For performance and load reasons, we strongly recommend that you perform your mapping in a cold stage.

:::