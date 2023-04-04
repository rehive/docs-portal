---
date: 2018-09-17T15:21:22+02:00
title: Integrating with Rehive Conversion Service
description: Setting up your custom Conversion Extension Integrations directly on Rehive Conversion Service
weight: 4
---

API: <code>[https://conversion.services.rehive.io/swagger/](https://conversion.services.rehive.io/swagger/)</code>


#### Integration Object creation

POST to `/admin​/integrations​/` with the following fields:


```json
        {
          "slug": "string",
          "name": "string",
          "description": "string"
        }
```


All fields are for reference purposes and can be named according to your custom extension


#### Integration Webhook creation

POST to `/admin/integrations/{identifier}/webhooks/` with the following fields:


```json
        {
          "url": "string", 
          "event": "conversion.quote", 
          "secret": "string" 
        }
```



#### Adding an integration to a currency pair

Each Currency pair now has an integration as well as a transaction_type field. These can be set either when creating the Currency Pair or by updating an exist one. To update the pair:

PATCH the ``/admin/conversion-pairs/{identifier}/`` endpoint with the following fields:


```json
        {
          "integration": "ID", 
          "transaction_type": "string", 
        }
```


`transaction_type` currently has two options: `operational` and `non_operational`. 

* An `operational` transaction type denotes that the Currency Pair will use the Conversion Extensions operational account as the middleman account to buy and sell to the final Rehive account being affected by conversion. 
* A `non_operational` denotes that the Currency Pair will only cause a single sell debit transaction and a single buy credit transaction on the Rehive account being affected by the conversion. No operational account will be used as the middleman account.

