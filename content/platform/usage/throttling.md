---
date: 2018-09-17T15:21:22+02:00
title: Throttling
description: Throttling.
weight: 7
---

Throttling is applied based on the company's tier. There are 4 tiers that have different throttling rules depending on whether the request is on a `user` endpoint or an `admin` endpoint. The `restricted` tier will automatically be applied to a company if their associated account is unpaid. In these situations only the "owner" or original creator of the company will still be able to access the API.

New companies, and those within the trial period have a throttling type of `limited`. 

### Sustained usage

Name| user | admin | Condition
---|---|---|---
restricted | 0/hour | 0/hour | Only the company owner can access the API.
limited | 3000/hour | 6000/hour | -
standard | 6000/hour | 12000/hour | -
extended | 30000/hour | 60000/hour | -

### Burst usage

In addition to sustained (hourly throttles), The platform API also throttles on requests per minute. These throttles exist to protect against high burst while also allowing some flexibility during abnormally high but short request loads.

Name| user | admin | Condition
---|---|---|---
restricted | 0/min | 0/min | Only the company owner can access the API.
limited | 100/min | 200/min | -
standard | 150/min | 250/min | -
extended | 500/min | 1000/min | -

<aside class="notice">
	If throttling is making it hard to implement your use-case, please contact support and we can have a discussion regarding raising your company's tier.
</aside>
