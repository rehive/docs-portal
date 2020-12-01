---
date: 2018-09-17T15:21:22+02:00
title: 2. Balance check
description: Balance check / currency selection
weight: 3
---
The customer's account balance is pulled. You can decide if you want to allow the customer to change their preferred account or currency to make a payment. The customer can see their available balance for the selected accounts as well as the currency conversion rate that matches the currency specified in the order. The customer can change the amount they would need to pay in the currency specified in the order and validate the underlying currency amount that will be charged to their account. The customer can see the fee amount that will be charged to their Rehive account before completing the purchase. The customer clicks Confirm to proceed.  

### Endpoints
URL | methods
---|---
`https://api.rehive.io/3/accounts/` | `GET`

### Javascript example code:
```
rehive.accounts.get({filters: filters}).then(function(res){
    ...
},function(err){
    ...
})
```

The `filters` parameter can be used to customize the response. To retrieve all the user's accounts and currencies, leave out the `{filters: filters}` parameter above. 

To retrieve only the user's primary account, set:
```
filters = {"primary": true}
```

To retrieve only a specific currency whithin the user's primary account, set:
```
filters = {"primary": true, "currency": "XBT"}
```


Example response:

```
[
    {
        "name": "default",
        "reference": "0000000000",
        "primary": true,
        "currencies": [
            {
                "balance": 10000,
                "available_balance": 10000,
                "currency": {
                    "code": "XBT",
                    "description": "bitcoin",
                    "symbol": "฿",
                    "unit": "bitcoin",
                    "divisibility": 8
                },
                "limits": [],
                "fees": [],
                "settings": {
                    "allow_transactions": true,
                    "allow_debit_transactions": true,
                    "allow_credit_transactions": true
                },
                "active": true
            }
        ],
        "created": 1464858068745,
        "updated": 1464858068745
    }
]
```









