---
date: 2018-09-17T15:21:22+02:00
title: Usage
description: Bridge extension usage.
weight: 4
---

The Bridge extension API is organized around the same RESTful principles as the Rehive platform. Many of the rules found in the patform are applicable to the Bridge extension. This is  specifically true of authorization, errors, filters, and pagination.

## Managed currency limitations

It is important to keep in mind that the Bridge extension is a [currency manager](/building/currency-manager-extension/introduction/). This means that any transaction linked to a currency managed by the Bridge extension will only be completed/failed once its transitions are approved/declined by the Bridge extension (ie. Bridge itself). As a result, you cannot perform ad hoc transactions on accounts related to Bridge wallets and control their resolution manually as the one-to-one nature of the account->wallet architecture means that all transaction resolution is delegated to Bridge itself.
