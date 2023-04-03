---
date: 2018-09-17T15:21:22+02:00
title: Introduction
description: Introduction to building third-party integrations for common fintech flows.
weight: 1
---
Rehive consists of three parts: Platform, Extensions, and Applications. This overview assumes that you are familiar with these. 

We’ll look at the typical structure for integrating with a banking partner for deposits via bank transfer. For each flow, we will highlight which Rehive endpoints to use.

The first place to start is by familiarizing yourself with the [Get Started section](/building/get-started/introduction/). This gives a basic overview of how to start building an extension as well as the ground-level endpoints you’ll need to use. You should also familiarize yourself with [Rehive’s Standard Configurations](https://docs.google.com/document/d/1LdWBY2Oim2EPWv2-ZNKIPXDbnULbSf-DiUfuCw7_zQg/edit#) to ensure that the correct subtypes are used for specific transactions.

#### Omnibus vs. segregated custody models
It is useful to know the difference between two types of custody approaches. An omnibus approach involves end-users depositing funds to a single company bank account (omnibus bank account), using a user’s unique Rehive account reference to identify the transaction as belonging to the user. This approach is also referred to as an FBO or “for benefit of” structure. Feel free to test this flow on your test project in the Rehive Wallet apps.

A segregated approach involves end-users depositing funds to unique bank accounts associated to them on the backend, using a user’s unique Rehive account reference to identify the account to assign the deposit to.

<img src="/images/omnibus-vs-segregated.png" alt="omnibus-vs-segregated" width="80%">  






