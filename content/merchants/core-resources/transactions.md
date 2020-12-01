---
date: 2018-09-17T15:21:22+02:00
title: Transactions
description: Transaction resources.
weight: 3
---

Transactions are a way to manage value on and between accounts in the Rehive wallet. Every transaction can be either a `debit` or a `credit`. In simple terms `debit` reduces an account's balance and a `credit` increases an account's balance. A transfer can be thought of as a 2-step transaction where one user is debited and another is credited the required amount. This structure allows for easy verification of balances and can be used to back track to a specific point in time to discover what the balance was.

Every transaction has a status that can be used to gauge the state of the transaction. The statuses are:

status | description
---|---
Initiating | processing the transaction insert
Pending | the transaction has passed all validation
Complete | the transaction has been applied to the account currency's balance.
Failed | the transaction and the balance have been reverted

### Object

Transactions are essentially logs of actions on an account balance. With this in mind, transactions contain information that can be used to identify who made the transaction, what the transaction was made on, and how the transaction impacted the account.

A full transaction object looks like:

```json
{
    "status": "success",
    "data": {
        "id": "00000000-0000-0000-0000-000000000000",
        "tx_type": "credit",
        "subtype": null,
        "note": "",
        "metadata": {},
        "status": "Pending",
        "reference": null,
        "amount": 500,
        "fee": 0,
        "total_amount": 500,
        "balance": 0,
        "account": "0000000000",
        "label": "Credit",
        "company": "rehive_prod",
        "currency": {
            "description": "Rand",
            "code": "ZAR",
            "symbol": "R",
            "unit": "rand",
            "divisibility": 2
        },
        "source_transaction": null,
        "destination_transaction": null,
        "messages": [],
        "fees": [],
        "created": 1476691969394,
        "updated": 1496135465287
    }
}
```

A debit transaction will look much the same as the above, except the `amount` will be a negative value and the `tx_type` will be `Debit`.

On the other hand a transfer will have some additional information in the `source_transaction` or `destination_transaction` attributes. As stated previously, transfers are simply debits/credits themselves. So, if a transfer is made between two accounts 2 transactions will be created:

1. A debit transaction reducing the balance of the sender. In addition the `destination_transaction` attribute will be populated with a pointer to the receiver transaction.
2. A credit transaction increasing the balance of the receiver. In addition the `source_transaction` attribute will be populated with a pointer to the sender transaction.

### Endpoints

section | type| URL | methods
---|---|---|---
user | multiple |  `https://api.rehive.io/3/transactions/` | `GET`, `POST`
user | single |  `https://api.rehive.io/3/transactions/<id>/` | `GET`, `PUT`,`PATCH`
user | single |  `https://api.rehive.io/3/transactions/transfer/` | `POST`
user | single |  `https://api.rehive.io/3/transactions/debit/` | `POST`
user | single |  `https://api.rehive.io/3/transactions/credit/` | `POST`

### Usage

Usage remains the same for all endpoints in Rehive. Simply invoke one of the allowed HTTP methods with the correct `Content-Type` and a `Authorization` header.
