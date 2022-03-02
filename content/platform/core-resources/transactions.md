---
date: 2018-09-17T15:21:22+02:00
title: Transactions
description: Transaction resources.
weight: 7
---

Transactions are a way to manage balance changes on accounts in the Rehive platform. Every transaction can be either a `debit` or a `credit`. In simple terms `debit` transactions reduce an account's balance and `credit` transactions increases an account's balance. A transfer can be thought of as a 2-step transaction where one user is debited and another is credited the same amount simultaneously.

Every transaction has a status that can be used to gauge the state of the transaction. The statuses are:

status | description
---|---
Initiating | the transaction is processing immediately after insert.
Pending | the transaction has passed all validation amd applied to the account's available balance if a debit transaction.
Complete | the transaction has been executed applied to the account's balance.
Failed | the transaction has been executed but did not succeed and had no impact on the account's balance.

Transactions are **immutable once executed** in Rehive. This means that once a transaction has reached an executed status of `Complete` or `Failed` they cannot be further modified in the system. To reverse a transaction's balance changes once it has executed you should create another transaction instead.

Transactions can be made by both admin users and end-users. However, end-users are not permitted to alter the status of a transaction. Only admins have permission to make changes to transactions.

### Object

Transactions are basically a series of logs recording actions on an account balance. With this in mind, transactions contain information that can be used to identify who made the transaction, what account and user the transaction was made on, and how the transaction impacted the balance of an account.

A full transaction object looks like:

```json
{
    "id": "00000000-0000-0000-0000-000000000000",
    "collection": "00000000-0000-0000-0000-000000000000",
    "parent": null,
    "partner": null,
    "inferred": false,
    "tx_type": "credit",
    "subtype": null,
    "note": "",
    "metadata": {},
    "status": "Complete",
    "reference": "",
    "amount": 500,
    "total_amount": 500,
    "balance": 0,
    "account": "0000000000",
    "label": "Credit",
    "currency": {
    	"code": "USD",
	    "description": "United States dollar",
	    "symbol": "$",
	    "unit": "dollar",
	    "divisibility": 2,
    },
    "user": {
        "id": "00000000-0000-0000-0000-000000000000",
        "first_name": "Joe",
        "last_name": "Soap",
        "email": "joe@rehive.com",
        "username": null,
        "mobile": "+27840000000",
        "profile": null
    },
    "messages": [],
    "archived": false,
    "created": 1476691969394,
    "updated": 1496135465287
}
```

A debit transaction will look much the same as the above, except the `amount` will be a negative value and the `tx_type` will be `debit`.

On the other hand, a transfer will have some additional information in the `partner` attribute. As stated previously, transfers are simply debits/credits themselves. So, if a transfer is made between two accounts then two transactions will be created:

1. A debit transaction reducing the balance of the sender. In addition the `partner` attribute will be populated with a pointer to the receiver transaction.
2. A credit transaction increasing the balance of the receiver. In addition the `partner` attribute will be populated with a pointer to the sender transaction.

### Endpoints

Take a look at the [API Reference](https://api.rehive.com/redoc/) for the list of transaction endpoints.

All endpoints that contain `/transactions/` in their URL path are used for handling transactions.

### Usage

Usage remains the same for all endpoints in Rehive. Simply invoke one of the allowed HTTP methods with the correct `Content-Type` and an `Authorization` header.

When creating transactions and supplying a custom `id`, that `id` must be a [version 4 UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) and there must be no other transactions in the system with the same `id`.
