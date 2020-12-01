---
date: 2018-09-17T15:21:22+02:00
title: 4. Open-loop
description: Handling Open-loop payment processors
weight: 4
---

Open loop payments are any non-wallet balance payments made. These are usually deposits from an external value such as a crypto currency, credit card or bank payment. 

### Displaying payment information
The display of the payment information can depend on how the payment processor handles payments. Each payment processor quote will contain a different set of payment details. The relevant quote to display to the user will be the one with the matching payment processor to the `primary_payment_processor` field.

Within the quote objects on the Invoice there will be a few fields(NOTE: this reference is different to the Invoice reference): 

```
  "reference": "459b3407-3009-4f77-bbbf-5d6e12788958",
  "deposit_details": {},
```

The reference in the open-loop context is the identifying feature for the user to make the payment with this could be: A bank deposit reference they should use, a crypto address they should make a payment too etc.

The deposit details are any extra information such as: Another unique crypto identifier, bank branch details etc.

For each open-loop processor you support these two fields should be displayed appropriately to the user paying. Using Bitcoin as an example your Quote fields might look like this:

```
  "reference": "12CsH7h4ro5R8p3FwEAhKZHUEddz1ZfseV",
  "deposit_details": {},
```

The reference is the Bitcoin address generated for this deposit which the user paying will need to make a transaction too.

### Handling statuses

##### Processing
The user has chosen a payment processor. In certain open-loop cases you might want to pole the `/manager/businesses/<business_id>/invoices/<invoice-id>/transactions/` endpoint to check for new deposits being made. This is particularly important in the case of crypto deposits waiting for confirmations.

##### Paid
If the amount sent by the user matches the quoted amount exactly the entire Invoice will be set to the Paid status. Once this has happened you can assume the funds have been received and processed. Any order statuses on your e-commerce platform can be set to their Completed states.

##### Overpaid
The user has paid more than the quoted amount. This can be handled by Completing any outstanding orders associated with the payment and then refunding the user with the difference between the Quoted amount and the Paid amount.

##### Underpaid
An underpaid Invoice will require the user to make another transaction for the remaining balance. The difference in the quote fields of `amount` and `total_paid` should be displayed clearly to the user as well as the deposit details for making the outstanding payment.

##### Expired
Any requests that expire are no longer usable and a new Invoice will need to be created with the same fields as the expired one.

### Displaying processing Crypto transactions
One of the unique aspects about cryptocurrency is transactions often need to be confirmed multiple times before they can be considered completely irreversible. This means that a user might make a deposit to pay for an Invoice but the invoice will only Complete once the transaction associated with it Complete/is confirmed. You will want to display this to the user so they know they have a pending successful transaction.

To display this information you will use the transactions endpoint of the invoice: `/manager/businesses/<business_id>/invoices/<invoice-id>/transactions/`.

While an Invoice is in the “Processing” state and a relevant crypto payment processor has been selected such as “native_bitcoin” pole the above endpoint until an non-empty array is returned.

An example of a request with transactions:

```
{
  "status": "success",
  "data": [
    {
      "rehive_code": "459b3407-3009-4f77-bbbf-5d6e12788958",
      "settled": false,
      "payment_processor_quote": 14,
      "details": {
        "id": "459b3407-3009-4f77-bbbf-5d6e12788958",
        "collection": "b9c56ace-7dd8-49f6-ba79-04cd9d3314d2",
        "tx_type": "credit",
        "subtype": "deposit_crypto",
        "note": "",
        "metadata": {
          "service_payment_requests": {
            "request_id": "deb62287-dbc6-4f11-8f83-d753f6cf1284",
            "payer_email": "customer@rehive.com",
            "sender_identifier": "fbb59810-04ab-401a-a017-d293dfa5c7c5"
          },
          "service_bitcoin": {
            "confirmations": "0",
            "tx_hash": "<BITCOIN_TRANSACTION_HASH>",
          },
        },
        "status": "Pending",
        "reference": null,
        "amount": 200,
        "fee": 0,
        "total_amount": 200,
        "account": "24AX64NGEJ",
        "label": "Crypto currency deposit",
        "company": "rehive_prod",
        "destination_transaction": null,
        "fees": [],
        "archived": false,
        "created": 1596795344112,
        "updated": 1596795346496
      }
    }
  ]
}
```

Within the `metadata` field of the transaction object the relevant payment processor, in this case Bitcoin, will include a section such as `service_bitcoin` that contains both the confirmations and the Bitcoin transaction hash(tx_hash field). When a `Pending` transaction exists in this array both the hash and the confirmations with a message such as “You payment has been detected <tx_hash> with <confirmations> confirmations is currently waiting to be confirmed.”





