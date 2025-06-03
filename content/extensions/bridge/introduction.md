---
date: 2018-09-17T15:21:22+02:00
title: Introduction
description: Introduction to the Bridge extension.
weight: 1
---

The Bridge extension is used to integrate directly with [Bridge](https://www.bridge.xyz/).

<aside class="notice">
The full <strong>API specification</strong> can be found <a href="https://bridge.services.rehive.com">here</a>
</aside>

<aside class="notice">
The <strong>Swagger specification</strong> can be found <a href="https://bridge.services.rehive.com/swagger/">here</a>
</aside>

The extensions supports the following Bridge functionality:

- Customers - Support mirroring Rehive users as Bridge customers.
- KYC - Supports performing KYC using the Bridge KYC flow.
- Wallets - Support mirroring Rehive accounts as Bridge wallets (as a store-of-value).
- Virtual accounts - Support funding wallets (accounts) via fiat bank deposits.
- Liquidation addresses - Support funding wallets (accounts) via crypto deposits.
- External accounts - Support the withdrawal of funds from wallets (accounts) via bank withdrawals.
- Transfers - Support the mirroring of Rehive transaction behavior as Bridge transfers on wallet.

In summary, the Bridge extension manages linked Bridge currencies and ensures that all actions performed on Rehive are occurring (and getting verified) on the Bridge layer. The extension uses a one-to-one mapping of Platform accounts to Bridge wallets.

<aside class="warning">
You can get started with a Bridge-managed company by registering and choosing Bridge as the custody layer. However, to get full use out of the extension, your company will need to sign up and verify with<a href="https://www.bridge.xyz/">Bridge</a> first.
</aside>

**Supported currencies**

Bridge only supports a specific subset of currencies. Currently the following Bridge currencies are supported in the Bridge extension:

- USDC (Solana)
- More coming soon...
