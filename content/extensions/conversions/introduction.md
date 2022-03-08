---
date: 2018-09-17T15:21:22+02:00
title: Introduction
description: Introduction to the conversion extension.
weight: 1
---

The conversion extension is used to manage currency rates, quotes and conversion transactions. It allows for companies to access data regarding current rates (provided by a reliable 3rd party rates source) as well as set their own custom rates for specific currency pairs.

<aside class="notice">
The full <strong>API specification</strong> can be found <a href="https://conversion.services.rehive.io">here</a>
</aside>

<aside class="notice">
The <strong>Swagger specification</strong> can be found <a href="https://conversion.services.rehive.io/swagger/">here</a>
</aside>

Currently the extension allows you to:

1. Retrieve rates for common global currency pairs.
2. Enable and retrieve rates for custom currency pairs.
3. Set rate paths for currency pairs.
4. Add custom currencies for rate pairs.

<aside class="warning">
	The following features are not supported yet:
</aside>

1. Complex expressions for rate pair paths. 
2. Customizable or extended base currency support. Only USD is supported as a base currency currently.
