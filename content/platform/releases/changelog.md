---
date: 2018-09-17T15:21:22+02:00
title: Changelog
description: Platform changelog.
weight: 1
---

Summary of additions and changes to the Rehive platform. Breaking changes or
removals will be indicated ahead of time in the deprecation timeline.

---

{{< link-heading "h4" "09-07-2020" >}}

1. Fixed an issue where trying to delete an email belonging to an archived user resulted in a "Cannot modify archived object" error.

---

{{< link-heading "h4" "01-06-2020" >}}

1. Added a new `name` field to fees. this name may only be lowercase, underscores and numbers and only one fee can exist on a given level per name (ie. there can be one group_tier fee with the name main_fee and one account asset fee with the name main_fee).
2. Updated fee calculation (on transactions) to only retrieve one fee per `name`. This means that if a Group Tier fee is defined AND a Account Asset fee with the same name, then only the Account Asset fee will be applied).

---

{{< link-heading "h4" "11-05-2020" >}}

1. Updated all `disallowed_transaction_subtypes` fields in relevant settings to support an additional list of currencies on which that specific subtype is disabled.

---

{{< link-heading "h4" "20-04-2020" >}}

1. Added new utility methods for deleting authentication tokens
    - `DELETE` on `/auth/tokens/` will now delete all tokens belonging to the authenticated user.
    - `DELETE` on `/admin/users/tokens/` will now delete all tokens in a company. This endpoint works with the filters available on `GET` ie. `/admin/users/tokens/?user=example@rehive.com`.
2. Added new functionality to ensure old idempotent keys are cycled out of the system after 1 week.
3. Added new `/auth/` endpoint for checking whether a user is authenticated via a GET request.
    - The `/auth/tokens/verify/` endpoint will be phased out in favor of the new `/auth/` endpoint.

---

{{< link-heading "h4" "14-04-2020" >}}

1. Added new data based throttling for anonymous auth endpoints.
    - Authentication attempts with identical data will now be throttled regardless of user/IP.
    - This also applies to register, password reset and email/mobile resend.
2. Added new group icon/image.
3. Added new `archived` filter on the admin currency list.

---

{{< link-heading "h4" "02-04-2020" >}}

1. Added new list public groups endpoint for public companies:
    - `/public/companies/<id>/groups/`
2. Added new retrieve public group for public companies:
    - `/public/companies/<id>/groups/<group_name>/`
3. Fixed a bug where existing unconfirmed token devices in MFA would cause errors when trying to verify SMS devices.
4. Fixed a bug where the `token` field was not getting included in the MFA verify swagger schema.
5. Added new global export endpoint that correctly handles retrieval of multiple resource type exports.
   - `/exports/`
   - `/exports/<id>/`
   - `/admin/exports/`
   - `/admin/exports/<id>/`

---

{{< link-heading "h4" "26-03-2020" >}}

1. Updated message handling on transactions. Added new endpoints:
    - `/admin/transactions/<id>/messages/`
    - `/admin/transactions/<id>/messages/<id>/`
    - `/transactions/<id>/messages/`
    - `/transactions/<id>/messages/<id>/`
2. Added messages to users.
    - `/admin/users/<id>/messages/`
    - `/admin/users/<id>/messages/<id>/`
    - `/user/messages/`
    - `/user/messages/<id>/`

---

{{< link-heading "h4" "12-03-2020" >}}

1. Added a new device endpoints for users and admins
    - These can be accessed via `/user/devices/` and `/admin/users/devices/`
    - Devices can be edited via `/user/devices/<id>/` and `/admin/users/devices/<id>/`
2. Added a sub endpoint for apps on specific devices.
    - These can be accessed via `/user/devices/<id>/apps/` and `/admin/users/devices/<id>/apps/`
    - Apps can be edited via `/user/devices/<id>/apps/<id>/` and `/admin/users/devices/<id>/apps/<id>/`
3. Added new resource tracking on request logs. A `resource` and `resource_id` will now contain specifc information regarding what resource was modified by an action.
4. Added new `tier` property to the user group view/list. This property contains the active tier under which a user falls within that group.
5. Fixed custom session durations to support setting by admin users (formerly it only allowed owner users to set this value).
    
---

{{< link-heading "h4" "12-02-2020" >}}

1. Added a new type of tier requirement named `user_metadata`.
    - Can be used to define custom "key -> value" requirements based on user metadata.
2. Updated user object metadata to only be writable via the admin API endpoints.
    - Previously this field could be modified by the user as well.
3. Added a `mode` field to companies.
    - This field is a immutable field.
    - It has two values: `production` and `test`. It defaults to `test`.
4. Updated choice field to use values instead of labels/
    - This was updated on the following resources: documents, requirements and limits.
5. Changed `email_confirmation_url` to `email_verification_url`.
6. Changed `email` on the company object to `system_email`. Also added new email fields:
    - `support_email`
    - `contact_email`
7. Added filter fields for the temporary boolean on the `transaction` and `user` objects:
    - `user__temporary` on the `transaction` resource.
    - `temporary` on the `user` resource.
8. Added an `expires` field to the `document` resource.
    
---

{{< link-heading "h4" "29-01-2020" >}}

1. Added a new `require_transaction_subtype` field to the company object. If this is set to true then subtypes are required in order to create transactions.
2. Added a new `usage_type` field on the subtype resource. This can be used to define three general forms of subtype usage: `single`, `partner`, `null`.

---

{{< link-heading "h4" "12-12-2019" >}}

1. Added new MFA recovery codes. These codes can be used as an alternative to an MFA device.
    - `/auth/mfa/recovery-codes/` for creating, viewing and deleting MFA recover codes
    - `/auth/mfa/recover/` for using a code instead of verifying using an MFA device.
2. Added a new `mfa` boolean on on the login response.

---

{{< link-heading "h4" "31-10-2019" >}}

1. Added a transaction-collection resource and corresponding API endpoints for listing/adding/viewing/updating/deleting transaction-collections.
2. Added new transaction properties: parent, inferred, partner, collection.
3. Added new inferred transaction fees that are extrapolated into transactions.
4. Updated the transaction/transfer creation validation and processing logic.
5. Improved the performance of multi transaction creation validation and processing.
6. Added new "burst" and "sustained" throttling with differing rules which allow for increased temporary bursts of requests but still enforce the same average max requests per second.
7. Added new temporary user handling. When transfers are sent to non existent users they will be credited to temporary users.
8. Added new transfer handling to allow for transfers to be claimed from temporary users transactions when the real user registers (or is created).
9. Added new `slug` information to the user available service information.

---

{{< link-heading "h4" "16-10-2019" >}}

1. Added new webhook events:
    - `email.create` triggers after an email address is created.
    - `email.update` triggers after an email address is updated. Includes original email details.
    - `mobile.create` triggers after a mobile number is created.
    - `mobile.update` triggers after a mobile number is updated. Includes original mobile details.

---

{{< link-heading "h4" "13-09-2019" >}}

1. Added new account-currencies endpoint (beta).
    - `/3/account-currencies/`
    - `/3/admin/account-currencies/`
2. Added new account-currencies export endpoint (beta).
    - `/3/account-currencies/exports/`
    - `/3/admin/account-currencies/exports/`
3. Added new historic balance filter for account-currencies (beta).
    - On the account-currencies endpoint use `?historic={timestamp}`
    - This will yield results where the `balance` contains an historic value.

---

{{< link-heading "h4" "13-08-2019" >}}

1. Fixed a bug where some "nested" resources were throwing 500 errors instead of 404 errors  when the root resources did not exist.
2. Fixed a bug with datetime filters not filtering on the correct precision (milliseconds)
    - This resulted in odd behaviour when a object was inserted within microseconds of a filter's cut off value.
3. Improved the performance of account listings and exports.

---

{{< link-heading "h4" "05-08-2019" >}}

1. Added new account listing exports (admin and user).
    - Supports CSV and JSON formats
2. Added new account listing `reference__contains` filter field.

---

{{< link-heading "h4" "03-07-2019" >}}

1. Added new `disallow_transaction_subtypes` field to all endpoints that supported `settings`. This field should be used to stop a company/group/user/tier/account from creating transactions with selected subtypes. The endpoints this is available on are:
    - `/3/admin/company/settings/`
    - `/3/admin/groups/<id>/settings/`
    - `/3/admin/groups/<id>/tiers/<id>/settings/`
    - `/3/admin/accounts/<reference>/currencies/<code>/settings/`
    - `/3/admin/users/<id>/settings/`
2. Fixed a bug where an incorrectly formatted `query` object would throw 500 errors on the transaction export endpoints.

---

{{< link-heading "h4" "28-06-2019" >}}

1. Updated the URL routes to allow optional closing slashes.
2. Added a new subtypes endpoint for end users (users can see a list of subtypes)
    - `/3/subtypes/` and `/3/subtypes/<id>/`
3. Improved the ranking and partial matching on searches.
4. Fixed bug in the search where search terms including a `+` symbol would yield no results.

---

{{< link-heading "h4" "24-05-2019" >}}

1. Added new `email` parameter to the password set/reset and email verify URL.
2. Added a new `slug` field to the services object.

---

{{< link-heading "h4" "17-05-2019" >}}

1. Added new `network` and `name` fields to crypto accounts.
2. Added `available_balance` to the user info object.

---

{{< link-heading "h4" "07-05-2019" >}}

1. Fixed issues with variable length OTPs on SMS MFA.

---

{{< link-heading "h4" "02-05-2019" >}}

1. Added new `mfa.sms.verify` event that can be used to hook into the multi factor SMS verification message.
    - This can be configured via webhooks.
    - This allows for MFA SMS messages to be customized.

---

{{< link-heading "h4" "18-04-2019" >}}

1. Added new transaction export endpoint for non admin users.
    - Users can now export groups of their own transactions.
    - To view a list of exorts or create one: `/transactions/exports/`
    - To view a single export: `/transactions/exports/<id>/`
2. Removed the old `/admin/transactions/sets/` endpoints.
    - Use the `/admin/transactions/exports/` endpoints instead.

---

{{< link-heading "h4" "11-04-2019" >}}

1. Added new created and updated datetime fields to MFA devices (SMS and TOTP).
    - This can be used in order to see when a user enabled MFA.

---

{{< link-heading "h4" "09-04-2019" >}}

1. Updated accounts to not require a user to be attached to them.
    - The account `user` can be `null` when created.
    - The account` user` can be updated to `null`.
    - The account `user` attribute can be changed to another user.

---

{{< link-heading "h4" "28-03-2019" >}}

1. Renamed "result sets" to "exports".
    - Added replacement URL : `/admin/transactions/exports/`
    - The old URL will be deprecated as per the deprecation timeline.
3. Fixed a minor bug in account creation where deleting and recreating an account configuration (with the same name) could result in 500 errors when trying to create accounts for users automatically.

---

{{< link-heading "h4" "26-03-2019" >}}

1. Added new `total_amount` field to transaction total endpoints.
    - This contains the sum of all `total_amount`s on transactions

---

{{< link-heading "h4" "12-03-2019" >}}

1. Updated the `note` field on transactions to be editable by admin users.
2. Updated the admin transaction endpoints to support creating transactions without specifying a user if an account is specified instead.
    - An error will be returned if neither a user or account is returned.
    - An error will be returned if the account does not belong to the user specified.
3. Altered the webhooks so that only a single event can exist for a given URL.
    - An error will be thrown if multiple webhooks are created with the same URL and event.

---

{{< link-heading "h4" "06-03-2019" >}}

1. Added default descriptions for the `admin` and `service` group.
2. Added `description` field to group add endpoint.
3. Added a `stellar` crypto type to the crypto accounts.
4. Added protections to stop non-admin users from adding `admin` users.

---

{{< link-heading "h4" "27-02-2019" >}}

1. Added a proper JSON error message for when amounts, fees or limits exceed the max size allowed in the platform. Previously these errors threw 500 errors.

---

{{< link-heading "h4" "20-02-2019" >}}

1. Added new `code__in` filters on `/admin/currencies/` and `/company/currencies/` endpoints.
    - Can be used like: `?code__in=USD,EUR`

---

{{< link-heading "h4" "08-02-2019" >}}

1. Updated the max number of digits to 30 (from 28) for all currency amounts (eg. balances, transaction amounts).

---

{{< link-heading "h4" "07-02-2019" >}}

1. Added new address type field to address endpoints:
    - values include: `permanent`, `contact`, `shipping`, `billing`, `business`.
2. Changed subtypes to be unique together on subtype and tx_type. So that the same name can be used across different tx_types.
3. Removed the file size limitation of 1MB. Updated to a 5MB.

---

{{< link-heading "h4" "25-01-2019" >}}

1. Fixed a bug in the MFA flow that resulted in a user having to "re-login" after creating and confirming an MFA device.
2. Updated the email and mobile handling:
    - Users can now delete emails/mobiles as long as they are not their last email/mobile.
    - Admins can now delete all emails/mobiles (including primary ones) belonging to a user.
    - When primary emails/mobiles are deleted the next non primary email/mobile is set to primary.

---

{{< link-heading "h4" "16-01-2019" >}}

1. Fixed admin user filters so that they work on all user emails and mobiles, not just the primary ones.
2. Added an icon field to the company so that a wallet icon or favicon can be stored in the platform.

---

{{< link-heading "h4" "14-12-2018" >}}

1. Added access control for IPs. IP whitelists and blacklists can now be defined for the company, groups or users.
2. Fixed email and mobile create bug where a verified key had to be set in order to set the primary key.
3. Fixed errors with user update caused by a non read-only group key.

---

{{< link-heading "h4" "06-12-2018" >}}

1. Added the fields to update a user’s mobile and email from the user endpoint (previously added to the admin user endpoints).
2. Added a key to the company object that contains what services a company has activated.
3. Added group information to the user “short” object
    - This can be found on admin endpoints when showing related user information.

---

{{< link-heading "h4" "06-12-2018" >}}

1. Added a new, more flexible and simplified permission system.
    - Permissions can now be configured on both admin and user sections.
    - Permissions can now be added to a group/user in a batch of more than one.

---

{{< link-heading "h4" "20-11-2018" >}}

1. Added new privacy_policy_url and terms_and_conditions_url to the company settings.
2. Added new “require_privacy_policy” field to company settings.
3. Added new “privacy_policy” field to user register.

---

{{< link-heading "h4" "08-11-2018" >}}

1. Updated multi-factor authentication
    - Added a field to specify the `algorithm`  used when creating multi factor tokens (SHA1, SHA256, SHA512).
    - Allow users to disable multi-factor authentication when logged in
2. Added admin user multi-factor authentication management via the following endpoints:
    - GET - /admin/users/{identifier}/mfa/
    - DELETE -  /admin/users/{identifier}/mfa/sms/
    - DELETE - /admin/users/{identifier}/mfa/token/

---

{{< link-heading "h4" "30-10-2018" >}}

1. Updated the request logging to include the body data of every request.
    - Sensitive values such as authorization keys, OTPs, and passwords are masked and stored as the masked value.

---

{{< link-heading "h4" "25-10-2018" >}}

1. Added new `status` field to the admin transfer create endpoint.
    - This field will impact transfers between existing users in the system.

---

{{< link-heading "h4" "18-10-2018" >}}

1. Force non permanent token invalidation on password reset.
2. Added new public company endpoint:
    - `https://api.rehive.com/3/public/companies/`
4. Added new `config` and `public` fields on companies.

---

{{< link-heading "h4" "16-10-2018" >}}

1. Added new optional pagination type “cursor”.
    - To use this pagination type specify `?pagination=cursor` on a listing endpoint. For optimal performance only sort by `created` or `id`.

---

{{< link-heading "h4" "09-10-2018" >}}

1. Modified the admin user view endpoint to allow changes to be made on the `email` and `mobile` fields:
    - Setting a non existent email/mobile will result in that email/mobile getting created, a confirmation sms/email getting sent and the email/mobile getting marked as `"primary": true`
    - Using an email/mobile that already exists will simply set that email/mobile as primary.
2. Improved the way available balances are stored and calculated. This will result in performance improvements on transactions, accounts and aggregation endpoints like the totals/overview.

---

{{< link-heading "h4" "13-09-2018" >}}

1. Added views for users to see requirements, fees, and limits related to group tiers.
2. Added a filter on the user group tier view to the user’s active tier:
    - `active`: True (shows the user’s active tier)
3. Removed the `identifier`, `enabled` and `active` fields from the user object and user lists.
4. Removed the old “single address” endpoint found at /3/user/address/.

---

{{< link-heading "h4" "11-09-2018" >}}

1. Fixed admin user endpoint not allowing group updates.
2. Added new account filters to the user list endpoint.
    - `account` : reference of an account.
    - `account__name` : name of an account.
    - `account__label` : label of an account.

---

{{< link-heading "h4" "28-08-2018" >}}

1. Added character limit error messages in several places where they were missing.
2. Made improvements to how primary accounts are selected and filtered.
3. Improved currency codes to be case insensitive across the API.
4. Added an account name filter to the transaction list.

---

{{< link-heading "h4" "21-08-2018" >}}

1. Fixed case sensitive bug with the `group__isnull` filter.
2. Removed the url encoding from the `otpauth_url` on the 2FA endpoint.

---

{{< link-heading "h4" "17-08-2018" >}}

1. Added new CSV export file format for large result sets.
2. Updated the file format of JSON exports to be a simple list of objects.
3. Updated the export file name to include the page and total count values.

---

{{< link-heading "h4" "31-07-2018" >}}

1. Fixed a bug where a group tier fee could not be updated without a currency.

---

{{< link-heading "h4" "26-07-2018" >}}

1. Fixed a bug where the `username` could not be added when null.
    - The username is now read-only, but only after it has been set with a non-null value.
2. Updated services error response format when activating services.
3. Fixed bug where a very large currency divisibility could be set in the API.
    - The divisibility has been restricted to 18 decimal places now.

---

{{< link-heading "h4" "19-07-2018" >}}

1. Added a new `name` filter field to the admin group listing endpoint.

---

{{< link-heading "h4" "17-07-2018" >}}

1. Added a custom transaction id field on transaction create endpoints.
    - The id field has also been updated to a uuid format (the same as user IDs).
2. Updated Rehive 500 errors to return a JSON formatted error response rather than an HTML page.
3. Added new `mobile` fields to some endpoints to eventually replace the existing `mobile_number` field.
4. Added `id` as a field to the company endpoints.

---

{{< link-heading "h4" "10-07-2018" >}}

1. Added new `verification` object to user info endpoints.
    - This includes two fields that indicate whether the user’s email or mobile number have been verified by the user.
2. Added a missing `archived` field to the transaction large result set.
3. Fixed date format on the admin address endpoint.
4. Added a new “multi address” endpoint for users. This will allow more than one address per user.
    - The new endpoint is `/3/user/addresses/`.
    - Viewing or deleting a specific address can be done via: `/3/user/addresses/{id}/`
    - The old `/3/user/address/` endpoint will be deprecated in favor of the above endpoint. See the deprecation timeline for details.
5. Fixed some bugs on email verification.
    - Previously there were problems with “verification resend” if a user had more than one email that was unverified and tried to resend a verification email for the non primary email address.

---

{{< link-heading "h4" "28-06-2018" >}}

1. Fixed 500 error on group tier objects in certain circumstances.
2. Fixed bug where admin update on a user address did not save the updated status value.
3. Removed email/mobile verification requirement for admin endpoint access.
4. Fixed a subtype check and allow blank subtypes to be passed in tier fee request data.

---

{{< link-heading "h4" "08-6-2018" >}}

1. Added the `archive` framework.
    - Resources will now have an additional `archived` field that can be used to make a field read_only as well invisible to end users.
    -The archive status can be used as a soft delete. If a full purge is required a HTTP DELETE should be performed. Some resources are required to be archived before they can be purged.
    - When archiving a parent resource with children/dependent resources the child resources will also be archived. Eg. archiving a currency will result in all related transactions getting archived as well. Unarchiving the parent element will also cascade down to its children.
2. Added dates to resources where they were missing.
    - All relevant resources will now include a created and updated field in the API.
    - The format of the field will be consistent with the rest of the API (eg. microsecond timestamp)
3. Improved performance of large queries and updated the rendering of listing pages. Also, improved the performance of some complex fields used in the API.
4. Added new range filters for the `reference` field on transactions. (__lt, __lte, __gt, __gte)
5. Added beta version of large result set functionality for the transaction lists.
    - Will use the same filters as the normal transaction listing.
    - Will generate up to 10000 records in a single downloadable file.
    - Will be processed asynchronously and provide a means to check the tasks progress.
    - If the number of records exceeds the page_size specified, additional page “chunks” will be created with the rest of the results.

---

{{< link-heading "h4" "24-05-2018" >}}

1. Updated fee calculations to stack if multiple fees for the same transaction type, subtype, and currency are created.
2. Added description field to fees.
3. Removed 1 fee per currency/tx_type limit

---

{{< link-heading "h4" "15-05-2018" >}}

1. Changed the default password reset, password set and email verification URLs to direct to the main Rehive website instead of the dashboard.
    - This change will not impact any custom URLs.
2. Fixed a bug where checking tier requirements for user address and bank account results in a server error.

---

{{< link-heading "h4" "03-05-2018" >}}

1. Added new `user` filter on the admin user list.
    - This field can be used to filter by any of the identifier fields (id, email, mobile_number, username).
2. Fixed a bug when deleting tiers. In the past, trying to delete a higher tier occasionally caused an error saying the requirement is required in lower tiers. This interaction with lower tiers was undesired.
3. Update the user `id`/`identifier` field to allow it to be set in the admin user create endpoint.
    -This means that users can be created with a custom id if the request is made via the admin user create endpoint. Custom user `id`s cannot be changed later and are a static identifier for the user.
4. Fixed a bug in "admin user create" where the mobile number was not getting validated or cleaned properly, resulting in incorrectly formatted data.

---

{{< link-heading "h4" "26-04-2018" >}}

1. Added new `username` field to the user resource. This field is a unique identifier that can be set on user registration or create. It can be used as a recipient identifier for transfers as well (but it must already exist in the database).  It has the following limitations:
    - It may only contain lowercase letters, digits and @/./+/-/_. characters.
    - It must be unique across the whole company.
2. Added `updated` filters to the transaction listings and totals endpoints.
    - Filtering on `updated` can be done with `__gt`, `__gte`, `__lt`, `__lte`. This functions the same as the `created` filtering.
3. Fixed a bug in the idempotency feature where a race condition could occur and result in non idempotent requests.

---

{{< link-heading "h4" "13-04-2018" >}}

1. Added new `enabled` field on the user object.
    - This field will replace the `active` field in future. See the deprecation timeline for more on this.

---

{{< link-heading "h4" "12-04-2018" >}}

1. Added new `updated` and `created` fields to the user profile and list endpoints (admin and user sections).
    - The `created` field will replace the `date_joined` field. See the deprecation timeline for more on this.
2. Added new filters for `updated` and `created` on the user listing pages.

---

{{< link-heading "h4" "27-03-2018" >}}

1. Expose permission requirements for admin endpoints in the OPTIONS request for that endpoint.
    - When adding permissions to a group or user, the OPTIONS request on the endpoint will now expose the possible permissions that can be assigned.

---

{{< link-heading "h4" "15-03-2018" >}}

1. Removed the old https://rehive.com/api/3/.
    -Can now only access the API via https://api.rehive.com/3/. (as per the Rehive deprecation timeline).
2. Removed the active currency support when creating transactions.
    - When creating transactions a currency should always be included.
3. Fixed issue where trying to  create a user in the admin group via the admin API would throw an error.
4. Fixed a minor issue where webhooks would try 13 times but not get marked as failed.
    - Webhooks will only retry 11 times now (12 tries in total) and will be marked as failed (with a timestamp) after the 12th attempt.

---

{{< link-heading "h4" "01-03-2018" >}}

1. Fixed an error that occurred when adding a limit with no value.
2. Fixed and error that occurred when trying to add a currency that already exists to an account.
3. Update the KYC field on user objects.
    - The field can now be updated by admin users.
    - The field now only contains a status and updated date.
    - The field now has no automated status transitioning.

---

{{< link-heading "h4" "27-02-2018" >}}

1. An email address or mobile number is no longer required when creating a user via the admin api endpoint.
2. Fixed a bug where updating a transaction subtype with the same name fails.
3. Updated admin user list api to exclude the user permission and settings data.
    - These are now only shown when explicitly viewing a user’s information.
4. Added a group__isnull filter to the admin transaction list api endpoint.
    -This will filter based on users that are assigned to groups, or not.

---

{{< link-heading "h4" "20-02-2018" >}}

1. Added an event for setting user password on email sign up.
2. Added user group filtering where filtering by user data is available.

---

{{< link-heading "h4" "08-02-2018" >}}

1. Removed `confirm_on_create` from all transaction create endpoints.
2. Added new API base URL.
    - Old URL: https://rehive.com/api/3/
    - New URL: https://api.rehive.com/3/
3. Fixed a bug that was causing an internal error when a fee was created with a percentage value.

---

{{< link-heading "h4" "06-02-2018" >}}

1. The metadata field has been updated to be more consistent across Rehive. The following rules now apply to the metadata field when it is included in an API request:
    - Must be valid JSON.
    - Must be a valid JSON object or null value. An empty object is permitted. String or list values are not permitted.
2. Fixed a bug where trying to match a user’s tier requirements for address and bank account results in an internal server error if the user has no address or bank account.

---

{{< link-heading "h4" "30-01-2018" >}}

1. Added batch create functionality for transactions.
    - Multiple transactions can be created in a single POST to the `/api/3/transactions/` endpoint. All transactions are processed as one atomic batch. If one transaction fails, all the transactions will fail.
2. Added a `fee` field to all admin transaction create endpoints (this includes the batch endpoint above).
    -The `fee` field can be populated with a list of custom fees that will be attached to a given transaction.
3. Added `fee` field to all view transaction endpoints (not listing endpoints).
    - This field contains a list of all fees that were attached to a transaction (both internal fees and external ones added by the  functionality described above).
4. Updated all transaction create/update endpoints to no longer function asynchronously.
    - Transactions are now processed within the request/response cycle and will return the latest state to the client when processing is complete. This allows for simpler API client implementations.

---

{{< link-heading "h4" "18-01-2018" >}}

1. Replaced permission groups with general “groups”.
    -All permissions, tiers, limits and requirements now fall under groups.
2. Added the ability to select default groups.
    - Default groups will be attached to all new users on registration.
3. Added the ability to select public groups.
    -These groups can be selected on registration by all users.
4. Added automated migrations so that all existing companies have a “user” group to which their non admin/service users will be attached.
5. Added new account configurations. Account configurations can be used to define account presets for specific user groups. Account configurations allows for very specific control of:
    - What accounts a user within a  group can have.
    - What accounts a user within a group gets automatically on registration.
    - What currencies an account can activate.
6. Added automated migrations so that all existing companies have a “default” account configuration attached to their “user” group.
7. Removed switches and replaced with the concept of “settings”.
    - Settings are additional configurations that can be attached to companies, groups, users, accounts and tiers.

---

{{< link-heading "h4" "05-01-2018" >}}

1. Fixed bug where `terms_and_conditions` were required on service deactivation
2. Added an `account` filter to the admin user list.

---

{{< link-heading "h4" "28-12-2017" >}}

1. Updated all password fields to have a max length of 128.
2. In preparation for the public service registry/marketplace added new fields to the service object:
    - `public`
    - `verified`
    - `management_url`
    - `terms_and_conditions_url`
    - `website_url`
    - `tags`
3. Updated the admin user listing to include a new “service” filter that can be used to filters out users that are linked to a specific service.

---

{{< link-heading "h4" "12-12-2017" >}}

1. Added an ID to each webhook task.
    - This ID is attached to the webhook data on each webhook request.
2. Added new request logging and API endpoints to access request logs.
3. Updated authentication token creation to have an optional duration field on the standard user auth endpoint as well as the admin endpoint.
4. Added create `__gte` (>=) and `__lte` (<=)  filters to the transaction listing endpoints.
5. Added currency filters on the accounts listing endpoint.
6. Added permissions to services.
    - Also updated the service activation to create a service user, with the minimum permissions required, and source tokens from that user.
7. Fixed a bug where trying to remove a company owner from a permission group would fail due to the removal not checking the group name properly.
8. Added `account_tokens__token__currency__code` filter to account API endpoints
