---
date: 2018-09-17T15:21:22+02:00
title: Deprecation timeline
description: Platform deprecation timeline.
weight: 1
---

This timeline indicates dates at which certain functionality will be permanently removed from the Rehive platform. Anything listed here should be regarded as deprecated and will only be supported up to the date indicated in the timeline.

---

{{< link-heading "h4" "07-12-2020" >}}

1. Remove the POST `/auth/tokens/verify/` endpoint.
	- This has been replaced by a `GET` on the `/auth/` endpoint. The token is included as a header instead of in the post data.
2. Remove resource specific export endpoints. The following endpoints should be used instead:
	- `/exports/`
 	- `/exports/<id>/`
	- `/admin/exports/`
	- `/admin/exports/<id>/`

---

{{< link-heading "h4" "07-12-2020" >}}

*The date for this deprecation was pushed back from its previous date of the 20-04-2019*

1. Remove non-inferred transaction fees on automatic fee creation rules.
	- All automatic ransaction fees will have to be inferred to work after this date.
	- The `fees` and `fee` fields on individual transactions will continue to be exposed for backwards compatibility reasons.
3. Remove the source/destination property.
	- These properties are now available as a single `partner` property.

---

{{< link-heading "h4" "23-11-2020" >}}

1. Replace account-configuration and all related endpoints with account-definition endpoints.
	- Existing account configurations will be automatically migrated to the new format.
2. Replace old disallowed subtype rules with the new format (that includes account definitions as a factor).
	- Existing disallowed subtypes will be automatically migrated to the new format.
	
---

{{< link-heading "h4" "16-04-2019" >}}

1. Remove `/admin/transactions/sets/` endpoints:
	- Use the new exports endpoint instead: `/admin/transactions/exports/`

---

{{< link-heading "h4" "29-01-2019" >}}

1. Remove the identifier field from the company object.
	- Use the id field instead of the identifier field. This will make the company object consistent with all the other Rehive resources.
2. Remove the mobile_number field from user objects.
	- Use the mobile field instead of mobile_number field.

---

{{< link-heading "h4" "13-09-2018" >}}

1. Remove the `identifier` field from the user object and user lists. The `identifier` filter fields will be removed at the same time.
	- Use the `id` field instead of the `identifier` field. This will make the user object consistent with all the other Rehive resources.
2. Remove the `enabled` and `active` fields from the user object and user lists.
	- Use the `archived` field instead.
1. Remove the old “single address” endpoint found at `/3/user/address/`.
	- This has been replaced by a multi address endpoint: `/3/user/addresses/`.

---

{{< link-heading "h4" "12-06-2018" >}}

1. Remove the `date_joined` field from the user object and user lists. The date_joined filter fields will be removed at the same time.
	- Use the `created` field instead of the `date_joined` field.

---

{{< link-heading "h4" "15-05-2018" >}}

1. Remove the `/3/company/bank-account/` endpoint.
	- This has been replaced by a list endpoint: `/3/company/bank-accounts/`.
	- Use the new endpoint in combination with currency filters in order to get the correct bank account for a currency.

---

{{< link-heading "h4" "15-03-2018" >}}

1. Remove the `https://rehive.com/api/3/` base API URL. The new URL should be used exclusively after this date.
	- The above URL should be replaced with `https://api.rehive.com/3/` in all codebases. Rehive maintained code will roll out this change in the months leading up to the deprecation.
2. Remove `active` currency support on transaction creation.
	- This means that a `currency` field must be included on every transaction create endpoint.
	- This will primarily impact users of the Ionic project, which was built on an older API.

---

{{< link-heading "h4" "08-02-2018" >}}

1. Remove `confirm_on_create` from the all transaction create endpoints. Replace `confirm_on_create` with a status of `complete` like: ‘{“status”: “complete”}’
