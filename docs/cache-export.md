---
sidebar_position: 4
---

# Cache Export

The cache export system allows partners to retrieve search results in bulk via an asynchronous SFTP-based workflow.

## How it works

The partner deposits a CSV request file on the SFTP server of their choice. Tictactrip processes these files **several times a day** and deposits the results as XML files on the same SFTP.

```
Partner                SFTP             Tictactrip
   |                    |                    |
   |  1. Upload CSV     |                    |
   |------------------->|                    |
   |                    |                    |
   |                    | 2. Read CSV        |
   |                    | (several times/day)|
   |                    |------------------->|
   |                    |                    |
   |                    | 3. Process         |
   |                    | search requests    |
   |                    |                    |
   |                    | 4. Upload XML      |
   |                    |<-------------------|
   |                    |                    |
   | 5. Retrieve XML    |                    |
   |<-------------------|                    |
   |                    |                    |
```

## CSV request file

The request file is named `{PARTNER}.csv` and uses `;` as a separator.

### Columns

| Column | Description | Example |
|--------|-------------|---------|
| `outboundDepCityCode` | Outbound departure city code (place ID) | c&#124;FRchambery@u0h5n |
| `outboundArrCityCode` | Outbound arrival city code (place ID) | c&#124;FRmoutiers@u0hdu |
| `inboundDepCityCode` | Inbound departure city code (place ID) | c&#124;FRmoutiers@u0hdu |
| `inboundArrCityCode` | Inbound arrival city code (place ID) | c&#124;FRchambery@u0h5n |
| `outboundDate` | Outbound departure date | `2025-11-01` |
| `inboundDate` | Inbound departure date | `2025-11-02` |
| `outDateOffset` | Outbound date offset (days) | `0` |
| `inDateOffset` | Inbound date offset (days) | `0` |
| `outMaxArrivalTime` | Maximum outbound arrival time | `22:00` |
| `inMinDepartureTime` | Minimum inbound departure time | `06:00` |
| `minTransportDurationGo` | Minimum outbound trip duration (minutes) | `30` |
| `maxTransportDurationGo` | Maximum outbound trip duration (minutes) | `300` |
| `minTransportDurationBack` | Minimum inbound trip duration (minutes) | `30` |
| `maxTransportDurationBack` | Maximum inbound trip duration (minutes) | `300` |
| `minStopovers` | Minimum number of stopovers | `0` |
| `maxStopovers` | Maximum number of stopovers | `2` |
| `transportClass` | Transport class | `Economic` |
| `includedCarriers` | Carriers to include (comma-separated codes) | `13, 2C, 2C*, 2H, 9F` |
| `excludedCarriers` | Carriers to exclude (comma-separated codes) | `1, 13` |
| `outMinArrivalTime` | Minimum outbound arrival time | `08:00` |
| `inMaxDepartureTime` | Maximum inbound departure time | `20:00` |
| `outMaxLateArrivalTime` | Maximum late outbound arrival time | `23:00` |

:::info
City codes use [**Place IDs**](/docs/glossary#place-id) (e.g. `c|FRchambery@u0h5n`).
:::

## XML response file

The response file is named `{PARTNER}.xml` and contains a `<TransportList>` with one `<Transport>` element per result.

### Structure

```xml
<?xml version="1.0" encoding="utf-8"?>
<TransportList>
  <Transport CacheDate="2025-10-01T12:07:05.081Z"
             CarrierType="Other"
             PlatingCarrier=""
             Class="Economic">
    <Price Base="34" Tax="0" Currency="EUR" />
    <OutboundTrip Duration="77" Stopover="0">
      <Departure>
        <Date>2025-11-01</Date>
        <Location>c|FRchambery@u0h5n</Location>
        <Time>09:53</Time>
      </Departure>
      <Arrival>
        <Date>2025-11-01</Date>
        <ArrivalDateOffset>0</ArrivalDateOffset>
        <Location>c|FRmoutiers@u0hdu</Location>
        <Time>11:10</Time>
      </Arrival>
    </OutboundTrip>
    <InboundTrip Duration="78" Stopover="0">
      <Departure>
        <Date>2025-11-02</Date>
        <Location>c|FRmoutiers@u0hdu</Location>
        <Time>06:49</Time>
      </Departure>
      <Arrival>
        <Date>2025-11-02</Date>
        <ArrivalDateOffset>0</ArrivalDateOffset>
        <Location>c|FRchambery@u0h5n</Location>
        <Time>08:07</Time>
      </Arrival>
    </InboundTrip>
  </Transport>
  <!-- ... more Transport elements -->
</TransportList>
```

### Transport attributes

| Attribute | Description |
|-----------|-------------|
| `CacheDate` | Timestamp when the result was cached |
| `CarrierType` | Type of carrier |
| `PlatingCarrier` | Plating carrier code |
| `Class` | Transport class (e.g. `Economic`) |

### Price

| Attribute | Description |
|-----------|-------------|
| `Base` | Base price in the specified currency |
| `Tax` | Tax amount |
| `Currency` | Currency code (e.g. `EUR`) |

### OutboundTrip / InboundTrip

| Attribute | Description |
|-----------|-------------|
| `Duration` | Trip duration in minutes |
| `Stopover` | Number of stopovers |

Each trip contains `Departure` and `Arrival` elements with:

| Field | Description |
|-------|-------------|
| `Date` | Date of departure/arrival (`YYYY-MM-DD`) |
| `Location` | [Place ID](/docs/glossary#place-id) |
| `Time` | Local time (`HH:mm`) |
| `ArrivalDateOffset` | Number of days offset from departure date (arrival only) |
