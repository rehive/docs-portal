---
date: 2018-09-17T15:21:22+02:00
title: Introduction
description: Introduction to building third-party integrations for common fintech flows.
weight: 1
---
Rehive consists of three parts: Platform, Extensions, and Applications. This overview assumes that you are familiar with these. We offer some extensions out of the box, but it is also possible to build your own custom extensions.  

We’ll look at the typical structure for integrating with a banking partner. For each flow, we will highlight which Rehive endpoints to use.

The first place to start is by familiarizing yourself with the [Get Started section](https://docs.rehive.com/building/get-started/introduction/). This gives a basic overview of how to start building an extension as well as the ground-level endpoints you’ll need to use. It should be noted that for end-users, the authentication endpoint will return personal information as well as the User ID, so in most cases, additional API calls are not necessary. You should also familiarize yourself with [Rehive’s Standard Configurations](https://docs.google.com/document/d/1LdWBY2Oim2EPWv2-ZNKIPXDbnULbSf-DiUfuCw7_zQg/edit#) to ensure that the correct subtypes are used for specific transactions.


### Support and enablement

The [Account Manager expectations](https://rehive.intercom.help/en/collections/2091533-unpacking-rehive-services) article outlines what support is available from Rehive when building a custom extension. Whether or not you are on a subscription plan that includes an account manager:

* You must verify that your chosen 3rd party provider has support for the common endpoints for the integration requirements.
* You must consider and design the way that data is stored in the extension and linked to users.
* You should familiarize yourself with the [Rehive Help Center](https://rehive.intercom.help/en/). 
* Rehive may offer a call to go over the flows if documentation is not sufficient or to identify variances. The banking partner should be included a specialist.
* Rehive does not provide codebase-level reviews for custom extensions.
* Support will be provided on Rehive endpoints not working - Please take note of the [guidelines](https://rehive.intercom.help/en/articles/6229420-reporting-a-technical-support-issue) for reporting technical issues.

### Guidelines for flows

This section includes guidelines for creating back-end functionality for flows that the Rehive wallets can accommodate without front-end customization.


