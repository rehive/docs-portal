---
date: 2018-09-17T15:21:22+02:00
title: Throttling
description: Throttling.
weight: 7
---

In order to ensure that the platform provides a high quality and stable environment to all clients all requests are subject to throttling. This protects the platform against unplanned high load, random bursts and intentional request based attacks.

Throttling is applied based on the company's tier. There are 3 tiers that have different throttling rules depending on whether the request is on a `user` endpoint or an `admin` endpoint. These rules apply to "sustained" requests/min of a single user (additional rules exist to allow some flexibility in terms of "burst" usage).

Name| user | admin
---|---|---
Limited | 50/min | 100/min
Standard | 100/min | 200/min
Extended | 500/min | 1000/min

<aside class="notice">
	If throttling is proving to be a limiting factor in your usage of the platform, please contact support and we can have a discussion regarding raising your company's tier.
</aside>