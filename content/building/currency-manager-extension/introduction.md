---
date: 2018-09-17T15:21:22+02:00
title: Introduction
description: Currency Manager Overview.
weight: 1
---

Rehive consists of three parts: Platform, Extensions, and Applications. This overview assumes that you are familiar with these. 

In this guide we will look at dive into what a Currency Manager is, how to build a Currency Manager Extension as well as some more advanced Currency Manager implementations.

The first place to start is by familiarizing yourself with the [Get Started section](/building/get-started/introduction/). This gives a basic overview of how to start building an extension as well as the ground-level endpoints you’ll need to use. You should also familiarize yourself with [Rehive’s Standard Configurations](https://docs.google.com/document/d/1LdWBY2Oim2EPWv2-ZNKIPXDbnULbSf-DiUfuCw7_zQg/edit#) to ensure that the correct subtypes are used for specific transactions.

Lastly being comfortable with the [transaction](/platform/core-resources/transactions/) and [transaction collection](/platform/core-resources/transaction-collections/) logic is also required to start building a currency manager extension.


### What is currency management?

Currency management allows each Rehive currency to be controlled by a service user. This user is known as the currency manager and is the sole entity that can shift transactions of that currency to a Complete or Failed state.

The manager is assigned to the currency by updating the `manager` field using the service user's ID as the input. See the [Core API doc section](https://rehive-platform-admin.redoc.ly/tag/Currencies#operation/currencies_update) for more information.

### What is a currency manager extension?

A currency manager extension is the status controller for a specific currency’s transactions on Rehive. It is also the link between the Rehive ledger and a third party ledger/store of value.

Its primary functions are to transition Rehive transactions from a Pending state to either a Complete or Failed state, as well as trigger any third party side effects required on the external third party ledger.

Transitioning transactions on Rehive as a currency manager is done by approving or declining [transition events](https://rehive-platform-admin.redoc.ly/tag/Transaction-transitions#operation/transaction-transitions_partial_update) triggered by Rehive while it processes a transaction.
