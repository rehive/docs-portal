---
date: 2018-09-17T15:21:22+02:00
title: Introduction
description: Introduction to the platform.
weight: 1
---

The Merchant Documentation helps you to integrate Rehive payment processing closed-loop or open-loop wallets for online checkout.

### Online checkouts

You can either implement a custom payment integration on your existing website or redirect the customer to a hosted payment page. 

It is required to integrate the payment selection on your website for the customer to specify their preferred payment method for various providers that you might support. Once the customer proceeds to make a payment, your system will need to create an invoice by sending the order information to the API.  You will need to rely on your existing order management system to process all invoice webhooks for updating statuses on your system.

The response will include a redirect link. In the case of using the hosted payment page, the customer can then select from supported payment methods that you can configure upfront.

Once the customer starts the payment process on the hosted payment page the system will create a quote. In the case of a cryptocurrency payment, this quote will only be valid for a limited duration.

In the case of the customer returning to the checkout page, the invoice will be canceled and a new invoice should be created.
