---
sidebar_position: 1
---

# Segment


## Definition

A Segment has an origin (city and station), a destination (city and station), a price, a date, hours. 

## Example

A train that leaves Paris Gare De Lyon at 5:37 pm on september 8, 2022 and arrives in Marseille St Charles at 8:57 pm on september 8, 2022 for 79€ is a Segment.  

Indeed we have a city (Paris), a station (Paris Gare De Lyon), a date (september 8, 2022), a time (5:37 pm and 8:57 pm) and a price (79€).

```json
{
  "segments": [
    {
      "id": "1764020",
      "company": "Sncf Connect",
      "mean": "train",
      "origin": {
        "city": "Paris",
        "country": "France",
        "station": "Paris Gare De Lyon",
        "lat": 45.3819,
        "long": 6.72121
      },
      "destination": {
        "city": "Marseille",
        "country": "France",
        "station": "Marseilles St Charles",
        "lat": 45.4852,
        "long": 6.5291
      },
      "isBookable": true,
      "priceCents": 7900,
      "feeCents": 0,
      "departureUTC": 1662651420,
      "arrivalUTC": 1662663420,
      "durationMinutes": 200
      //...
    }
  ]
}
```
