---
date: 2018-09-17T15:21:22+02:00
title: Deprecation timeline
description: Platform deprecation timeline.
weight: 1
---

This timeline indicates when certain functionality will be permanently removed from the Rehive platform. Anything listed here is deprecated and will be supported up to the date indicated in the timeline.

### Deprecated

{{< link-heading "h5" "2024-06-18" >}}

*Added on 2023-05-30*

1. Remove the temporary `use_new_documents_and_requirement_sets` field on the `company` resource. All companies will be force dto use the new documents and requirement set handling.
2. Remove the old `document_type` and `document_category` handling on documents.
    - All documents should have `type` instead. The `document_type` and `documnt_catgeory` will be removed compleletely.
    - Documents can be updated through the API to have the new `type` field (after adding `document-types`).
    - Please contact the Rehive team if you want us to migrate your documents to the new format.
3. Remove the `requirement` resource and all related endpoints. These endpoints have been replaced by the `requirement-sets` and children `items` endpoints.
    - `/groups/<name>/tiers/<tier_id>/requirements/`
    - `/groups/<name>/tiers/<tier_id>/requirements/<req_id>/`
    - `/admin/groups/<name>/tiers/<tier_id>/requirements/`
    - `/admin/groups/<name>/tiers/<tier_id>/requirements/<req_id>/`
    - Please contact the Rehive team if you want us to migrate your `requirements` to the new `requirement-sets`.
4. Remove fields from the following endpoints.
    - `/groups/` and `/groups/<name>/` : remove  all fields in the `tier` object except for `id`, `level`, `name`, and `description`.
    - `/groups/<name>/tiers/` and `/groups/<name>/tiers/<id>/` : Remove the `limits`, `requirements`, and `fees`.
    - `/users/<id>/groups/` and `/users/<id>/groups/<name>/` : remove  all fields in the `tier` object except for `id`, `level`, `name`, and `description`.
    - `/admin/groups/<name>/tiers/` and `/admin/groups/<name>/tiers/<id>/` : Remove the `limits`, `requirements`, and `fees`.

{{< link-heading "h5" "2024-06-18" >}}

*Added on 2023-11-16*

1. Remove the `password1` and `password2` fields from the register endpoints.
    - Use the `password` field instead. Handle double password value confirmation on the frontend instead.
2. Remove the `new_password1` and `new_password2` fields from the password reset confirm and passowrd change endpoints:
    - Use the `new_password` field instead. Handle double password value confirmation on the frontend instead.
3. Remove the `allow_overdrafts` field from the company settings. 
    - Developers and administratrs should instead configure specific overdrafts via tier limits.

### Removed

{{< link-heading "h5" "2023-08-16" >}}

*Added on 2021-06-09*

1. Remove the old MFA endpoints and functionality.
	- This has been replaced by the new `authenticator-rule`, `authenticator` and `authenticator-challenge` resources and functionality.
	- Remove auth endpoints: `/3/auth/mfa/`, `/3/auth/mfa/token/`, `/3/auth/mfa/sms/`, `/3/auth/mfa/sms/send/`.
	- Remove admin endpoints:  `/3/admin/users/<id>/mfa/`, `/3/admin/users/<id>/mfa/sms/`, `/3/admin/users/<id>/token/`.
	- Remove `mfa` from the post login (authentication) responses.
        - The new MFA documentation can be found [here](/platform/advanced-usage/multi-factor/)
2. Remove the old `/3/logout/all/` endpoint.
	- The `/3/auth/tokens/` or `/3/auth/tokens/<id>/` endpoints can be used to delete tokens instead.

---

{{< link-heading "h5" "2023-04-25" >}}

*Added on 2021-06-09*

1. Remove most of the fields from the `user` object on the `/3/auth/login/` and `/3/admin/auth/login/` responses.
    - Only the user's `id` field within the `user` object will be preserved in the response.
    - This is to ensure that personal user details cannot be accessed prior to a user completing MFA verification (when enabled).
    - Going forward, if additional user data is needed, an additional API call will have to be perfomed on `/3/user/`.
2. Remove the `config` field from the company resource.
    - This field has been renamed to be the `metadata` field, which contains the same data as the `config` field.
    - Simply switch to using the `metadata` field in your services and applications.

---

{{< link-heading "h5" "2021-07-13" >}}

*Added on 2021-04-13*

1. Remove the `kyc` field from the user resource.
	- Use `metadata` , `status` and tier requirements instead.

---

{{< link-heading "h5" "2021-06-15" >}}

*Added on 2021-03-11*

1. Remove the `email` and `mobile` fields from the `partner` object on user section transaction endpoints.
	- The `email` and `mobile` have been replaced by a generic `identifier` field that contains who the user sent/recived funds from.
	- Clients should prefer the following prioritization when showing partner transaction user info: `first_name` or `last_name`, `username`, `identifier`, `id`.

---

{{< link-heading "h5" "2021-05-18" >}}

*Added on 2021-02-16*

1. Remove the ability to change the status of transactions that have executed. Executed transactions are those with a status of `Complete` or `Failed`.
	- This can be tested before the final date by changing the `immutable_transactions` boolean to `true`.
2. Remove the `immutable_transactions` boolean on the company object. Going forward this behaviour will be required.

---

{{< link-heading "h5" "2021-04-13" >}}

*Added on 2020-04-20*

1. Remove the POST `/auth/tokens/verify/` endpoint.
	- This has been replaced by a `GET` on the `/auth/` endpoint. The token is included as a header instead of in the post data.
2. Remove the source/destination property.
	- These properties are now available as a single `partner` property.
	
---

{{< link-heading "h5" "2021-01-18" >}}

1. Remove resource specific export endpoints. The following endpoints should be used instead:
	- `/exports/`
 	- `/exports/<id>/`
	- `/admin/exports/`
	- `/admin/exports/<id>/`

---

{{< link-heading "h5" "2020-12-10" >}}

1. Replace account-configuration and all related endpoints with account-definition endpoints.
	- Existing account configurations will be automatically migrated to the new format.
2. Replace old disallowed subtype rules with the new format (that includes account definitions as a factor).
	- Existing disallowed subtypes will be automatically migrated to the new format.
	
---

{{< link-heading "h5" "2019-04-16" >}}

1. Remove `/admin/transactions/sets/` endpoints:
	- Use the new exports endpoint instead: `/admin/transactions/exports/`

---

{{< link-heading "h5" "2019-01-29" >}}

1. Remove the identifier field from the company object.
	- Use the id field instead of the identifier field. This will make the company object consistent with all the other Rehive resources.
2. Remove the mobile_number field from user objects.
	- Use the mobile field instead of mobile_number field.

---

{{< link-heading "h5" "2018-09-13" >}}

1. Remove the `identifier` field from the user object and user lists. The `identifier` filter fields will be removed at the same time.
	- Use the `id` field instead of the `identifier` field. This will make the user object consistent with all the other Rehive resources.
2. Remove the `enabled` and `active` fields from the user object and user lists.
	- Use the `archived` field instead.
1. Remove the old “single address” endpoint found at `/3/user/address/`.
	- This has been replaced by a multi address endpoint: `/3/user/addresses/`.

---

{{< link-heading "h5" "2018-06-12" >}}

1. Remove the `date_joined` field from the user object and user lists. The date_joined filter fields will be removed at the same time.
	- Use the `created` field instead of the `date_joined` field.

---

{{< link-heading "h5" "2018-05-15" >}}

1. Remove the `/3/company/bank-account/` endpoint.
	- This has been replaced by a list endpoint: `/3/company/bank-accounts/`.
	- Use the new endpoint in combination with currency filters in order to get the correct bank account for a currency.

---

{{< link-heading "h5" "2018-03-15" >}}

1. Remove the `https://rehive.com/api/3/` base API URL. The new URL should be used exclusively after this date.
	- The above URL should be replaced with `https://api.rehive.com/3/` in all codebases. Rehive maintained code will roll out this change in the months leading up to the deprecation.
2. Remove `active` currency support on transaction creation.
	- This means that a `currency` field must be included on every transaction create endpoint.
	- This will primarily impact users of the Ionic project, which was built on an older API.

---

{{< link-heading "h5" "2018-02-08" >}}

1. Remove `confirm_on_create` from the all transaction create endpoints. Replace `confirm_on_create` with a status of `complete` like: ‘{“status”: “complete”}’
