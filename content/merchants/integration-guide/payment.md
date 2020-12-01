---
date: 2018-09-17T15:21:22+02:00
title: 3. Payment
description: Payment and callback processing
weight: 4
---

The transaction is posted to Rehive from your client-side code (the post can also be made from server-side code if preferred). Rehive will trigger a webhook to your server that includes the transaction details to process the rest of your order. It is important that your server-side code cross-references the order_id in the metadata and the transaction status before releasing the order.  

### Endpoints
URL | methods
---|---
`https://api.rehive.io/3/transactions/transfer/` | `POST`

### Javascript example code:
```
rehive.transactions.createTransfer(
{
    amount: 500,
    recipient: "merchant@email-provider.com"
}).then(function(res){
    ...
},function(err){
    ...
```

Example response:
```
{
    "id": "00000000-0000-0000-0000-000000000000",
    "tx_type": "debit",
    "subtype": null,
    "note": "",
    "metadata": {},
    "status": "Complete",
    "reference": null,
    "amount": -500,
    "fee": 0,
    "total_amount": -500,
    "balance": 0,
    "account": "0000000000",
    "label": "Debit",
    "company": "Rehive_prod",
    "currency": {
        "description": "Rand",
        "code": "ZAR",
        "symbol": "R",
        "unit": "rand",
        "divisibility": 2
    },
    "source_transaction": null,
    "destination_transaction": {
        "id": "00000000-0000-0000-0000-000000000000",
        "user": {
            "id": "00000000-0000-0000-0000-000000000000",
            "first_name": "",
            "last_name": "",
            "email": "merchant@email-provider.com",
            "username": "",
            "mobile": "",
            "profile": null
        }
    },
    "messages": [],
    "fees": [],
    "created": 1476691969394,
    "updated": 1496135465287
}
```

### Webhook
This will be posted to the server url you configure whenever a payment is made.
```
{
    "event": "transaction.execute",
    "company": "company_id",
    "data": {
	    "id": "00000000-0000-0000-0000-000000000000",
	    "tx_type": "debit",
	    "subtype": null,
	    "note": "",
	    "metadata": {},
	    "status": "Complete",
	    "reference": null,
	    "amount": -500,
	    "fee": 0,
	    "total_amount": -500,
	    "balance": 0,
	    "account": "0000000000",
	    "label": "Debit",
	    "company": "rehive_prod",
	    "currency": {
	        "description": "Rand",
	        "code": "ZAR",
	        "symbol": "R",
	        "unit": "rand",
	        "divisibility": 2
	    },
	    "source_transaction": null,
	    "destination_transaction": {
	        "id": "00000000-0000-0000-0000-000000000000",
	        "user": {
	            "id": "00000000-0000-0000-0000-000000000000",
	            "first_name": "",
	            "last_name": "",
	            "email": "merchant@email-provider.com",
	            "username": "",
	            "mobile": "",
	            "profile": null
	        }
	    },
	    "messages": [],
	    "fees": [],
	    "created": 1476691969394,
	    "updated": 1496135465287
	}
}
```




