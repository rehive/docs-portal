---
date: 2018-09-17T15:21:22+02:00
title: Changelog
description: Platform changelog.
weight: 1
---

Summary of additions and changes to the Rehive platform. Breaking changes or removals will be indicated ahead of time in the deprecation timeline.


---

{{< link-heading "h5" "2022-08-25" >}}

- Added validation to to prevent users from creating an unlimited number of certain resources. This applies to emails, mobiles, addresses, wallet accounts, crypto accounts, bank accounts and devices.
- Optimized the handling of timezones when calculating which metrics needs to run at a given time.
- Added the `management_url` to the editable fields on the Service resource.
- Fixed a bug with webhook expression evaluation that made it impssoible to evaluate an expression that included a condition on a list.
- Added new throttling on MFA device creation. Requests to the MFA device create endpoint(s) are now restricted to no more than 10 requests an hour (per user).
- Added new throttling on MFA SMS delivery. Requests to the MFA SMS delivery endpoint(s) are now restricted to no more than 10 requests an hour (per user).
- Updated the SMS messages for SMS OTPs to include the company information and user name if available.

---

{{< link-heading "h5" "2022-08-03" >}}

- Fixed an issue on company link endpoints and their permission checks that resulted in 500 errors.
- Fixed a bug on subtype partner validation that resulted in the incorrect error text.
- Fixed a bug in subtype partner validation where it was trying to do validation on `null` inputs.
- Fixed filters on the admin webhook list endpoint: there was a regression that caused these filters to no longer work.
- Added a new `owner` field to the `user` resource to indicate whether they are the owner of a company.
- Added a new `owner` field to the `company` resource to indicate which user is the owner of that company.

---

{{< link-heading "h5" "2022-07-06" >}}

- Added inclusive fees on `debit` transactions and updated the transaction builder to correctly adjust amounts and subsequent transactions when `inclusive` is specified on a transaction.
- Added an `index` field to the transaction resource, this contains the transactions position in it's transaction collection.
- Added a new `webhook__url` filter on the webhook tasks endpoint.
- Fixed a bug in decimal validation handling that caused a 500 error on certain integer inputs.
- Addressed an issue with related transaction discovery on transaction updates that resulted in fee transactions not transitioning at the same time as their parent.

---

{{< link-heading "h5" "2022-06-02" >}}

1. Subtypes can now be filtered based on whether they have a `partner` via the `partner__isnull` filter field.
2. Adding a `partner` to a subtype with the incorrect `tx_type` will now be prevented. Additionally all errors related to subtype partners have been updated to provide more clarity.
3. The subtype partner system has been updated to be use the subtype as the primary resource rather than a separate `subtype-partner` resource, which has been removed.
    - The partner can be modified/added using the field `partner`, which accepts an integer value.

---

{{< link-heading "h5" "2022-05-31" >}}

1. Improved the consistency of how metadata is populated on new objects. The `metadata` field will now always default to `null`.
2. Adjusted the transaction-collection update endpoint to support updating the `status` if there is no clash on member transaction statuses. 
    - ie, disallow updates to `failed` when there are already `complete` transactions, but allow updates to `failed` if there are no `complete` member transactions.
3. Updated the account merge functionality (when temporary user transfers are merged into new users) to only try and complete transfers if they are on non-managed assets.

---

{{< link-heading "h5" "2022-05-16" >}}

1. Updated most choice based fields to correctly output the list of choices in the Open API schema.
2. Switched all extensions to the following 3 types: `public`, `private` and `system` (removed `extension`).
3. Updated file handling on document and export files:
    - Going forward, the URLs for these files will now expire after 1 hour and a new URL will have to be retreived to continue to access the files.
4. Fixed a bug in the "account currency" export where it was using `account_asset` instead of `account_currency` for the `resource` value.

---

{{< link-heading "h5" "2022-05-14" >}}

1. Fixed a bug in `metadata` on resource creation where proper JSON size and merge validation was not performed.
2. Added new security definition description to the Open API schema.
3. Added new emprty `security` rules to to the Opern API schema on endpoints that do not require authentication.
4. Added caching to the Open API schema to speed up load times.

---

{{< link-heading "h5" "2022-04-26" >}}

1. Added support for companies to add their own `private` type extensions via the `/3/admin/services/` endpoint. These services are only accessible by the company that created them. The benefits of using the `services` resources for extension managment are:
    - Activation/deactivation will be handled like `public` Rehive services and each service activation will automatically create a `service` user thus reducing the manual effort required to do this yourself.
    - The `service` users will be automatically managed so that `permissions` set on the service will be applied to the user.
    - The `service` will be accesible in the `services` list so service discovery can be automated in your applications.
    - Future "built-in" functionality will become available immediately to your services when added: key rotation, service managed webhooks and more.

---

{{< link-heading "h5" "2022-04-22" >}}

1. Fixed a bug with mobile validation on the admin create user endpoint. Previously this endpoint failed to validate that a mobile number was part of allowed company nationalities.

---

{{< link-heading "h5" "2022-04-20" >}}

1. Added new system metrics. All new companies will now have three default metrics that cannot be removed or modified: `user_count`, `user_active_count`, and `transaction_count`.
2. Added new admin endpoints for password reset and user deactivate.

---

{{< link-heading "h5" "2022-04-13" >}}

1. Improved the error messages for throttling to include a custom reason based on the specific throttle that failed.
    - Throttling error with an explicit reason be formatted as `Request was throttled: {reason}. Expected available in {time}.`.
    - For generic throttling error will still be outputted as `Request was throttled. Expected available in {time}.`.

---

{{< link-heading "h5" "2022-04-07" >}}

1. Added a new `pending` option to the company `status` field. The `status` field will nopw automatically be set to `pending` on production mode companies. A Rehive admin will change it to `active` once a company has been reviewed and approved for production.
2. Fixed a bug that resulted in company links not getting carried over to the billing service when included on a company create request.

---

{{< link-heading "h5" "2022-03-22" >}}

1. Fixed a bug in admin account updates that resulted in the user performing the update getting incorrectly attached to the account.
2. Updated all platform webhook events to originate from a single IP: 34.91.230.165.
3. Updated the admin auth register endpoint to support the same additional fields as the anonymous auth register endpoint: `language`, `timezone`, `gender`, `title`, `marital_status`, and `id_number`.

---

{{< link-heading "h5" "2022-03-11" >}}

1. Fixed a bug in account definition synchronization: When creating a new account definition the system would previously attempt to assign all accounts with the same name to that account definition but it should have instead been ignoring all accounts that are not attached to a user (ie. standalone account should not be linked to accountd definitions).

---

{{< link-heading "h5" "2022-03-01" >}}

1. Fixed a bug where image sizes were handled incorrectly when stripping EXIF data, which resulted in 500 errors on some file uploads.

---

{{< link-heading "h5" "2022-02-18" >}}

1. Fixed a bug in request body parsing in request logging that resulted in a 500 errors if the body contained invalid JSON on requests where the body is normally not parsed (GET methods, not found errors, authentication errors etc.).

---

{{< link-heading "h5" "2022-02-17" >}}

1. Updated all upload fields to strip out all EXIF data from image uploads. This will helpe ensure users do not mistakenly expose sensitive information about themselves via image uploads eg. profile pictures, company logos and icons, and documents.

---

{{< link-heading "h5" "2022-02-09" >}}

1. Updated the registration endpoints (company and user registration) to support the following fields: `language`, `timezone`, `gender`, `title`, `marital_status`, and `id_number`.
2. Fixed a bug in file uploads where incorrecatly formatted form data resulted in 500 errors. These errors will now correctly throw a 400 error.

---

{{< link-heading "h5" "2022-02-03" >}}

1. Added new webhook events for `company.link.create` and `company.link.update`.

---

{{< link-heading "h5" "2022-02-02" >}}

1. Added new swagger help text in the swagger UI description.
2. Added a new `subtypes` field to the currencies resource on endpoints that retrieve a single account. This field returns a list of subtypes that the currency may use (subtypes are excluded from this list bu company, group, tier, account asset and user subtype settings).

---

{{< link-heading "h5" "2022-01-28" >}}

1. Added new `enabled` boolean to allow webhooks to be turned on and off.
2. Added new company linking functionality that will be used for linking test companies to production companies.

---

{{< link-heading "h5" "2022-01-14" >}}

1. Added a new `metadata` field on accounts.
2. Changed account handling to prevent the editing of the `user` field on existing accounts. This `user` field can only be set on create.

---

{{< link-heading "h5" "2022-01-11" >}}

1. Fixed a bug on metrics listings where on new metrics that were still getting processed a 500 error could occur.
2. Fixed a bug with the `slug__in` filter not working and triggering a 500 error on metric listings.
3. Added new `account.create` and `account.update` webhook events to facilitate with managed currency flows.

---

{{< link-heading "h5" "2021-11-30" >}}

1. Added admin authenticated login and register endpoints. These endpoints should be used by machine users and services that require access to login and register but should not be impacted by user throttles, rate limiting, bot protection, and other rules that apply to unauthenticated (anonymous) users.
    - `/3/admin/auth/login/` - An admin token must be included in the `Authorization` header.
    - `/3/admin/auth/register/` - An admin token must be included in the `Authorization` header.

---

{{< link-heading "h5" "2021-11-26" >}}

1. Fixed a bug in idempotency handling where requests were not getting treated as unique through a combination of the `key`, `method` and URL and instead were unique  based on only the `key`.

---

{{< link-heading "h5" "2021-11-16" >}}

1. Fixed a bug where archived accounts could result in an odd "duplicate" validation error when creating transactions.
2. Improved resource listing and filtering performance on some resources: challenges, authentication rules.

---

{{< link-heading "h5" "2021-11-05" >}}

1. Final removal of the `kyc` field on the user resource (as per the deprecation timeline).
2. Final removal of the `email` and `mobile` fields on the partner resource within a transaction (as per the deprecation timeline).
3. Added a new `archived` filter on the admin account list endpoint.

---

{{< link-heading "h5" "2021-10-27" >}}

1. Increased the size of the webhook condition.
2. Fixed a bug in TOTP MFA when generating OTP URLs using a user that has no email address.
3. Added a `metadata` field to all bank account resources.

---

{{< link-heading "h5" "2021-10-13" >}}

1. Added a new wallet-accounts resource and added endpoints for accessing and managing them.
2. Fixed a bug in schema generation that resulted in duplicate operation IDs in the swagger schema.

---

{{< link-heading "h5" "2021-09-27" >}}

1. Added new endpoints and fee functionality for attaching fees to groups (in addition to the existing account currency and group tier fees)
2. Added fee caching and building that uses a "named" fee hierarchy that applies to group fees as well as the original 2 types of fees.

---

{{< link-heading "h5" "2021-09-22" >}}

1. Migrated all platform file storage to a Google Storage bucket (files will no longer be sources from an Amazon S3 bucket).

---

{{< link-heading "h5" "2021-09-14" >}}

1. Added new user metrics: `user_count` and `user_active_count`.
2. Added new metric filters: `slug` and `slug__in`.
3. Added new handling of `section` logic for metrics that should only work on certain sections.
4. Added new managed currencies:
    - Currencies can now include an optional `manager` field that can be populated with a user.
    - Currencies that have an attached manager can only be executed (to `complete` of `failed`) by the manager.
    - These currencies can be used when a 3rd party integration/service should be repsosible for a currencies execution.

---

{{< link-heading "h5" "2021-08-03" >}}

1. Added new document categories: `proof_of_identity`, `proof_of_income`.
2. Added new document types:  `payslip`, `employment letter` and `financial_statement`.
3. Added new gender, title, `marital status`, `central_bank_number`, `fathers_name`, `mothers_name` to the user resources.
4. Updated tier requirement to handle new document types, categories and user resource fields.

---

{{< link-heading "h5" "2021-06-30" >}}

1. Fixed a bug that resulted in some limits sometimes not getting correctly included in transaction checks (when multiple limits were configured for the same type, account and currency).
2. Fixed a bug that resulted in a 500 error instead of a 403 error when a user was logged out mid-session (and the user has multi-factor authentication enabled). 

---

{{< link-heading "h5" "2021-06-22" >}}

1. Performance improvements on the transaction listing endpoints and cursor pagination.
2. Performance improvements on the request listing endpoints and cursor pagination.
3. Fixes for the request logging to prevent 500 error on some types of malformed JSON.

---

{{< link-heading "h5" "2021-06-10" >}}

1. Added a new API interface for handling multi-factor authentication via a new `authenticators` resource.
    - Authenticators are now added/listed on the `/3/auth/mfa/authenticators/` endpoint.
    - Authenticators are verified using the same `/3/auth/mfa/verify/` endpoint but an additional `authenticator` field must be specified to verify a specific authenticator.
    - Authenticator `token`s can be delivered (if supported by the authenticator) via the `/3/auth/mfa/deliver/` endpoint. An `authenticator` must be specified.
    - There are three types of authenticators: `static`, `totp`, and `sms`.
    - The new `static` type can be used as MFA recovery codes. It generates a list of "single user" tokens that can be used instead of another authenticator.
3. Updated existing MFA devices to function within the new `authenticator` resource.
    - This change is backwards compatible although the old endpoints and MFA functionality will be deprecated and removed according to the deprecation timeline.
5. Added a new `authenticator-rule` resource that can be used to define how MFA works on a company.
    - Rules can be defined to trigger on `authentication` or `authorization`.
    - Rules can be configured to trigger `permanent`, `durable` or `ephemeral` challenges.
    - Rules can be configured on specific `group`s.
    - Rules can be configured to only trigger on a specific `session_age`.
7. Added a new `authenticator-challenge` resource that represents individual MFA challenges to a user session.
    - Challenges are thrown as errors on requests and included in the `data` of the response under a `challenge` property.
    - Challenges are returned on login (authentication) endpoints under a `challenge` property.
    - Challenges can be durable or ephemeral. Ephemeral challenges are single use challenges that can only be used once for access to a specific permission level resource.
    - Challenges are verfiied via `/3/auth/mfa/verify/` but an additional `challenge` field must be specified to verify a specific challenge.
    - Challenge `token`s can be delivered (if supported by the challenge) via the `/3/auth/mfa/deliver/` endpoint. An `challenge` must be specified."
    - Ephemeral challenges, once verified, must be included in the `Verified-Challenge` header of the follow up request to access the endpoint that originally triggered the challenge.

---

{{< link-heading "h5" "2021-05-24" >}}

1. Added new `recon` boolean field on account and account definitions.
    - This field can be used to identify accounts that have record external account information and should not be used for internal totals.
2. Added new filters on transactions and accounts for the `recon` field.
3. Updated currency overviews to only give an overview on accounts with a `recon` value of `false`.

---

{{< link-heading "h5" "2021-05-18" >}}

1. Removed the `immutable_transactions` field in company settings as per the deprecation timeline.
2. Removed support for mutable failed/complete transactions as per the deprecation timeline.

---

{{< link-heading "h5" "2021-04-14" >}}

1. Added two new webhook events for currency resources:
    - `currency.create`
    - `currency.update`

---

{{< link-heading "h5" "2021-04-13" >}}

1. Removed the POST `/auth/tokens/verify/` endpoint as per the deprecation timeline.
2. Removed the source/destination property on transactions as per the deprecation timeline.
3. Improved the performance of export generation.
4. Fixed a bug in metrics where results were not generated correctly for pending transaction resources.

---

{{< link-heading "h5" "2021-03-30" >}}

1. Added new "legal terms" to the platform. Legal terms are used to store platform dictated and company terms and conditions and other legal documents users should accept. These ar available on the following endpoints:
    - `/public/legal-terms/` - Public endpointfor getting terms that apply globally (platform dictated).
    - `/public/companies/<id>/legal-terms/` - Public endpoint for getting the terms that apply to a specific public company.
    - `/admin/legal-terms/` - Admin endpoint for adding and viewing all terms on the company (including platform dicated ones).
    - `/admin/users/<id>/legal-terms/` - Admin view of what terms a user has accepted (and not accepted).
2. Added new `legal_term_versions` field on register. This can be used to specify a specific legal terms version as "accepted" on register.

---

{{< link-heading "h5" "2021-03-15" >}}

1. Fixed a bug when changing a users group that resulted in non default accounts getting added to the user.

---

{{< link-heading "h5" "2021-03-11" >}}

1. Added new generic document types for each document category.
2. Added new `identifier` field on partner objects. 
    - This field will contain the "identifier" used by a user when creating a transaction.
    - For instance, if a user transfers to `test@rehive.com`, then the `identifier` field will contain `test@rehive.com`.
    - This field will replace the existing `email` and `mobile` fields as these fields currently expose excess user data. Check the deprecation timeline for details.

---

{{< link-heading "h5" "2021-03-03" >}}

1. Updated the account synchronization functionality on account definition changes to eliminate some edge cases in processing.
2. Removed DELETE on many resources. These resources are no considered "audited" resources and therefor do not support deletion.
    - These resources include: Users, Groups, Accounts, Account, Currencies, Transactions, Account Definitions (and Account Definition Groups and Currencies).
    - Archiving of these resources is now the only option.
    - This change was made in order to comply with new audit requirements and also deal with the current technical space and scale we operate within.
3. Updated to a new metrics format where a `type` is specified rather than a resource, expression and function.

---

{{< link-heading "h5" "2021-02-25" >}}

1. Added new immutable transaction functionality that can be turned on with the `immutable_transactions` field on the company object. This boolean is temporary and will be phased out in favor of force immutability on all companies.
2. Improved transfer claims on newly registered users to better handle events and retransition the transactions correctly.
3. Added a new `executed` date on transaction resources. This contains the date a transaction transitioned from `pending` to `complete` or `failed`.

---

{{< link-heading "h5" "2021-02-11" >}}

1. Updated the metric points on metric resources to contain an additional "unresolved point" that contains rolling data for the current day (interval).
    - The unresolved point is prepended to the results and contains the current `date` and a `value`. The `id` will be `null` as this point is dynamically calculated and is not stored in the database.
    - The unresolved point will replace the latest point if the `interval` is set to `week`, `month`, `year` and it is not the first day of the interval.
    - The unresolved point will not be included if the `date` filters applied to the endpoint eliminates the current day. Or if the page number/position is not the first page.

---

{{< link-heading "h5" "2021-02-10" >}}

1. Added a new `require_registration` boolean option to the company settings. Defaults to `false`.
    - When set to `true` transactions to/on a user will fail if the user is not registered in the system. This will prevent temporary users from getting created automatically on transfers to unregistered users.
    - This can be used in combination with `require_verficiation` in order to gain more control over how transactions are processed. 
    - We recommend always keeping `require_verficiation` turned on, even when `require_registration` is turned on. This is because the `require_verification` handling prevents users from sending to unverified emails/mobiles belonging to another user.

---

{{< link-heading "h5" "2021-01-29" >}}

1. Added a new `deactivated` boolean to user resources. Users that are deactivated cannot login, authenticate or access any authenticated endpoints.
    - A user can request deactivation via a `POST` to `/auth/deactivate/`.
    - A user will receive an email with an included "deactivation link". The deactivation key can be submitted via a `POST` to `/auth/deactivate/verify/`.
    - Once deactivation is verified, the user will be locked out of their account and their auth tokens will be deleted. The user can still request a password reset.
    - An admin can deactivate (or reactivate) a user by changing the `deactivated` boolean to `true` or `false`.

---

{{< link-heading "h5" "2021-01-19" >}}

1. Fix for a bug where currency was throwing required errors on company level subtype controls.
    
---

{{< link-heading "h5" "2021-01-18" >}}

1. Added new `/admin/transaction-collections/<id>/transactions/` endpoint with `GET` and `POST` methods.
    - This endpoint supports getting a list of transactions belonging to a transaction-collection
    - It also support appending (creating) new transactions to a transaction collection.
2. Removed the old export endpoints. The following endpoints should now be used for all exports:
    - `/exports/`
    - `/exports/<id>/`
    - `/admin/exports/`
    - `/admin/exports/<id>/`

---

{{< link-heading "h5" "2021-01-11" >}}

1. Added new `/admin/subtype-partners/` endpoint
    - This endpoint can be used to define subtypes that can be used together as partners.
    - These rules are enforced when creating transactions and an error will be thrown if they are violated.

---

{{< link-heading "h5" "2020-12-11" >}}

1. Added a new `Idempotent-Replayed: true` header on replayed idempotent responses.
2. Updated transaction collections to support a custom id on creation.
    - The custom `id` must be a valid v4 UUID.
3. Fixed a bug on archiving account definitions that resulted in a failure on syncing children accounts to the new parent state.

---

{{< link-heading "h5" "2020-12-10" >}}

1. Replaced account-configurations with account-definitions. The new account definitions are sharable between groups and will also apply effects retroactively.
    - Account definitions will be linked to multiple groups instead of belonging to a single group.
    - When applying changes to account definitions, these changes will be automatically applied to all related accounts/users and groups as well.
2. Added new account definition selection on all disallowed transaction subtype rules, fees and limits. Setting this field will allow subtypes, limits and fees to be controlled/set on an account definition basis: eg. disallow a subtype for all accounts named `default`.
    - All subtype rules have been modified to support a different CRUD interface (Via the API). Old format subtype rules will be automatically migrated to the new format.
    - All fee and limit changes will remain unchanged except that they now support an additional option.
3. Fixed some issues with the generation of swagger documention. The resulting swagger schema will now pass validation and have no duplicate operation IDs.
4. Updated the cache handling of multiple resources to be performed more efficiently in the background.
5. The `/subtypes/` list will now automatically be filtered by the subtypes available to the user and their group.
6. Added `default_session_duration` as a configurable company setting. Supports values in seconds between 1 and 2678400 (up to 31 days).
7. Added a new service key rotation mechanism that will be rolled out to our services in the coming year.
    
---

{{< link-heading "h5" "2020-10-26" >}}

1. Added a new optional `checks` property to transaction create and update on the admin API. 
    - This field can be used by admins to customize what checks are done when validating a transaction. 
    - The following options are available: `balance`, `verification`, `limits` and `type`.
2. The `checks` property has also been added to the multi transaction and transaction collection endpoints.

---

{{< link-heading "h5" "2020-10-13" >}}

1. Fixed a bug on account and transaction filters that resulted in `0` value `balance` filters getting ignored instead of properly filtered against in the results.

---

{{< link-heading "h5" "2020-09-25" >}}

1. Added filters on auth tokens so that keys can be excluded/included on DELETE as well as GET.

---

{{< link-heading "h5" "2020-09-08" >}}

1. Fixed a performance issue that occurred when creating transactions without specifiying a `user` in the request. Requests that include only an `account` should now perform equally to those that include a `user` in the request data.

---

{{< link-heading "h5" "2020-08-26" >}}


1. Added metric tracking for `transaction` and `user` resources. Metrics can be configured to count/sum a specific data set at midnight every day. The data set can be customized using filters and the time at which the metric updates can be configured by setting an appropriate timezone.
    - `/admin/metrics/`
    - `/admin/metrics/<id>/`
    - `/admin/metrics/<id>/points/`
    - `/metrics/`
    - `/metrics/<id>/`
    - `/metrics/<id>/points/`

---

{{< link-heading "h5" "2020-08-17" >}}

1. Added a new `routing_number` to all address objects.
2. Added a new `branch_address` to all bank account objects.

---

{{< link-heading "h5" "2020-07-17" >}}

1. Updated the `POST` on the `/auth/tokens/` endpoint to require an extra MFA step if the user has MFA enabled.
    - Previously we accepted the current user's MFA status as adequate authentication to perform this action.

---

{{< link-heading "h5" "2020-07-17" >}}

1. Added a new set of endpoints for end users to get permissions associated to a group.
    - Groups list: `/3/groups/{group_name}/permissions/`
    - Group view: `/3/groups/{group_name}/permissions/{permission_id}/`
2. Added missing `name` and `description` field to the fees on deep nested endpoints.
3. Fixed 404 errors on listing pages. They now correctly throw a 404 instead of returning an empty list.
4. Added orderby to the admin documents list:
    - Supported fields are: `created`, `-created`, `updated`, `-updated`, `expires`, `-expires`)
5. Updated `metadata` fields to use JSON-Merge-Patch on updates:
    - This means that the full `metadata` does not have to be sent on PATCH/PUT as the new data will be merged into the existing data.
    - The full spec can be seen here: https://tools.ietf.org/html/rfc7386

---

{{< link-heading "h5" "2020-07-14" >}}

1. Updated the `account` field on transaction create (debit, credit, multi and transaction collections) to support either a `name` or a `reference` as a value. If a name is used, then ensure a `user` is included along with it.

---

{{< link-heading "h5" "2020-07-09" >}}

1. Fixed an issue where trying to delete an email belonging to an archived user resulted in a "Cannot modify archived object" error.

---

{{< link-heading "h5" "2020-06-01" >}}

1. Added a new `name` field to fees. this name may only be lowercase, underscores and numbers and only one fee can exist on a given level per name (ie. there can be one group_tier fee with the name main_fee and one account asset fee with the name main_fee).
2. Updated fee calculation (on transactions) to only retrieve one fee per `name`. This means that if a Group Tier fee is defined AND a Account Asset fee with the same name, then only the Account Asset fee will be applied).

---

{{< link-heading "h5" "2020-05-11" >}}

1. Updated all `disallowed_transaction_subtypes` fields in relevant settings to support an additional list of currencies on which that specific subtype is disabled.

---

{{< link-heading "h5" "2020-04-20" >}}

1. Added new utility methods for deleting authentication tokens
    - `DELETE` on `/auth/tokens/` will now delete all tokens belonging to the authenticated user.
    - `DELETE` on `/admin/users/tokens/` will now delete all tokens in a company. This endpoint works with the filters available on `GET` ie. `/admin/users/tokens/?user=example@rehive.com`.
2. Added new functionality to ensure old idempotent keys are cycled out of the system after 1 week.
3. Added new `/auth/` endpoint for checking whether a user is authenticated via a GET request.
    - The `/auth/tokens/verify/` endpoint will be phased out in favor of the new `/auth/` endpoint.

---

{{< link-heading "h5" "2020-04-14" >}}

1. Added new data based throttling for anonymous auth endpoints.
    - Authentication attempts with identical data will now be throttled regardless of user/IP.
    - This also applies to register, password reset and email/mobile resend.
2. Added new group icon/image.
3. Added new `archived` filter on the admin currency list.

---

{{< link-heading "h5" "2020-04-02" >}}

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

{{< link-heading "h5" "2020-03-26" >}}

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

{{< link-heading "h5" "2020-03-12" >}}

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

{{< link-heading "h5" "2020-02-12" >}}

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

{{< link-heading "h5" "2020-01-29" >}}

1. Added a new `require_transaction_subtype` field to the company object. If this is set to true then subtypes are required in order to create transactions.
2. Added a new `usage_type` field on the subtype resource. This can be used to define three general forms of subtype usage: `single`, `partner`, `null`.

---

{{< link-heading "h5" "2019-10-31" >}}

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

{{< link-heading "h5" "2019-10-16" >}}

1. Added new webhook events:
    - `email.create` triggers after an email address is created.
    - `email.update` triggers after an email address is updated. Includes original email details.
    - `mobile.create` triggers after a mobile number is created.
    - `mobile.update` triggers after a mobile number is updated. Includes original mobile details.

---

{{< link-heading "h5" "2019-09-13" >}}

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

{{< link-heading "h5" "2019-08-13" >}}

1. Fixed a bug where some "nested" resources were throwing 500 errors instead of 404 errors  when the root resources did not exist.
2. Fixed a bug with datetime filters not filtering on the correct precision (milliseconds)
    - This resulted in odd behaviour when a object was inserted within microseconds of a filter's cut off value.
3. Improved the performance of account listings and exports.

---

{{< link-heading "h5" "2019-08-05" >}}

1. Added new account listing exports (admin and user).
    - Supports CSV and JSON formats
2. Added new account listing `reference__contains` filter field.

---

{{< link-heading "h5" "2019-07-03" >}}

1. Added new `disallow_transaction_subtypes` field to all endpoints that supported `settings`. This field should be used to stop a company/group/user/tier/account from creating transactions with selected subtypes. The endpoints this is available on are:
    - `/3/admin/company/settings/`
    - `/3/admin/groups/<id>/settings/`
    - `/3/admin/groups/<id>/tiers/<id>/settings/`
    - `/3/admin/accounts/<reference>/currencies/<code>/settings/`
    - `/3/admin/users/<id>/settings/`
2. Fixed a bug where an incorrectly formatted `query` object would throw 500 errors on the transaction export endpoints.

---

{{< link-heading "h5" "2019-06-28" >}}

1. Updated the URL routes to allow optional closing slashes.
2. Added a new subtypes endpoint for end users (users can see a list of subtypes)
    - `/3/subtypes/` and `/3/subtypes/<id>/`
3. Improved the ranking and partial matching on searches.
4. Fixed bug in the search where search terms including a `+` symbol would yield no results.

---

{{< link-heading "h5" "2019-05-24" >}}

1. Added new `email` parameter to the password set/reset and email verify URL.
2. Added a new `slug` field to the services object.

---

{{< link-heading "h5" "2019-05-17" >}}

1. Added new `network` and `name` fields to crypto accounts.
2. Added `available_balance` to the user info object.

---

{{< link-heading "h5" "2019-05-07" >}}

1. Fixed issues with variable length OTPs on SMS MFA.

---

{{< link-heading "h5" "2019-05-02" >}}

1. Added new `mfa.sms.verify` event that can be used to hook into the multi factor SMS verification message.
    - This can be configured via webhooks.
    - This allows for MFA SMS messages to be customized.

---

{{< link-heading "h5" "2019-04-18" >}}

1. Added new transaction export endpoint for non admin users.
    - Users can now export groups of their own transactions.
    - To view a list of exorts or create one: `/transactions/exports/`
    - To view a single export: `/transactions/exports/<id>/`
2. Removed the old `/admin/transactions/sets/` endpoints.
    - Use the `/admin/transactions/exports/` endpoints instead.

---

{{< link-heading "h5" "2019-04-11" >}}

1. Added new created and updated datetime fields to MFA devices (SMS and TOTP).
    - This can be used in order to see when a user enabled MFA.

---

{{< link-heading "h5" "2019-04-09" >}}

1. Updated accounts to not require a user to be attached to them.
    - The account `user` can be `null` when created.
    - The account` user` can be updated to `null`.
    - The account `user` attribute can be changed to another user.

---

{{< link-heading "h5" "2019-03-28" >}}

1. Renamed "result sets" to "exports".
    - Added replacement URL : `/admin/transactions/exports/`
    - The old URL will be deprecated as per the deprecation timeline.
3. Fixed a minor bug in account creation where deleting and recreating an account configuration (with the same name) could result in 500 errors when trying to create accounts for users automatically.

---

{{< link-heading "h5" "2019-03-26" >}}

1. Added new `total_amount` field to transaction total endpoints.
    - This contains the sum of all `total_amount`s on transactions

---

{{< link-heading "h5" "2019-03-12" >}}

1. Updated the `note` field on transactions to be editable by admin users.
2. Updated the admin transaction endpoints to support creating transactions without specifying a user if an account is specified instead.
    - An error will be returned if neither a user or account is returned.
    - An error will be returned if the account does not belong to the user specified.
3. Altered the webhooks so that only a single event can exist for a given URL.
    - An error will be thrown if multiple webhooks are created with the same URL and event.

---

{{< link-heading "h5" "2019-03-06" >}}

1. Added default descriptions for the `admin` and `service` group.
2. Added `description` field to group add endpoint.
3. Added a `stellar` crypto type to the crypto accounts.
4. Added protections to stop non-admin users from adding `admin` users.

---

{{< link-heading "h5" "2019-02-27" >}}

1. Added a proper JSON error message for when amounts, fees or limits exceed the max size allowed in the platform. Previously these errors threw 500 errors.

---

{{< link-heading "h5" "2019-02-20" >}}

1. Added new `code__in` filters on `/admin/currencies/` and `/company/currencies/` endpoints.
    - Can be used like: `?code__in=USD,EUR`

---

{{< link-heading "h5" "2019-02-08" >}}

1. Updated the max number of digits to 30 (from 28) for all currency amounts (eg. balances, transaction amounts).

---

{{< link-heading "h5" "2019-02-07" >}}

1. Added new address type field to address endpoints:
    - values include: `permanent`, `contact`, `shipping`, `billing`, `business`.
2. Changed subtypes to be unique together on subtype and tx_type. So that the same name can be used across different tx_types.
3. Removed the file size limitation of 1MB. Updated to a 5MB.

---

{{< link-heading "h5" "2019-01-25" >}}

1. Fixed a bug in the MFA flow that resulted in a user having to "re-login" after creating and confirming an MFA device.
2. Updated the email and mobile handling:
    - Users can now delete emails/mobiles as long as they are not their last email/mobile.
    - Admins can now delete all emails/mobiles (including primary ones) belonging to a user.
    - When primary emails/mobiles are deleted the next non primary email/mobile is set to primary.

---

{{< link-heading "h5" "2019-01-16" >}}

1. Fixed admin user filters so that they work on all user emails and mobiles, not just the primary ones.
2. Added an icon field to the company so that a wallet icon or favicon can be stored in the platform.

---

{{< link-heading "h5" "2018-12-14" >}}

1. Added access control for IPs. IP whitelists and blacklists can now be defined for the company, groups or users.
2. Fixed email and mobile create bug where a verified key had to be set in order to set the primary key.
3. Fixed errors with user update caused by a non read-only group key.

---

{{< link-heading "h5" "2018-12-06" >}}

1. Added the fields to update a user’s mobile and email from the user endpoint (previously added to the admin user endpoints).
2. Added a key to the company object that contains what services a company has activated.
3. Added group information to the user “short” object
    - This can be found on admin endpoints when showing related user information.

---

{{< link-heading "h5" "2018-12-06" >}}

1. Added a new, more flexible and simplified permission system.
    - Permissions can now be configured on both admin and user sections.
    - Permissions can now be added to a group/user in a batch of more than one.

---

{{< link-heading "h5" "2018-11-20" >}}

1. Added new privacy_policy_url and terms_and_conditions_url to the company settings.
2. Added new “require_privacy_policy” field to company settings.
3. Added new “privacy_policy” field to user register.

---

{{< link-heading "h5" "2018-11-08" >}}

1. Updated multi-factor authentication
    - Added a field to specify the `algorithm`  used when creating multi factor tokens (SHA1, SHA256, SHA512).
    - Allow users to disable multi-factor authentication when logged in
2. Added admin user multi-factor authentication management via the following endpoints:
    - GET - /admin/users/{identifier}/mfa/
    - DELETE -  /admin/users/{identifier}/mfa/sms/
    - DELETE - /admin/users/{identifier}/mfa/token/

---

{{< link-heading "h5" "2018-10-30" >}}

1. Updated the request logging to include the body data of every request.
    - Sensitive values such as authorization keys, OTPs, and passwords are masked and stored as the masked value.

---

{{< link-heading "h5" "2018-10-25" >}}

1. Added new `status` field to the admin transfer create endpoint.
    - This field will impact transfers between existing users in the system.

---

{{< link-heading "h5" "2018-10-18" >}}

1. Force non permanent token invalidation on password reset.
2. Added new public company endpoint:
    - `https://api.rehive.com/3/public/companies/`
4. Added new `config` and `public` fields on companies.

---

{{< link-heading "h5" "2018-10-16" >}}

1. Added new optional pagination type “cursor”.
    - To use this pagination type specify `?pagination=cursor` on a listing endpoint. For optimal performance only sort by `created` or `id`.

---

{{< link-heading "h5" "2018-10-09" >}}

1. Modified the admin user view endpoint to allow changes to be made on the `email` and `mobile` fields:
    - Setting a non existent email/mobile will result in that email/mobile getting created, a confirmation sms/email getting sent and the email/mobile getting marked as `"primary": true`
    - Using an email/mobile that already exists will simply set that email/mobile as primary.
2. Improved the way available balances are stored and calculated. This will result in performance improvements on transactions, accounts and aggregation endpoints like the totals/overview.

---

{{< link-heading "h5" "2018-09-13" >}}

1. Added views for users to see requirements, fees, and limits related to group tiers.
2. Added a filter on the user group tier view to the user’s active tier:
    - `active`: True (shows the user’s active tier)
3. Removed the `identifier`, `enabled` and `active` fields from the user object and user lists.
4. Removed the old “single address” endpoint found at /3/user/address/.

---

{{< link-heading "h5" "2018-09-11" >}}

1. Fixed admin user endpoint not allowing group updates.
2. Added new account filters to the user list endpoint.
    - `account` : reference of an account.
    - `account__name` : name of an account.
    - `account__label` : label of an account.

---

{{< link-heading "h5" "2018-08-28" >}}

1. Added character limit error messages in several places where they were missing.
2. Made improvements to how primary accounts are selected and filtered.
3. Improved currency codes to be case insensitive across the API.
4. Added an account name filter to the transaction list.

---

{{< link-heading "h5" "2018-08-21" >}}

1. Fixed case sensitive bug with the `group__isnull` filter.
2. Removed the url encoding from the `otpauth_url` on the 2FA endpoint.

---

{{< link-heading "h5" "2018-08-17" >}}

1. Added new CSV export file format for large result sets.
2. Updated the file format of JSON exports to be a simple list of objects.
3. Updated the export file name to include the page and total count values.

---

{{< link-heading "h5" "2018-07-31" >}}

1. Fixed a bug where a group tier fee could not be updated without a currency.

---

{{< link-heading "h5" "2018-07-26" >}}

1. Fixed a bug where the `username` could not be added when null.
    - The username is now read-only, but only after it has been set with a non-null value.
2. Updated services error response format when activating services.
3. Fixed bug where a very large currency divisibility could be set in the API.
    - The divisibility has been restricted to 18 decimal places now.

---

{{< link-heading "h5" "2018-07-19" >}}

1. Added a new `name` filter field to the admin group listing endpoint.

---

{{< link-heading "h5" "2018-07-17" >}}

1. Added a custom transaction id field on transaction create endpoints.
    - The id field has also been updated to a uuid format (the same as user IDs).
2. Updated Rehive 500 errors to return a JSON formatted error response rather than an HTML page.
3. Added new `mobile` fields to some endpoints to eventually replace the existing `mobile_number` field.
4. Added `id` as a field to the company endpoints.

---

{{< link-heading "h5" "2018-07-10" >}}

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

{{< link-heading "h5" "2018-06-28" >}}

1. Fixed 500 error on group tier objects in certain circumstances.
2. Fixed bug where admin update on a user address did not save the updated status value.
3. Removed email/mobile verification requirement for admin endpoint access.
4. Fixed a subtype check and allow blank subtypes to be passed in tier fee request data.

---

{{< link-heading "h5" "2018-06-08" >}}

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

{{< link-heading "h5" "2018-05-24" >}}

1. Updated fee calculations to stack if multiple fees for the same transaction type, subtype, and currency are created.
2. Added description field to fees.
3. Removed 1 fee per currency/tx_type limit

---

{{< link-heading "h5" "2018-05-15" >}}

1. Changed the default password reset, password set and email verification URLs to direct to the main Rehive website instead of the dashboard.
    - This change will not impact any custom URLs.
2. Fixed a bug where checking tier requirements for user address and bank account results in a server error.

---

{{< link-heading "h5" "2018-05-03" >}}

1. Added new `user` filter on the admin user list.
    - This field can be used to filter by any of the identifier fields (id, email, mobile_number, username).
2. Fixed a bug when deleting tiers. In the past, trying to delete a higher tier occasionally caused an error saying the requirement is required in lower tiers. This interaction with lower tiers was undesired.
3. Update the user `id`/`identifier` field to allow it to be set in the admin user create endpoint.
    -This means that users can be created with a custom id if the request is made via the admin user create endpoint. Custom user `id`s cannot be changed later and are a static identifier for the user.
4. Fixed a bug in "admin user create" where the mobile number was not getting validated or cleaned properly, resulting in incorrectly formatted data.

---

{{< link-heading "h5" "2018-04-26" >}}

1. Added new `username` field to the user resource. This field is a unique identifier that can be set on user registration or create. It can be used as a recipient identifier for transfers as well (but it must already exist in the database).  It has the following limitations:
    - It may only contain lowercase letters, digits and @/./+/-/_. characters.
    - It must be unique across the whole company.
2. Added `updated` filters to the transaction listings and totals endpoints.
    - Filtering on `updated` can be done with `__gt`, `__gte`, `__lt`, `__lte`. This functions the same as the `created` filtering.
3. Fixed a bug in the idempotency feature where a race condition could occur and result in non idempotent requests.

---

{{< link-heading "h5" "2018-04-13" >}}

1. Added new `enabled` field on the user object.
    - This field will replace the `active` field in future. See the deprecation timeline for more on this.

---

{{< link-heading "h5" "2018-04-12" >}}

1. Added new `updated` and `created` fields to the user profile and list endpoints (admin and user sections).
    - The `created` field will replace the `date_joined` field. See the deprecation timeline for more on this.
2. Added new filters for `updated` and `created` on the user listing pages.

---

{{< link-heading "h5" "2018-03-27" >}}

1. Expose permission requirements for admin endpoints in the OPTIONS request for that endpoint.
    - When adding permissions to a group or user, the OPTIONS request on the endpoint will now expose the possible permissions that can be assigned.

---

{{< link-heading "h5" "2018-03-15" >}}

1. Removed the old https://rehive.com/api/3/.
    -Can now only access the API via https://api.rehive.com/3/. (as per the Rehive deprecation timeline).
2. Removed the active currency support when creating transactions.
    - When creating transactions a currency should always be included.
3. Fixed issue where trying to  create a user in the admin group via the admin API would throw an error.
4. Fixed a minor issue where webhooks would try 13 times but not get marked as failed.
    - Webhooks will only retry 11 times now (12 tries in total) and will be marked as failed (with a timestamp) after the 12th attempt.

---

{{< link-heading "h5" "2018-03-01" >}}

1. Fixed an error that occurred when adding a limit with no value.
2. Fixed and error that occurred when trying to add a currency that already exists to an account.
3. Update the KYC field on user objects.
    - The field can now be updated by admin users.
    - The field now only contains a status and updated date.
    - The field now has no automated status transitioning.

---

{{< link-heading "h5" "2018-02-27" >}}

1. An email address or mobile number is no longer required when creating a user via the admin api endpoint.
2. Fixed a bug where updating a transaction subtype with the same name fails.
3. Updated admin user list api to exclude the user permission and settings data.
    - These are now only shown when explicitly viewing a user’s information.
4. Added a group__isnull filter to the admin transaction list api endpoint.
    -This will filter based on users that are assigned to groups, or not.

---

{{< link-heading "h5" "2018-02-20" >}}

1. Added an event for setting user password on email sign up.
2. Added user group filtering where filtering by user data is available.

---

{{< link-heading "h5" "2018-02-08" >}}

1. Removed `confirm_on_create` from all transaction create endpoints.
2. Added new API base URL.
    - Old URL: https://rehive.com/api/3/
    - New URL: https://api.rehive.com/3/
3. Fixed a bug that was causing an internal error when a fee was created with a percentage value.

---

{{< link-heading "h5" "2018-02-06" >}}

1. The metadata field has been updated to be more consistent across Rehive. The following rules now apply to the metadata field when it is included in an API request:
    - Must be valid JSON.
    - Must be a valid JSON object or null value. An empty object is permitted. String or list values are not permitted.
2. Fixed a bug where trying to match a user’s tier requirements for address and bank account results in an internal server error if the user has no address or bank account.

---

{{< link-heading "h5" "2018-01-30" >}}

1. Added batch create functionality for transactions.
    - Multiple transactions can be created in a single POST to the `/api/3/transactions/` endpoint. All transactions are processed as one atomic batch. If one transaction fails, all the transactions will fail.
2. Added a `fee` field to all admin transaction create endpoints (this includes the batch endpoint above).
    -The `fee` field can be populated with a list of custom fees that will be attached to a given transaction.
3. Added `fee` field to all view transaction endpoints (not listing endpoints).
    - This field contains a list of all fees that were attached to a transaction (both internal fees and external ones added by the  functionality described above).
4. Updated all transaction create/update endpoints to no longer function asynchronously.
    - Transactions are now processed within the request/response cycle and will return the latest state to the client when processing is complete. This allows for simpler API client implementations.

---

{{< link-heading "h5" "2018-01-18" >}}

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

{{< link-heading "h5" "2018-01-05" >}}

1. Fixed bug where `terms_and_conditions` were required on service deactivation
2. Added an `account` filter to the admin user list.

---

{{< link-heading "h5" "2017-12-28" >}}

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

{{< link-heading "h5" "2017-12-12" >}}

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
