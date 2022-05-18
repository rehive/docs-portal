---
date: 2019-11-05T15:21:22+02:00
title: Transaction collections
description: Transaction collection resources.
weight: 6
---

Transaction collections are a way to group multiple transactions under a single identifier. Every transaction is part of a single transaction collection. A transaction collection can contain multiple different transactions, with different types, subtypes and accounts. In simple terms transaction collections are used to "organize" transactions.

As an organization structure, transaction-collections allow you to create multiple transactions within an atomic batch. These transactions can have complex relationships with each other: partners (transfers), parents and inferred.

field | description
---|---
partner | transactions that are transfers between two accounts.
parent | transactions that need to be defined as a child of another transaction.
inferred | transactions created internally due to company defined settings.

Additionally the transactions in a collection are ordered by "creation" time and can have their statuses modified via an update on the collection. This update is also atomic and will either succeed for all transactions or fail for all transactions.

Transaction collections can be created by both admin users and end-users. However, transaction collections created by end-users are subject to the same rules as normal transactions.

### Object

The transaction collection object is very simple as it only requires enough fields to define the collection, while the transactions themselves define all the other relevant values.

A full transaction collection object looks like:

```json
{
    "id": "00000000-0000-0000-0000-000000000000",
    "transactions": [
        {
            "id": "10000000-0000-0000-0000-000000000000",
            "parent": null,
            "partner": "20000000-0000-0000-0000-000000000000",
            "inferred": false,
            "tx_type": "debit",
            "subtype": null,
            "note": null,
            "metadata": {},
            "status": "Complete",
            "reference": "",
            "amount": -1,
            "total_amount": -1,
            "balance": 0,
            "account": "0000000000",
            "label": "Debit",
            "user": {
                "id": "00000000-0000-0000-0000-000000000000",
                "first_name": "Joe",
                "last_name": "Soap",
                "email": "joe@rehive.com",
                "username": null,
                "mobile": "+27840000000",
                "profile": null
            },
            "currency": {
                "code": "USD",
                "display_code": "USD",
                "description": "United States dollar",
                "symbol": "$",
                "unit": "dollar",
                "divisibility": 2,
            },
            "archived": false,
            "created": 1476691969394,
            "updated": 1476691969394
        },
        {
            "id": "20000000-0000-0000-0000-000000000000",
            "parent": null,
            "partner": "10000000-0000-0000-0000-000000000000",
            "inferred": false,
            "tx_type": "credit",
            "subtype": null,
            "note": null,
            "metadata": {},
            "status": "Complete",
            "reference": "",
            "amount": 1,
            "total_amount": 1,
            "balance": 0,
            "account": "0000000000",
            "label": "Credit",
            "user": {
                "id": "00000000-0000-0000-0000-000000000000",
                "first_name": "Joe",
                "last_name": "Soap",
                "email": "joe@rehive.com",
                "username": null,
                "mobile": "+27840000000",
                "profile": null
            },
            "currency": {
                "code": "USD",
                "display_code": "USD",
                "description": "United States dollar",
                "symbol": "$",
                "unit": "dollar",
                "divisibility": 2,
            },
            "archived": false,
            "created": 1476691969394,
            "updated": 1476691969394
        }
    ],
    "archived": false,
    "created": 1476691969394,
    "updated": 1496135465287
}
```

The content within the `transaction` object will depend on the endpoint. If the data is accessed by an admin endpoint it will contain all the transactions related to the collection. However, if the data is accessed via an user endpoint, it will only contain transactions associated with the given user's accounts.

### Endpoints

Take a look at the [API Reference](https://docs.platform.rehive.com) for the list of transaction-collection endpoints.

All endpoints that contain `/transaction-collections/` in their URL path are used for handling transaction-collections.

### Usage

Usage remains the same for all endpoints in Rehive. Simply invoke one of the allowed HTTP methods with the correct `Content-Type` and a `Authorization` header.

When creating transactions and supplying a custom `id`, that `id` must be a [version 4 UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) and there must be no other transaction-collections in the system with the same `id`.
