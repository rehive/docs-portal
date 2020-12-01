---
date: 2018-09-17T15:21:22+02:00
title: Overview
description: Summary of the checkout flow
weight: 1
---

Accepting payments with Rehive Checkout is a three step process, with client side and server side actions.

From your website running in the customer’s browser, Rehive securely collects your customer’s authentication details and returns an authentication token. This, along with any other form data, is then submitted by the browser to the Rehive server.
Your application can pull the customer’s account balance and let the customer choose a Rehive account to make a payment. The customer can confirm the payment details to proceed.
Your server will receive a webhook that includes the transaction details to validate and fulfil the order.

Using the Rehive server directly ensures that no sensitive authentication data is ever stored on your server.

Create a simple user interface for your customer to select Rehive as a payment method on your web page. The steps below describe a suggested checkout flow:


**1. Authentication:**  
1.1 The customer arrives on your web page in the browser and selects the Pay with Rehive checkout option.  
1.2 The customer is prompted to authenticate their Rehive account by providing their email and password.  

**2. Balance Check / Currency Selection:**  
2.1 The customer's account balance is pulled.  
2.2 You can decide if you want to allow the customer to change their preferred account or currency to make a payment.  
2.3 The customer can see their available balance for the selected accounts 
2.4 The customer clicks Confirm to proceed.  

**3. Direct payment and callback processing**  
3.1 The transaction is posted to Rehive from your client-side code (the post can also be made from server-side code if preferred).  
3.2 Rehive will trigger a webhook to your server that includes the transaction details to process the rest of your order.  
3.3 It is important that your server-side code cross-references the order_id in the metadata and the transaction status before releasing the order.  





