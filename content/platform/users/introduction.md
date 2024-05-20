---
date: 2018-09-17T15:21:22+02:00
title: Introduction
description: Introduction to users in the platform.
weight: 1
---

The User component handles the organization and management of users in the Platform. This includes organizational requirements such as KYC/AML as well as user categorization and personal data management.

The **primary features** of the user component are:

- [Users](/platform/users/users/) : user information, data and settings/rules.
- [Groups](/platform/users/groups/): catgeorization of users into groups with differet settings/rules.
- [Tiers](/platform/users/tiers/): automatic categorization of users based on requirements.
- [Permissions](/platform/users/permissions/): fine-grained permissions on users/groups.
- [Documents](/platform/users/documents/): documents used for KYC/AML an and automated tier requirement evaluation.

#### Other features

In addition to the primary features documented via the above list, the users portion of th Platform includes the following features as well:

##### Addresses

Addresses can be attached to users. These addresses can be cross referenced against user-owned documents. Addresses of the following types can be created on users:

- permanent
- contact
- shipping
- billing
- business

A user can have multiple addresses and each address can be individually verified via a `status` field.

##### Beneficiaries

Beneficiaries are used to store user-specific external (non-Rehive) accounts that need to be used for deposit and withdraw purposes. These can be used for manual deposit withdraw handling or alternatively for custom integrations with 3rd party services.

Currently the Platform supports the following beneficiary types.

- Bank accounts
- Crypto accounts
- Wallet accounts

A user can have multiple beneficiaries of each type and each beneficiary can be individually verified via a `status` field.
