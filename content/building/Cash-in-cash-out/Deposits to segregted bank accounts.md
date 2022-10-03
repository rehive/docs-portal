---
date: 2018-09-17T15:21:22+02:00
title: Deposits to segregated bank accounts
description: Basic overview of an example flow to facilitate end-user deposits via bank transfer.
weight: 3
---
### Deposits to segregated bank accounts
This use case involves end-users depositing funds to a unique bank accounts associated to them on the back-end, using a user’s unique Rehive account reference to identify the account to assign the deposit to. 

This deposit method will have the same end-user experience as the existing “Deposit to a single company bank account” flow. Feel free to[ test this flow](https://rehive.intercom.help/en/articles/6483505-how-to-create-a-manual-deposit-as-an-admin) on your test project in the Rehive Wallet apps.

#### Requirements
* To support this deposit method, you will need to consider two separate flows - one where a bank account is created for each new user-profile created on your Rehive project and another for the actual deposit flow. 
* The accounts created for the users must support all currencies in which deposits are expected to be received.
* You will need to configure a [webhook](https://dashboard.rehive.com/#/developers/webhooks/list) to notify your extension when a new user profile is created 
* Monitoring of incoming deposits to the bank account will need to be implemented per requirements from your banking partner. This can be in the form of polling done by your extension, or webhooks triggered by your banking partner. In this guide we assume that the banking partner notifies your extension of a new transaction.
* In order to receive deposits, each user must be on a [Tier](https://rehive.intercom.help/en/collections/2574043-rehive-setup-and-standard-configurations#what-are-tiers-and-tier-requirements) which allows deposit transactions. Tiers are configured per [Group](https://rehive.intercom.help/en/articles/5904250-how-do-groups-work) using the [Rehive Admin Dashboard](https://dashboard.rehive.com/#/groups/overview).

When the user selects “Deposit” from either their web or mobile wallet, they will be shown the information for the bank account listed above as well as a reference which the user must include in the reference field of their bank transfer. This reference indicates the account reference for allocation of the deposit.

<img src="/images/web-app-deposit-screen.png" alt="Web app deposit image" width="80%">  


#### Steps:
1. The user selects “Deposit” and is shown details of the bank account you wish to receive deposit funds into and a unique reference.
2. The user makes a bank transfer to the company bank account provided and includes the unique reference in the reference field
3. Your custom extension polls the transaction history of the company bank account. 
4. When a new transaction is detected, your custom extension creates a credit transaction on the Rehive API endpoint <code> [admin/transactions/credit/](https://docs.platform.rehive.com/tag/Admin#operation/admin_transactions_credit_create)</code> with 
```json
{
    "status": "complete",
    "subtype": "deposit_bank",
    "account": "{unique_reference}"
}

```

<img src="/images/bank-transfer-deposit.png" alt="Deposit via bank transfer diagram" width="80%">  

#### Recommended additional configurations:

* Create and customize notifications using the [Notifications Extension](https://dashboard.rehive.com/#/extensions/notifications/list) to ping users when a new deposit transaction is created. This is included in the flow above as the final step. The [Rehive Expressions Guide](https://docs.google.com/document/d/1v44nM51-VaevcMYVkGEL2scI-PpZsUIESxAxLdawxbs/edit?usp=sharing) is useful for creating notifications with specific trigger variables.
