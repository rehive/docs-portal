---
date: 2018-09-17T15:21:22+02:00
title: Monitoring service
description: Bitcoin hooks monitoring service
weight: 6
---

The Bitcoin service uses our monitoring hooks service under the hood to track relevant Bitcoin transactions. It is not nescessary to integrate or setup the hooks service when using the Bitcoin service but it can be useful as it's own standalone tool.

### Usage

Using the hooks service is built to be simple. Once registered any Bitcoin address can be added as a webhook to the service with a callback URL. When a transaction is detected on-chain for the address the hooks service will fire of a webhook to the specified URL.

Mainnet endpoint: https://bitcoin-hooks.services.rehive.io/  
Testnet endpoint: https://bitcoin-hooks-testnet.services.rehive.io/

#### Registering

To get an API key for the service POST `email` and `password` fields to the `/register/` endpoint.

### Webhooks

The webhook resource handles the following fields:

Field | Description
--- | ---
webhook_id | Internal hooks service id
url | URL the service will send webhook data to when a new transaction is detected
address | Bitcoin public address to monitor
confirmations | How many confirmations the service should monitor a transaction for
secret | A secret that can be identified by the service recieving the webhook
get_historic | `True/False` flag which specifies if you want old transactions for the address to be sent to the recieving service.

To setup an address for monitoring POST `url`, `address`, `confirmations` and `secret` fields to the `/webhook/` endpoint.

### Transaction webhook data structure

To be added.

