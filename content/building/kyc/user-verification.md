---
date: 2018-09-17T15:21:22+02:00
title: Update user verification statuses
description: Basic overview of an example flow to facilitate end-user deposits KYC field updates 
weight: 2
---

#### Requirements and best practices

* Rehive’s standard approach uses [Tiers](https://rehive.intercom.help/en/collections/2574043-rehive-setup-and-standard-configurations#what-are-tiers-and-tier-requirements) to enforce limits, fees and subtype restrictions for users. Tiers can be configured on a [Group](https://rehive.intercom.help/en/articles/5904250-how-do-groups-work) level using the [Rehive Admin Dashboard](https://dashboard.rehive.com/#/groups/overview) based on a variety of fields which can be updated using the dashboard KYC flows or the Rehive Platform.
* A [webhook](https://dashboard.rehive.com/#/developers/webhooks/list) can be configured to notify your custom extension when specific user [events](https://docs.rehive.com/platform/usage/events/) that relate to your specific KYC requirements occur, such as end-users updating KYC fields or submitting relevant supporting documents.
* The Rehive Platform can be used to fetch the required data and supporting documentation. Should your KYC provider or local regulations require KYC fields that Rehive does not yet support, please contact us so that we may add them.
* Once verified, the applicable fields can be updated on the Rehive Platform.
* Depending on the tier requirements for a particular user’s group, Rehive Platform will assign them to a Tier, and the appropriate fees, limits, and subtype restrictions will apply.

#### Flow

1. The end-user submits information via the app. Using the existing wallet frontends, users are able to submit their KYC information as well as upload supporting documentation. 
2. The Rehive system triggers a webhook to your custom extension.
3. Your custom extension formats the information and submits it to the third-party system.
4. Your KYC provider’s system applies KYC checks and returns a status (either per requirement, or an overall user verification status).
5. Your custom extension updates the relevant status on Rehive Platform.
6. The Rehive Notification Extension notifies the user of a status update per your configured notification settings.

Rehive supports statuses on key sets of user information fields. For example, basic information, address, external accounts, documents, etc. Your extension can update some or all of the status fields, depending on your requirement. The process will start with setting up webhooks for specific user [events](https://docs.rehive.com/platform/usage/events/) that relate to our specific KYC requirements.

<img src="/images/Third Party KYC Integration.png" alt="KYC update flow" width="80%"> 


#### KYC fields and endpoints

1. User -> Adresses
    1. Update after the required document category has been set to verified
    2. Endpoint: `PATCH` on  <code>[/admin/users/addresses/{id}/](REPLACE/tag/Admin#operation/admin_users_addresses_partial_update)</code> with data `{“status”: “verified”}`
2. User -> Bank account
    1. Update after the required bank verification has been completed - could include verification of banking document category
    2. Endpoint: `PATCH` on  <code>[/admin/users/bank-accounts/{id}/](REPLACE/tag/Admin#operation/admin_users_bank-accounts_partial_update)</code> with data `{“status”: “verified”}`
3. User -> Documents
    1. Verify documents based on KYC regulations
    2. Document verification could be triggers for updating other statuses on user data
    3. Endpoint: `PATCH` on <code>[/admin/users/documents/{id}/](REPLACE/tag/Admin#operation/admin_users_documents_partial_update)</code> with data `{“status”: “verified”}`

#### Recommended additional configurations:

* Create and customize notifications using the [Notifications Extension](https://dashboard.rehive.com/#/extensions/notifications/list) to ping users when a verification status changes on their profile. 
* The [Rehive Expressions Guide](https://docs.google.com/document/d/1v44nM51-VaevcMYVkGEL2scI-PpZsUIESxAxLdawxbs/edit?usp=sharing) is useful for creating notifications with specific trigger variables.

#### Special case: Updating the User Status field

In certain cases,  for example, where verification documentation is submitted directly to your KYC partner and not stored in Rehive, it may be useful to make use of the User Status field. This field is only used in the case where requirements are verified externally by your 3rd party provider and one overall user verification status is returned. 


This field should be set to verified once all required fields are verified. Please note that if the user’s primary information changes, Rehive automatically updates this field to “Pending”. This field can be ignored completely if wished.

To update this field:
`PATCH` on  <code>[/3​/admin​/users​/{identifier}​/](REPLACE/tag/Admin#operation/admin_users_partial_update)</code> with data `{“status”: “verified”}`








