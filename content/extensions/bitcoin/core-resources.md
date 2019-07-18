---
date: 2018-09-17T15:21:22+02:00
title: Core resources
description: Bitcoin extension core resources.
weight: 3
---

There are serveral core resources and endpoints in the Bitcoin extension that you need to know about in order to start sending and recieving.

### Transactions

The transaction object contains Bitcoin specific data related to transactions as they are detected or sent out by the service. It also stores any relevant Rehive transaction data for transactions associated with it.

Field | Description
--- | ---
id | Unique identifier for the transaction
user | User that the transaction belongs to
rehive_code | Rehive transaction code associated with the Bitcoin transaction
transaction_hash | Bitcoin transaction hash
currency | The Bitcoin asset being transacted in
amount | Amount that has been sent or recieved. In the lowest denomination (Satoshi)
confirmations | Number of blocks mined after the block containing the transaction
rehive_response | The last response from Rehive when creating the transactions on the ledger
tx_type | Type of transaction (`credit`, `debit`, `fund`, `transfer`, `asset_auth`)
status | Status of transaction (`Initiated`, `Quoted`, `Unfunded`, `Funded`, `Waiting`, `Pending`, `Confirmed`, `Complete`, `Failed`, `Cancelled`)
fee | Fee in Stroops paid for the transaction
to_reference | Rehive user or Bitcoin account recieving the transaction
from_reference | Rehive user or Bitcoin account sending the transaction
completed | Timestamp when a transaction is set to `Complete` status

### Users

The user object constains Bitcoin specific data around a user as well as a link to the Rehive user object.

Field | Description
--- | ---
id | Unique identifier for the user
email | Rehive email address
identifier | Rehive identifier
crypto | Bitcoin specific details used for showing user their deposit information `{public_address}` Described below
address | The companies public address. All funds send to this address are controlled by the company.
