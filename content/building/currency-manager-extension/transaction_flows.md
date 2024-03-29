---
date: 2018-09-17T15:21:22+02:00
title: Transaction flows
description: High level transaction flows performed by a Currency Manager Extension.
weight: 2
---

### Rehive’s transaction transition flow
During Rehive’s transaction processing lifecycle each status change triggers the creation of a new transition event. These transition events control if the transaction moves to the next status by either being declined or approved. In the normal “unmanaged” flow these transition events are generally approved automatically.

This is different for a managed currency transaction. A currency manager completes or fails a transaction by listening for Rehive transaction transition events and approving or declining them based on how it can process that transaction.


### Rehive transaction handling

When handling Rehive transaction webhooks, it is expected that the extension always eventually moves the transaction into either a Complete or a Failed state. If any flow is not supported, the manager should immediately fail the transaction.
#### Flow
1. The currency manager receives a transaction transition event webhook from Rehive.
2. The currency is checked to see if it’s a currency managed by the extension. The manager should ignore it if it’s not a relevant currency.
3. The currency manager does a lookup of the transaction and transaction collection that triggered the event. It should store both.
4. The currency manager extension should trigger any third party side effects.
5. Once third party processing is considered complete the transaction transition should be approved.

This flow defines the most broad approach to handling a Rehive initiated transaction. Below are more explicit examples for a Withdrawal and Transfer.

#### Withdrawals
When the currency manager receives a debit transaction webhook for a currency it manages, it should try to process the transaction as a withdrawal. The flow is as follows:

1. A pending debit transaction is created on Rehive that includes metadata related to how it can be processed on the third party ledger.
2. The currency manager extension receives the Rehive transaction transition webhook.
3. The currency manager looks up the transaction on Rehive and parses the metadata field. The metadata could include direct withdrawal instructions or an ID that links to a known external ledger account. If the metadata cannot be used, the transaction should be updated to Failed on Rehive by the manager.
4. The currency manager extension then creates the withdrawal transaction on the third party using the transaction details.
5. Once the third party ledger confirms the transaction the Rehive transaction transition should then be approved.


<img src="/images/withdraw_via_currency_manager.png" alt="Currency manager withdrawal image" width="90%"> 

For a more detailed example see the Cash-in/Cash-out [withdrawals](/building/cash-in-cash-out/withdraw/) section.

#### Transfers
By default, a currency manager extension is not required to do anything special for internal transfers within the Rehive ecosystem. In this case it should just Complete the Rehive transaction if it’s a transfer. See the [1 to1 mapping transfers](/building/currency-manager-extension/1-to-1-mapping/) section for a more advanced handling of transfers.

A transfer can be detected by checking that the `partner_id` on the transaction webhook data is not null.


### Third party transaction handling

The extension can use its discretion on how it wants to handle third party initiated transactions. In general it is not required to replicate every third party transaction on the Rehive ledger unless it is specifically designed as a 1-to-1 mapped extension. See [1-to-1 mapping](/building/currency-manager-extension/1-to-1-mapping/) for more information.

#### Flow
1. The currency manager receives a notification that a transaction occurred on the third party ledger.
2. The currency manager decides if it should replicate this on Rehive or not.
3. If it does, it should create a relevant Rehive transaction that represents the third party transaction, including using an appropriate subtype.

This flow defines the most broad approach to a third party transaction. Below are is a more explicit Deposit flow example.

#### Deposits
When a credit transaction is detected on the third party ledger the currency manager should:
1. Use the information from the third party ledger to check which Rehive account the credit is affecting. This is usually done by checking the extensions internal database that links Rehive account references to some unique identifier on the third party.
2. Create a Rehive credit transaction that replicates the third party transaction. If no processing is needed, this can be created as Complete, otherwise this should be created as a Pending transaction.
3. If further processing is required - for example with cryptocurrency transactions waiting for confirmations - then the currency manager extension should wait for final confirmation from the third party and Complete the Rehive transaction once confirmed.

<img src="/images/deposit_via_currency_manager.png" alt="Currency manager deposit image" width="90%"> 

For a more detailed example see the Cash-in/Cash-out [deposits](/building/cash-in-cash-out/deposits-to-segregted-bank-accounts/) section.

### Advanced transition handling

#### Initiated to Pending transition
A pending transaction means the third party is either waiting for confirmation to process the transaction or is in the process of processing the transaction. 

If the third party system supports pending transactions the currency manager extension can use the Initiated to Pending transition as a trigger for creating Pending third party transactions. In this case the manager would:

1. Receive an Initiated to Pending transition event.
2. Create a pending transaction on the third party.
3. Store a link to both the pending Rehive transaction and the pending third party transaction.
4. If successful, approve the transition event.

#### Pending to Complete transition
A complete transaction denotes that all balance changes are final and the transaction has been successful on the third party.

The flow for handling completing a transaction is as follows:

1. Receive a Pending to Complete transition event.
2. Check if an existing pending transaction exists. If it does try and Complete it on the third party system. If not, create it in a Complete form on the third party.
3. Update the internal status of the transaction.
4. Once complete on the third party approve the transition event.





