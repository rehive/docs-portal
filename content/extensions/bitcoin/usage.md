---
date: 2018-09-17T15:21:22+02:00
title: Usage
description: Bitcoin extension usage.
weight: 4
---

The testnet and mainnet APIs are seperated as shown below:
<aside class="notice">
    Both the Testnet and Mainnet APIs have the same specification.
</aside>

<strong>Testnet</strong>
<aside class="notice">
The full <strong>Testnet API specification</strong> can be found <a href="https://bitcoin-testnet.services.rehive.io/redoc">here</a>
</aside>

<aside class="notice">
The <strong>Testnet Swagger specification</strong> can be found <a href="https://bitcoin-testnet.services.rehive.io/swagger">here</a>
</aside>

<strong>Mainnet</strong>
<aside class="notice">
The full <strong>Mainnet API specification</strong> can be found <a href="https://bitcoin.services.rehive.io/redoc">here</a>
</aside>

<aside class="notice">
The <strong>Mainnet Swagger specification</strong> can be found <a href="https://bitcoin.services.rehive.io/swagger">here</a>
</aside>

The Bitcoin extension API is organized around the same RESTful principles as the Rehive platform. Many of the rules found in the patform are applicable to the Bitcoin extension. This is  specifically true of authorization, errors, filters, and pagination.

Similar to the platform the Bitcoin extension is divided into two sections:

1. admin : admin endpoints are prefixed with `admin`
2. user : user endpoints are prefixed with `user`

### Admin

The admin section of the API provides an interface to adminsitrate (create, read, update and delete) the rates.

### User

The user section of the API provides an interface to view the rates.
