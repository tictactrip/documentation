---
sidebar_position: 6
---

# Download tickets

Once you have validated that the booking was successful by **[getting the order](./get-order)** you can download the tickets of the order.
You must pass the id of the order and the file name you want to give to the file as a parameter in the url.

```
curl --location --request GET 'https://api.tictactrip.eu/orderEtickets/fde73760a5354d18/download/ticketName'
```

## Response body example

![ticket screenshot](../../../static/img/altibusTicketPdf.png)

:::tip

Check the full description of this **[request](/api#operation/DownloadTicket)**.

:::

:::info

If there are several tickets in the order, they will all be in the same pdf.

:::
