---
date: 2018-09-17T15:21:22+02:00
title: Withdrawals via bank transfer
description: Basic overview of an example flow to facilitate end-user deposits via bank transfer.
weight: 4
---
For fiat cash-out, users are able to initiate withdrawals to a bank account of their choice. The existing manual withdrawal flow creates a pending withdrawal transaction, which an Admin Dashboard user can mark as complete after they have actioned the banking transaction through the company’s operational transaction process. You can automate this process with your custom-built extension triggering the bank transaction using the information provided by Rehive.

<img src="/images/web-app-withdraw-screen.png" alt="Web app withdraw image" width="80%"> 

End-users are able to add bank accounts to their profiles using the wallet applications as can be seen in the image below. When initiating a withdrawal, they may choose which added bank account to send the funds to.

<img src="/images/web-app-add-bank-account-screen.png" alt="Web app add bank account image" width="80%"> 


#### Requirements and considerations

* The user must be on a [Tier](https://rehive.intercom.help/en/collections/2574043-rehive-setup-and-standard-configurations#what-are-tiers-and-tier-requirements) that allows withdrawal transactions. Tiers are configured per [Group](https://rehive.intercom.help/en/articles/5904250-how-do-groups-work) using the [Rehive Admin Dashboard](https://dashboard.rehive.com/#/groups/overview).
* The user must have added a bank account to their profile in order to initiate a withdrawal to the bank account
* A [webhook](https://dashboard.rehive.com/#/developers/webhooks/list) can be configured to send the transaction detail and metadata to your extension whenever a pending debit transaction is created. We recommend setting up a webhook to be sent for all Debit transactions.
* The app allows end-users to add account details for multiple accounts.
* The bank accounts linked to a specific user can be retrieved via the API using the bank accounts endpoint <code>[/admin/users/bank-accounts/?user={user_identifier}](https://api.rehive.com/?api=rehive-platform-admin-api#tag/users/POST/3/admin/users/bank-accounts/)</code>


#### Steps

1. The end-user requests a withdrawal to a bank account they have added using the Rehive Wallet. 
2. When this is done, a debit transaction is created on the Rehive ledger with a status of “Pending” and the bank account details are included in the metadata field of the transaction in JSON format. 
3. According to the Webhook settings, a webhook is sent to the integration including the transaction details.
4. Your extension then initiates the bank transfer with the payment processor using the bank account details included in the transaction Metadata and awaits confirmation that the transfer has been completed.
5. Payment processor confirms success or failure of the transfer. 
6. Your extension updates the status of the user’s transaction from pending to complete (or failed) using the <code>[/admin/transactions/{tx_code}/](https://api.rehive.com/?api=rehive-platform-admin-api#tag/transactions/PATCH/3/admin/transactions/{tx_code}/)</code> endpoint.

<img src="/images/bank-transfer-withdraw.png" alt="Withdraw to bank account" width="80%"> 

#### Recommended additional configurations:
* Create and customize notifications using the [Notifications Extension](https://dashboard.rehive.com/#/extensions/notifications/list) to ping users when a new withdraw transaction is processed. 
* The [Rehive Expressions Guide](https://docs.google.com/document/d/1v44nM51-VaevcMYVkGEL2scI-PpZsUIESxAxLdawxbs/edit?usp=sharing) is useful for creating notifications with specific trigger variables.
