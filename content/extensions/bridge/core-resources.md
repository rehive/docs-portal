---
date: 2018-09-17T15:21:22+02:00
title: Core resources
description: Bridge extension core resources.
weight: 3
---

There are two core resource in the Bridge extension that you need to know about when interacting with it.

### Wallets

The primary resource used to link Rehive accounts to Bridge wallets. Once a user has completed Bridge KYC (and a Bridge customer ID has been attached to them) wallets will be generated for them. Wallets are generated for each account currency that is related to a currency managed by the Bridge extension.

Wallets consist of the following data:

Field | Description
--- | ---
id |  A unique identifier for the wallet.
user | The user who owns the wallet.
currency | The currency (in the platform) that this wallet is related to.
account | The account (in the platform) that this wallet is related to.
bridge_id | The wallet ID as stored in Bridge.

Any transactions that occur on an account currency in the platform will be regenerated on the associated Bridge wallet (if possible). However, this means that if an associated wallet does not exist or cannot be generated yet (such as if KYC has not been completed by the user) then the transactions will be failed automatically.


### Cards

**Coming soon**