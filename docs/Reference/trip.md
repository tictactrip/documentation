---
sidebar_position: 2
---

# Trip


## Definition

A **trip** represent a travel, typically there are two trips for a round trip and a single one for a one-way. A **trip** consist of several **[Segments](./segment.md)**.


## Example

I make a trip from Paris to Brussels, it contains two **[Segments](./segment.md)**, Paris - Lille by Ouigo then Lille - Brussels by Flixbus.

This combination of **[Segments](./segment.md)** constitutes a **trip**. 
```json
{
  "trips": {
    "outboundTrip": {
      "id": "1164994",
      "uuid": "6c5685e2-4132-4025-b602-ed984ea7934f",
      "origin": {
        "id": 628,
        "city": "Paris",
        "country": "France",
        "station": "Marne-la-Vallée Chessy Disneyland Paris"
      },
      "destination": {
        "id": 1061,
        "city": "Bruxelles",
        "country": "Belgique",
        "station": "Brussels, Brussels-North station"
      },
      "originOffset": "+0200",
      "destinationOffset": "+0200",
      "priceCents": 3299,
      "feeCents": 600,
      "paidPrice": 3299,
      "departureUTC": 1662722580,
      "arrivalUTC": 1662739200,
      "durationMinutes": 277,
      "companies": [
        "OUIGO Grande vitesse",
        "Flixbus"
      ],
      "segments": [
        {
          "id": "1764044",
          "company": "OUIGO Grande vitesse",
          "mean": "train",
          "origin": {
            "city": "Paris",
            "country": "France",
            "station": "Marne-la-Vallée Chessy Disneyland Paris",
            "lat": 48.8566,
            "long": 2.3515
          },
          "destination": {
            "city": "Lille",
            "country": "France",
            "station": "Lille Flandres",
            "lat": 50.638756,
            "long": 3.076675
          },
          "isBookable": true,
          "priceCents": 1700,
          "feeCents": 100,
          "includedProviderFeeCents": 0,
          "departureUTC": 1662722580,
          "arrivalUTC": 1662726840,
          "originOffset": "+0200",
          "destinationOffset": "+0200",
          "durationMinutes": 71,
          "redirectionLink": "/redirect?company=13&origin=PT1&destination=AD1&date=2022-09-09&passengers=%5B%7B%22type%22%3A%22A%22%2C%22disability_type%22%3A%22NH%22%7D%5D&env=production"
        },
        {
          "id": "1764045",
          "company": "Flixbus",
          "mean": "bus",
          "origin": {
            "city": "Lille",
            "country": "France",
            "station": "Lille",
            "lat": 50.638756,
            "long": 3.076675
          },
          "destination": {
            "city": "Bruxelles",
            "country": "Belgique",
            "station": "Brussels, Brussels-North station",
            "lat": 50.834999,
            "long": 4.33264
          },
          "isBookable": true,
          "priceCents": 999,
          "feeCents": 0,
          "includedProviderFeeCents": 0,
          "departureUTC": 1662733200,
          "arrivalUTC": 1662739200,
          "originOffset": "+0200",
          "destinationOffset": "+0200",
          "durationMinutes": 100,
          "redirectionLink": "/redirect?company=5&origin=2215&destination=1785&date=09.09.2022&passengers=%7B%22adult%22%3A1%2C%22children%22%3A0%7D&env=production"
        }
      ],
      "mean": "MULTIMODAL",
      "co2g": 3493
    }
  }
}
```