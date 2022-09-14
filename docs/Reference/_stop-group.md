---
sidebar_position: 3
---

# Stop Group

## Definition
A **stopGroup** is a set of stations. In "real world" semantics, a **stopGroup** matches a physical station, or several kinds of stations in the same real world location.


## Example
A **stopGroup** "Paris Bercy" has two stations being the "train station" and the "bus station", but in practice, the user only wants to know about "Paris Bercy" as a transportation hub. Thus, we group them under a single entity named **stopGroup**.

```json
{
  "id": "g|FRpariberc@u09ty4",
  "name": "Paris Bercy ",
  "city": "Paris",
  "region": "Île-de-France",
  "country": "fr",
  "latitude": 48.8393,
  "longitude": 2.3829,
  "transportTypes": [
    "bus",
    "train"
  ]
}
```