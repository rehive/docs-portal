---
date: 2018-09-17T15:21:22+02:00
title: Introduction
description: Introduction to building third-party integrations for common fintech flows.
weight: 1
---
Rehive consists of three parts: Platform, Extensions, and Applications. This overview assumes that you are familiar with these. 

Rehive’s [Conversion Extension](https://dashboard.rehive.com/#/extensions/conversion/rates) has been updated to support custom quotes from third parties. This is done by associating a currency pair with a third-party (or custom) extension. When a quote is created for the currency pair, the custom extension provides information to generate the quote rather than using the internal rates of Rehive’s Conversion Extension.

This guide will cover the recommended way to build a custom estension which will provide quotes and execute conversion transactions on a relevant third party before updatin the associated Rehive transactions.

The first place to start is by familiarizing yourself with the [Get Started section](/building/get-started/introduction/). This gives a basic overview of how to start building an extension as well as the ground-level endpoints you’ll need to use. You should also familiarize yourself with [Rehive’s Standard Configurations](https://docs.google.com/document/d/1LdWBY2Oim2EPWv2-ZNKIPXDbnULbSf-DiUfuCw7_zQg/edit#) to ensure that the correct subtypes are used for specific transactions.






