---
date: 2018-09-17T15:21:22+02:00
title: Core resources
description: Mass Send extension core resources.
weight: 3
---

There are two core resource within the conversion extension. Additional features will be added as further functionality is completed.

### Batches

The primary resource of the conversion extension is the batches. Batches are uploaded as csv files with the following fields: 

Required fields | Description
--- | ---
amount | Amount to be sent in decimal format (e.g. 2.54)
recipient | Email, mobile number or user 
currency | Currency code (e.g.  USD)

Optional fields | Description
--- | ---
credit_account | Reference code of account to be debited
debit_account | Reference code of account to be credited
debit_note | Debit note or message
debit_metadata | Custom metadata in json format
debit_reference | Custom text to be used as the debit transaction reference
credit_note. | Credit note or message
credit_metadata | Custom metadata in json forma
credit_reference | Custom text to be used as the credit transaction reference

For each batch, the CSV file is saved and then processed asyncronously. The status of the batch and number of processed, failed and completed transsactions is updated in real-time while the batch is processed.

### Transactions

Each batch contains set of transactions.
