---
date: 2018-09-17T15:21:22+02:00
title: Request a quote
description: Basic overview of an example flow to request a conversion quote from a third-party provider and provide it to Rehive to present to an end-user
weight: 2
---
This section will provide guidelines fetching and providing quotation information from a chosen third-party provider. 

#### Requirements

* To integrate with our Conversion Extension, the custom extension requires a quote endpoint. This endpoint is later added as the url for the Conversion Extension to call when getting quotes. The details for this endpoint are laid out in the Quote endpoint guidelines section of this guide &lt;XXLINKXX>.
* A conversion extension webhook must be configured to notify your custom extension with specific [event-type](https://docs.rehive.com/platform/usage/events/) <code> conversion.quote</code>. This can be done by adding your extension to the Rehive Conversion Extension in the </code> [Rehive Admin Dashboard](https://dashboard.rehive.com/#/extensions/conversion/settings)</code>.
* Once built, the specific conversion pairs must be configured on the </code> [Rehive Conversion Extension](https://dashboard.rehive.com/#/extensions/conversion/pairs)</code> and associated with the custom extension in the form of a quote endpoint url added to the conversion pair.
* The custom extension must include a field  <code> collection_id</code>.


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
