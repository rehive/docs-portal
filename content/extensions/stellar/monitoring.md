---
date: 2018-09-17T15:21:22+02:00
title: Monitoring service
description: Stellar hooks monitoring service
weight: 6
---

The Stellar service uses our monitoring hooks service under the hood to track relevant Stellar transactions. It is not nescessary to integrate or setup the hooks service when using the Stellar service but it can be useful as it's own standalone tool.

### Usage

Using the hooks service is built to be simple. Once registered any Stellar address can be added as a webhook to the service with a callback URL. When a transaction is detected on-chain for the address the hooks service will fire of a webhook to the specified URL.

Mainnet endpoint: https://stellar-hooks.services.rehive.io/  
Testnet endpoint: https://stellar-hooks.s.services.rehive.io/

#### Registering and Authorization

To get an API token for the service POST `email` and `password` fields to the `/register/` endpoint.

The API token should be included in the `Authorization` header example: `Authorization: Token {token}`

#### Webhooks

The webhook resource handles the following fields:

Field | Description
--- | ---
webhook_id | Internal hooks service id
url | URL the service will send webhook data to when a new transaction is detected
address | Stellar public address to monitor
last_checked_cursor | The Horizon cursor transaction should be checked from (Defaults to `0`)
secret | A secret that can be identified by the service recieving the webhook
external_id | External identifier for the webhook

To setup an address for monitoring POST `url`, `address` and `secret` fields to the `/webhook/` endpoint. The rest are not `required` fields.

#### Transaction webhook data structure

To be added.

