---
date: 2018-09-17T15:21:22+02:00
title: Transactions
description: Transactions in the platform.
weight: 2
---

Transactions are the individual operations that affect account balances. As such, transactions are a representation (or log) of changes to account balances. Every transaction can be either a debit or a credit. In simple terms debit transactions reduce an account’s balance and credit transactions increases an account’s balance.

A transfer is a 2-step transaction where one user is debited and another is credited the same amount simultaneously. Transfers store the movement of funds between explictly defined accounts and are the predoeminate way transactions are handled in the Platform

Every transaction has a status that can be used to gauge the state of the transaction. The statuses are:

status | description
---|---
Initiating | the transaction is processing immediately after insert.
Pending | the transaction has passed all validation amd applied to the account's available balance if a debit transaction.
Complete | the transaction has been executed applied to the account's balance.
Failed | the transaction has been executed but did not succeed and had no impact on the account's balance.

Transactions are **immutable once executed** in Rehive. This means that once a transaction has reached an executed status of `Complete` or `Failed` they cannot be further modified in the system. To reverse a transaction's balance changes once it has executed you should create another transaction instead.

Transactions can be made by both admin users and end-users. However, end-users are not permitted to alter the status of a transaction. Only admins have permission to make changes to transactions.

<aside class="warning">
    Currency amounts/values are always handled as integers in Rehive (eg. $ 1.00 represented as 100 in the API). Take a look <a href="/platform/general-usage/precision/" target="_blank">here</a> for more details.
</aside>

<aside class="notice">
	Please take a look at the <a href="https://rehive-platform.redoc.ly/tag/transactions" target="_blank">API reference</a> for further details on the transaction endpoints.
</aside>

### Transaction collections

There are many cases where multiple related transactions in the Platform need to be part of a single collection. For instance, a transfer transaction is made up of two transactions but these transactions are part of the same collection and both must be executed simultaneously. Another example of where transaction collections are relevent is the handling of fees: all transaction fees are created within the same collection as their parent transaction.

The Platform supports transaction-collections are a way to group multiple related transactions together. Every transaction is a child of a transaction-collection (even when only one transaction is in that collection). A transaction-collection can contain multiple different transactions, with different types, subtypes and accounts. In simple terms transaction-collections are used to "organize" transactions.

As an organization structure, transaction-collections support the creation of multiple transactions within an atomic batch (all transactions within the collection fail or succeed together). These transactions can have complex relationships with each other:

field | description
---|---
partner | transactions that are transfers between two accounts.
parent | transactions that need to be defined as a child of another transaction.
inferred | transactions created internally due to company defined settings.

The transactions in a collection are ordered by "creation" time and can have their statuses modified via an update on the collection.

Transaction collections can be created by both admin users and end-users. However, transaction collections created by end-users are subject to the same rules as normal transactions.

<aside class="notice">
	Please take a look at the <a href="https://rehive-platform.redoc.ly/tag/transaction-collections" target="_blank">API reference</a> for further details on the transaction collection endpoints.
</aside>

### Transaction transitions

Sometimes, when building more complex flows using the Platform, it can be useful to access or manage the individual transaction transitions that occured on each transaction. The platform provides access to a transition resource that can be utilized in these scenarios.

<aside class="notice">
	Please take a look at the <a href="https://rehive-platform-admin.redoc.ly/tag/transaction-transitions" target="_blank">API reference</a> for further details on the transaction transition endpoints.
</aside>