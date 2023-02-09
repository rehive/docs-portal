---
date: 2018-09-17T15:21:22+02:00
title: Execute a conversion
description: Basic overview of an example flow to facilitate end-user deposits via bank transfer.
weight: 3
---
This section will provide guidelines for triggering and executing transactions on the third party when quotes are accepted.


#### Requirements

* The user must be on a [Tier](https://rehive.intercom.help/en/collections/2574043-rehive-setup-and-standard-configurations#what-are-tiers-and-tier-requirements) that allows transactions. Tiers are configured per [Group](https://rehive.intercom.help/en/articles/5904250-how-do-groups-work) using the [Rehive Admin Dashboard](https://dashboard.rehive.com/#/groups/overview).
* In order to execute any conversion transaction on a third party, all steps in [Request a quote](building/conversions/request-a-quote) must be successfully completed.
* The quote information from the [Request a quote](building/conversions/request-a-quote) steps will be used to trigger the associated transactions on the third-party ledger as well as the Rehive Platform. For this, it will need to store Collection ID’s from quotes provided to the Rehive Conversion Estension.
* Your custom extension will need to subscribe to Rehive transaction webhooks (see Rehive docs). 


#### Steps

1. The user accepts quote
2. The Rehive Conversion Extension creates a pending transaction collection on the Rehive Platform
3. The Rehive platform sends a transactiona webhook with the relevant transaction collection details
4. Your custom extension matches the transaction `collection_id` to one stored against a quote and triggers the transaction to be executed on the third-party platform
5. The third-party platform returns the outcome (success/failure)
6. Your custom extension patches the pending platform transaction with the outcome, `failed` or `complete` using the <code>[/admin/transactions/{tx_code}/](https://docs.platform.rehive.com/tag/Admin#operation/admin_transaction-collections_partial_update)</code> endpoint 

<img src="/images/conversion-extension-execute-quote.png" alt="Withdraw to bank account" width="80%"> 

##### Note
* This flow assumes that the transaction is linked to a `collection_id` that matches that of a previously processed quote. Any transaction webhooks received without a matching `collection_id` should be ignored.
* This process will be repeated for each transaction in the transaction collection.
* Once all transactions in the collection have been executed and updated, the quote should be fulfilled on any third-party and and the associated Rehive transactions completed.


#### Recommended additional configurations:
* Create and customize notifications using the [Notifications Extension](https://dashboard.rehive.com/#/extensions/notifications/list) to ping users when a new withdraw transaction is processed. 
* The [Rehive Expressions Guide](https://docs.google.com/document/d/1v44nM51-VaevcMYVkGEL2scI-PpZsUIESxAxLdawxbs/edit?usp=sharing) is useful for creating notifications with specific trigger variables.
