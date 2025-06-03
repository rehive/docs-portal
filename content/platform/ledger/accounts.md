---
date: 2018-09-17T15:21:22+02:00
title: Accounts
description: Accounts in the platform.
weight: 2
---

Accounts are containers that store user balances in relation to specific currencies. Transactions operate on accounts and the account acts as a representation of the hstory of transactions on a given account. Additionally, accounts may have other settings or permissions attached to them depending on the company’s use-case.

Each account may contain any number of currency balances (depending on what currencies are defined in the company). Accounts can belong to a user, in which case its settings may be influenced by the user and their group. Accounts can also be standalone (ie. not belong to a user) and therefore not influenced by any user or group settings.

<aside class="notice">
	Please take a look at the <a href="https://api.rehive.com/?api=rehive-platform-api#tag/accounts/GET/3/accounts/" target="_blank">API reference</a> for further details on the account endpoints.
</aside>

### Defining accounts

Generally, every user in the platform will require one or more accounts depending on business requirements. The platform makes it easy to configure accounts to match your specific needs using two methods:

1. **Account definitions** to define a list of allowed accounts (per group) and automate whether the account is added to a new user on registration.
2. Manually invoking the admin endpoints to create accounts as needed.

The former is usually preferred unless you have very specific requirements or intend building a complete abstraction on top of the platform. The latter can be useful when creating extensions and you need to generate very specific accounts on the fly.

<aside class="notice">
    To learn about configuring accounts and account definitions take a look at the <a href="https://dashboard.rehive.com" target="_blank">dashboard</a> or the <a href="/dashboard/get-started/introduction/" target="_blank">dashboard documentation</a>.
</aside>

