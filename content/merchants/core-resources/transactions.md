---
date: 2018-09-17T15:21:22+02:00
title: Transactions
description: Transaction resources.
weight: 4
---

A Transaction object returned matches the structure of a Rehive transaction. Below is the example:

### Object

```json
{
    "rehive_code": "459b3407-3009-4f77-bbbf-5d6e12788958",
    "settled": false,
    "payment_processor_quote": 14,
    "details": {
    "id": "459b3407-3009-4f77-bbbf-5d6e12788958",
    "collection": "b9c56ace-7dd8-49f6-ba79-04cd9d3314d2",
    "tx_type": "credit",
    "subtype": "deposit_crypto",
    "note": "",
    "metadata": {
        "service_payment_requests": {
        "request_id": "deb62287-dbc6-4f11-8f83-d753f6cf1284",
        "payer_email": "customer@rehive.com",
        "payer_mobile": "+27768507683",
        "sender_identifier": "fbb59810-04ab-401a-a017-d293dfa5c7c5"
        },
        "service_bitcoin": {
        "confirmations": "0",
        "tx_hash": "<BITCOIN_TRANSACTION_HASH>",
        },
    },
    "status": "Pending",
    "reference": null,
    "amount": 200,
    "fee": 0,
    "total_amount": 200,
    "account": "24AX64NGEJ",
    "label": "Crypto currency deposit",
    "company": "prs_production",
    "destination_transaction": null,
    "fees": [],
    "archived": false,
    "created": 1596795344112,
    "updated": 1596795346496
    }
}
```
