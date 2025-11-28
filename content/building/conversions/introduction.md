---
date: 2018-09-17T15:21:22+02:00
title: Introduction
description: Introduction to building third-party integrations for common fintech flows.
weight: 1
---

<aside class="notice">
	Rehive consists of three parts: Platform, Extensions, and Applications. This overview assumes that you are familiar with these.
</aside>

Rehive’s [Conversion Extension](https://dashboard.rehive.com/#/extensions/conversion/rates) supports custom quoting and conversion approval via an integration flow. This is done by associating a currency pair to an integration service. An integration can be configured to:

- Request quote details (including exchange rates) from the integration service rather than simply using the Conversion Extension's internal rates.
- Offload approval of conversions to the integration service.

This guide will cover the recommended way to build an integration service that will provide quotes and execute conversion transactions on a relevant third party.