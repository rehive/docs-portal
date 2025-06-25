---
date: 2018-09-17T15:21:22+02:00
title: Core resources
description: Payment Requests extension core resources.
weight: 3
---

There are two core resources in the Payment Requests extension.

### Payment processors

Payment processors provide a list of payment processors that can be made available to users making payments on requests. There are several built-in payment processors:

- Native - account to account payments in the Platform
- Native OTP
- Native stellar
- Native stellar (testnet)
- Bridge Crypto - only supported if the Bridge extension is enabled
- Bridge Bank - only supported if the Bridge extension is enabled

The Payment Requests extension also supports the addition of custom payment processors through the API. These can come in the form of customization on existing (built-in) processors as well as complete new processors. You can see a guide detailing some of this functionality [here](https://docs.rehive.com/merchants/custom-integration/overview/).

### Requests

A request resource represents an individual request for a payment. These can also be described as "invoices" and in fact they are used by the business extension to represent business invoices. A payment link can be shared with users so that they can pay a request. The payment link will automatically include any configured payment processors.

<aside class="notice">
	The request and invoice flow are fully integrated into the Rehive white-label application and dashboard. The Rehive frontend software is the best way to interact with these flows but you can use the API directly if you desire a custom flow.
</aside>
