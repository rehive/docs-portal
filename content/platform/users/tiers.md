---
date: 2018-09-17T15:21:22+02:00
title: Tiers
description: Tiers in the platform.
weight: 4
---

Tiers are the primary tool available for configuring variations in available functionality (and the execution of that functionaly). These variations are applied automatically if a user matches the requirements for a given tier.

For instance, a company could configure tiers that limit the max amount a user can transfer based on what data the user has submitted. This could be as simple as configuring a USD 0.00 limit if the user has not verified their email address as well as a USD 1000.00 limit if they have instead verified their email address.

By default, companies are preloaded with sensible tiers and tier requirements but the Platform makes it easy to adjust or completely overhaul the tiers based on your business requirements.

### Requirement sets and items

In order to configure what users a tier applies to, the Platform supports a highly configurable system for rule customization. Custommization is done via "requirement sets" and "requirement items" that allow for a wide variety of hierarchical conditions.

The best way to apply tier customizations is to access them in the dashboard, which includes a feature-rich interface for handling all possible condition sets and rules available in the Platform.

### Tier settings

Subtype and transaction type controls.

### Tier fees

Tiers can be configured to apply different fees based on configurable transaction conditions. By allowing fee variations between tiers, a company can be configured to have reduced fees for users that are in higher (more demanding) tiers.

Fees on tiers can be setup to trigger based on the following conditions:

- Transaction type
- Transaction currency
- Transaction subtype
- Transaction account definitions

### Tier limits

Tiers can be configured to apply different limits based on configurable transaction conditions. These limits can be used to prevent users in lower (less demanding) tiers from performing risky transactions be enforcing limitations on transactional capacity.

Limit on tiers can be setup to trigger based on the following conditions:

- Transaction type
- Transaction currency
- Transaction subtype
- Transaction account definitions
