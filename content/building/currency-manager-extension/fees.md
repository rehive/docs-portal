---
date: 2018-09-17T15:21:22+02:00
title: Fees
description: How to handle fees as a Currency Manager.
weight: 3
---


#### Withdrawal Fees
On withdrawals, a fee might need to be applied when processing the transaction on the third party ledger. If this is the case, a fee transaction can be appended to the collection that is being processed. This is done by:

1. Get the fee value that will be charged by the third party ledger.
2. Creating a Rehive transaction object (TODO include object here in doc), which includes the fee value, currency, and the relevant fee subtype.
3. Append the transaction to the current collection being handled by updating the transaction object to `admin/transaction-collections/ + {collection_id} + /transactions/`

#### Inclusive vs Exclusive fees
The third party ledger you integrate with might support creating transactions with a fee that is either inclusive or exclusive. This is supported by the inclusive field on a Rehive transaction that can be set to True/False (by default it’s False).

When the currency manager processes a transaction, it can check the Rehive transaction inclusive flag and use this to make either an inclusive or exclusive transaction on the third party.

