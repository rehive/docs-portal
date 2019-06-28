---
date: 2018-09-17T15:21:22+02:00
title: Core resources
description: Stellar extension core resources.
weight: 3
---

There are serveral core resources and endpoints in the Stellar extension that you need to know about in order to start sending and recieving.

### Transactions

The transaction object contains Stellar specific data related to transactions as they are detected or sent out by the service. It also stores any relevant Rehive transaction data for transactions associated with it.

Field | Description
--- | ---
id | Unique identifier for the transaction
user | User that the transaction belongs to
rehive_code | Rehive transaction code associated with the Stellar transaction
external_id | Stellar transaction hash
currency | The Stellar asset being transacted in
amount | Amount that has been sent or recieved. In the lowest denomination (Stroops for native XLM)
rehive_response | The last response from Rehive when creating the transactions on the ledger
tx_type | Type of transaction (`credit`, `debit`, `fund`, `transfer`, `asset_auth`)
status | Status of transaction (`Initiated`, `Quoted`, `Unfunded`, `Funded`, `Waiting`, `Pending`, `Confirmed`, `Complete`, `Failed`, `Cancelled`)
fee | Fee in Stroops paid for the transaction
to_reference | Rehive user or Stellar account recieving the transaction
from_reference | Rehive user or Stellar account sending the transaction
horizon_response | Last response stored from the Stellar network
xdr | The raw transaction object
signed | Indicates if the XDR object is signed or not (`true`, `false`)
completed | Timestamp when a transaction is set to `Complete` status

### Users

The user object constains Stellar specific data around a user as well as a link to the Rehive user object.

Field | Description
--- | ---
id | Unique identifier for the user
email | Rehive email address
identifier | Rehive identifier
crypto | Stellar specific details used for showing user their deposit information `{public_address , username , memo}` Described below
public_address | The companies public address. All funds send to this address are controlled by the company.
username | A string used for setting a federated address for the user
memo | A string used to identify a specific users transaction to the same public address
