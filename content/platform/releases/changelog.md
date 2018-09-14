---
title: Changelog
weight: 1
---

Summary of additions and changes to the Rehive platform. Breaking changes or
removals will be indicated ahead of time in the deprecation timeline.

---

#### 13-09-2018

1. Added views for users to see requirements, fees and limits related to group tiers.
2. Added a filter on the user group tier view to the user’s active tier:
    - `active`: True (shows the user’s active tier)
3. Removed the `identifier`, `enabled` and `active` fields from the user object and user lists.
4. Removed the old “single address” endpoint found at /3/user/address/.

---

#### 11-09-2018

1. Fixed admin user endpoint not allowing group updates.
2. Added new account filters to the user list endpoint.
    - `account` : reference of an account.
    - `account__name` : name of an account.
    - `account__label` : label of an account.

---

#### 28-08-2018

1. Added character limit error messages in several places where they were missing.
2. Made improvements to how primary accounts are selected and filtered.
3. Improved currency codes to be case insensitive across the API.
4. Added an account name filter to the transaction list.

---

#### 21-08-2018

1. Fixed case sensitive bug with the `group__isnull` filter.
2. Removed the url encoding from the `otpauth_url` on the 2fa endpoint.

---

#### 17-08-2018

1. Added new CSV export file format for large result sets.
2. Updated the file format of JSON exports to be a simple list of objects.
3. Updated the export file name to include the page and total count values.

---

#### 31-07-2018

1. Fixed a bug where a group tier fee could not be updated without a currency.

---

#### 26-07-2018

1. Fixed a bug where the `username` could not be added when null.
    - The username is now read-only, but only after it has been set with a non-null value.
2. Updated services error response format when activating services.
3. Fixed bug where a very large currency divisibility could be set in the API.
    - The divisibility has been restricted to 18 decimal places now.

---

#### 19-07-2018

1. Added a new `name` filter field to the admin group listing endpoint.

---

#### 7-07-2018

1. Added a custom transaction id field on transaction create endpoints.
    - The id field has also been updated to a uuid format (the same as user IDs).
2. Updated Rehive 500 errors to return a JSON formatted error response rather than an HTML page.
3. Added new `mobile` fields to some endpoints to eventually replace the existing `mobile_number` field.
4. Added `id` as a field to the company endpoints.

---

#### 10-07-2018

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

#### 28-06-2018

1. Fixed 500 error on group tier objects in certain circumstances.
2. Fixed bug where admin update on a user address did not save the updated status value.
3. Removed email/mobile verification requirement for admin endpoint access.
4. Fixed a subtype check and allow blank subtypes to be passed in tier fee request data.

---

#### 08-06-2018

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

#### 24-05-2018

1. Updated fee calculations to stack if multiple fees for the same transaction type, subtype, and currency are created.
2. Added description field to fees.
3. Removed 1 fee per currency/tx_type limit

---

#### 15-05-2018

1. Changed the default password reset, password set and email verification URLs to direct to the main Rehive website instead of the dashboard.
    - This change will not impact any custom URLs.
2. Fixed a bug where checking tier requirements for user address and bank account results in a server error.

---

#### 03-05-2018

1. Added new `user` filter on the admin user list.
    - This field can be used to filter by any of the identifier fields (id, email, mobile_number, username).
2. Fixed a bug when deleting tiers. In the past, trying to delete a higher tier occasionally caused an error saying the requirement is required in lower tiers. This interaction with lower tiers was undesired.
3. Update the user `id`/`identifier` field to allow it to be set in the admin user create endpoint.
    -This means that users can be created with a custom id if the request is made via the admin user create endpoint. Custom user `id`s cannot be changed later and are a static identifier for the user.
4. Fixed a bug in "admin user create" where the mobile number was not getting validated or cleaned properly, resulting in incorrectly formatted data.

---

#### 26-04-2018

1. Added new `username` field to the user resource. This field is a unique identifier that can be set on user registration or create. It can be used as a recipient identifier for transfers as well (but it must already exist in the database).  It has the following limitations:
    - It may only contain lowercase letters, digits and @/./+/-/_. characters.
    - It must be unique across the whole company.
2. Added `updated` filters to the transaction listings and totals endpoints.
    - Filtering on `updated` can be done with `__gt`, `__gte`, `__lt`, `__lte`. This functions the same as the `created` filtering.
3. Fixed a bug in the idempotency feature where a race condition could occur and result in non idempotent requests.

---

#### 13-04-2018

1. Added new `enabled` field on the user object.
    - This field will replace the `active` field in future. See the deprecation timeline for more on this.

---

#### 12-04-2018

1. Added new `updated` and `created` fields to the user profile and list endpoints (admin and user sections).
    - The `created` field will replace the `date_joined` field. See the deprecation timeline for more on this.
2. Added new filters for `updated` and `created` on the user listing pages.

---

#### 27-03-2018

1. Expose permission requirements for admin endpoints in the OPTIONS request for that endpoint.
    - When adding permissions to a group or user, the OPTIONS request on the endpoint will now expose the possible permissions that can be assigned.

---

#### 15-03-2018

1. Removed the old https://rehive.com/api/3/.
    -Can now only access the API via https://api.rehive.com/3/. (as per the Rehive deprecation timeline).
2. Removed the active currency support when creating transactions.
    - When creating transactions a currency should always be included.
3. Fixed issue where trying to  create a user in the admin group via the admin API would throw an error.
4. Fixed a minor issue where webhooks would try 13 times but not get marked as failed.
    - Webhooks will only retry 11 times now (12 tries in total) and will be marked as failed (with a timestamp) after the 12th attempt.

---

#### 01-03-2018

1. Fixed an error that occurred when adding a limit with no value.
2. Fixed and error that occurred when trying to add a currency that already exists to an account.
3. Update the KYC field on user objects.
    - The field can now be updated by admin users.
    - The field now only contains a status and updated date.
    - The field now has no automated status transitioning.

---

#### Changelog - 27-02-2018

1. An email address or mobile number is no longer required when creating a user via the admin api endpoint.
2. Fixed a bug where updating a transaction subtype with the same name fails.
3. Updated admin user list api to exclude the user permission and settings data.
    - These are now only shown when explicitly viewing a user’s information.
4. Added a group__isnull filter to the admin transaction list api endpoint.
    -This will filter based on users that are assigned to groups, or not.

---

#### 20-02-2018

1. Added an event for setting user password on email sign up.
2. Added user group filtering where filtering by user data is available.

---

#### 08-02-2018

1. Removed `confirm_on_create` from all transaction create endpoints.
2. Added new API base URL.
    - Old URL: https://rehive.com/api/3/
    - New URL: https://api.rehive.com/3/
3. Fixed a bug that was causing an internal error when a fee was created with a percentage value.

---

#### 06-02-2018

1. The metadata field has been updated to be more consistent across Rehive. The following rules now apply to the metadata field when it is included in an API request:
    - Must be valid JSON.
    - Must be a valid JSON object or null value. An empty object is permitted. String or list values are not permitted.
2. Fixed a bug where trying to match a user’s tier requirements for address and bank account results in an internal server error if the user has no address or bank account.

---

#### 30-01-2018

1. Added batch create functionality for transactions.
    - Multiple transactions can be created in a single POST to the `/api/3/transactions/` endpoint. All transactions are processed as one atomic batch. If one transaction fails, all the transactions will fail.
2. Added a `fee` field to all admin transaction create endpoints (this includes the batch endpoint above).
    -The `fee` field can be populated with a list of custom fees that will be attached to a given transaction.
3. Added `fee` field to all view transaction endpoints (not listing endpoints).
    - This field contains a list of all fees that were attached to a transaction (both internal fees and external ones added by the  functionality described above).
4. Updated all transaction create/update endpoints to no longer function asynchronously.
    - Transactions are now processed within the request/response cycle and will return the latest state to the client when processing is complete. This allows for simpler API client implementations.

---

#### 18-01-2018

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

#### 05-01-2018

1. Fixed bug where `terms_and_conditions` were required on service deactivation
2. Added an `account` filter to the admin user list.

---

#### 28-12-2017

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

#### 12-12-2017

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
