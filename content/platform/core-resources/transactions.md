---
date: 2018-09-17T15:21:22+02:00
title: Transactions
description: Transaction resources.
weight: 7
---

Transactions are a way to manage value on and between accounts in the Rehive platform. Every transaction can be either a `debit` or a `credit`. In simple terms `debit` reduces an account's balance and a `credit` increases an account's balance. A transfer can be thought of as a 2-step transaction where one user is debited and another is credited the required amount. This structure allows for easy verification of balances and can be used to back track to a specific point in time to discover what the balance was.

Every transaction has a status that can be used to gauge the state of the transaction. The statuses are:

status | description
---|---
Initiating | processing the transaction insert
Pending | the transaction has passed all validation
Complete | the transaction has been applied to the account currency's balance.
Failed | the transaction and the balance have been reverted

Transactions can be made by both admin users and end-users. However, end-users are not permitted to alter the default status (Pending) of a transaction or modify the status after the transaction is created. Only admins have permission to make changes to an already saved object.

This means that if you wish to provide functionality to automatically transition a transactions when created by an end-user then you have two options:

1. Set the default status to "pending"
2. Build a service to receive event webhooks (transaction.create) and follow custom logic to either update the transaction to `complete` or `failed`.

<aside class="warning">
    The first option should be avoided in almost all use-cases as it allows end-users to make any transaction they want and it will immediately transition to <code>complete</code>. It is safer to transition to <code>pending</code> first as the <code>pending</code> state holds the funds in reserve until it is properly completed or failed (thus preventing double spend while a 3rd party system approves the transaction).
</aside>

### Object

Transactions are essentially logs of actions on an account balance. With this in mind, transactions contain information that can be used to identify who made the transaction, what the transaction was made on, and how the transaction impacted the account.

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
    "company": "rehive",
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
    "fees": [],
    "archived": false,
    "created": 1476691969394,
    "updated": 1496135465287
}
```

A debit transaction will look much the same as the above, except the `amount` will be a negative value and the `tx_type` will be `Debit`.

On the other hand a transfer will have some additional information in the `source_transaction` or `destination_transaction` attributes. As stated previously, transfers are simply debits/credits themselves. So, if a transfer is made between two accounts 2 transactions will be created:

1. A debit transaction reducing the balance of the sender. In addition the `destination_transaction` attribute will be populated with a pointer to the receiver transaction.
2. A credit transaction increasing the balance of the receiver. In addition the `source_transaction` attribute will be populated with a pointer to the sender transaction.

### Endpoints

There are ten transaction endpoints in the platform. Five for each of the two sections: `user` and `admin`

section | type| URL | methods
---|---|---|---
admin | multiple |  `https://api.rehive.com/3/admin/transactions/` | `GET`, `POST`
admin | single |  `https://api.rehive.com/3/admin/transactions/<id>/` | `GET`, `PATCH`, `PUT`, `DELETE`
admin | single |  `https://api.rehive.com/3/admin/transactions/debit/` | `POST`
admin | single |  `https://api.rehive.com/3/admin/transactions/credit/` | `POST`
admin | single |  `https://api.rehive.com/3/admin/transactions/transfer/` | `POST`
user | multiple |  `https://api.rehive.com/3/transactions/` | `GET`, `POST`
user | single |  `https://api.rehive.com/3/transactions/<id>/` | `GET`
user | single |  `https://api.rehive.com/3/transactions/debit/` | `POST`
user | single |  `https://api.rehive.com/3/transactions/credit/` | `POST`
user | single |  `https://api.rehive.com/3/transactions/transfer/` | `POST`

### Usage

Usage remains the same for all endpoints in Rehive. Simply invoke one of the allowed HTTP methods with the correct `Content-Type` and a `Authorization` header.
