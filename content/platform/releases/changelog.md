---
date: 2018-09-17T15:21:22+02:00
title: Changelog
description: Platform changelog.
weight: 1
---

Summary of additions and changes to the Rehive platform. Breaking changes or removals will be indicated ahead of time in the [deprecation timeline](/platform/releases/deprecation_timeline/).

---

{{< link-heading "h5" "2024-06-18" >}}

1. Added a new `listed` field to the `groups` resoource.
    - If this field is set to `false` on a public group it will not be available on the public listing endpoint.
2. Increased the max page size allowed on exports to 100000.
3. Fixed a bug in exports that resulted in exports with 0 results getting stuck in processing.

---

{{< link-heading "h5" "2024-05-30" >}}

1. Fixed a bug in the admin API that prevented admins from modifying account-currencies on crypto accounts.
2. Added support for admins to delete primary emails on non-admin users.
3. Added support for owners to delete primary emails on admin users.

---

{{< link-heading "h5" "2024-05-27" >}}

1. Added a new `residencies` field that accepts a list of countries that a company supports for user residence.
2. Added a new `residency` field to the user resource. This field accepts a country value that must be in the `residencies` list above (if it is populated).
3. Fixed a bug in the swagger documentation that resulted in JSON fields or similar property-like fields getting displayed as `string` values instead of objects.
4. Fixed a bug in the fees cache that resulted in cache not getting cleared correctly when groups fees were added or removed.

---

{{< link-heading "h5" "2024-05-13" >}}

1. Updated the default request delete verify URL to be `/request-delete/verify` instead of  just `/request-delete`.
2. Updated all auth email webhooks to include the company identifier and email in the URL query params.
3. Updated inactivity handling on test companies to allow for a longer inactivity period.
4. Fixed a bug in account serialization that was resulting in a missing `definition` field in some responses.
5. Fixed a bug in user filters that was resulting in all users getting returned when a non-existent user was included in a `user` filter.

---

{{< link-heading "h5" "2024-04-29" >}}

1. Updated how metrics are built and stored internally:
    - Multiple metrics can now be created with the same query.
    - Metrics with the same queries all use the same data points.
    - Added new filter fields on metrics and metric points.
2. Fixed a bug in the list metric resource that was resulting in a 500 error when filtering.

---

{{< link-heading "h5" "2024-03-22" >}}

1. Updated email/mobile `primary` field handling to support modification as well as more strict role based controls:
    - Users (and admins) can now modify their primary email/mobile as long as they have not verified their existing primary/mobile.
    - Admins can modify the primary email/mobile of other users who are not admin users.
    - Company owners can modify the primary email/mobile of any other user.
2. Updated email/mobile verification (`verified`) handling:
    - When verifying their own emails/mobiles users must always use the full verification process themslves.
    - Admins can manually verify the emails/mobiles of any other non-admin users.
    - Owners can manually verify the emails/mobiles of any other users.
3. Implemented an account/user deletion and verification process:
    - Added a new `/auth/request-delete/` endpoint for a user to anonymously request a delete verification email.
    - Added a new `/auth/request-delete/verify/` endpoint for a user to anonymously confirm a delete verification request.
    - Added new `retention_state` field on the user resource to store whether a user has requested (and confirmed) account deletion.
    - Added a new `user.request_delete.verify` webhook event.

---

{{< link-heading "h5" "2024-02-29" >}}

1. Updated the property level permissions functionalityy to support `change` and `add` permission levels.

---

{{< link-heading "h5" "2024-02-21" >}}

1. Added a new system for limiting what fields users/groups can access on specific resources.
    - A new `properties` field has been added to user and group permissions to contain a list of fields to deny/allow on a specific 
    - This system currently only support field based permissions on the `transaction` type and `view` level permissions.
    - Additionally, for now, this system only supports limiting fields within the `metadata` object of a resource.
2. Updated email/mobile verify resend to only resend for the specified email/mobile and not all unverified emails/mobiles.
3. Fixed a regression where 0 value limits were not unlimited as per the original design.
4. Applied optimizations to the permission and permission cache handling used in authentication/authorization.

---

{{< link-heading "h5" "2023-12-19" >}}

1. Updated the account-currency resource to contain an `id` property.
2. Add new `account_currencies` list property on wallet/crypto/bank accounts:
    - This stores a list of specific account-currencies a wallet/crypto/bank account is related to.
3. Added CRUD for adding/removing account-currencies on wallet/crypto/bank accounts.
4. Added account-currency filters on the wallet/crypto/bank account list endpoints.
5. Updated crypto accounts to no longer require the address to be unique, multiple crypto account can be uploaded with the same address.
6. Improved serialization and serilaizer inheritance to work better for wallet/crypto/bank accounts and accounts/account-currencies.

---

{{< link-heading "h5" "2023-12-12" >}}
 
1. Improved filter performance on the transaction listing endpoints.
2. Changed the way Rehive evaluates companies as inactive. Extension API calls are now excluded when calculating whether a company has an requests in the last 90 days.
3. Added stricter validation to prevent the modification of company owner’s emails/mobiles by other users with admin permissions.

---

{{< link-heading "h5" "2023-11-20" >}}
 
1. Added a new `expires` field to the transaction resource. 
    - This field contains the timestamp when an `initiating` transaction will be removed/invalidated (if it does not changes statues before then).
2. Added a new `expires` field to the transaction-collection creation endpoint. 
    - This can be used to add a custom `expires` date to all transactions that don't have their own `expires` field defined.
3. Added a new `default_transaction_lifespan` to the company settings resource.
    - This is the lifespan of `initiating` transactions that automatically gets applied to each transaction's `expires` field if a custom one is not specified.

---

{{< link-heading "h5" "2023-11-16" >}}
 
1. Added a new `password` field to the register endpoints. This replaces the `password1` and `password2` fields.
2. Added a new `new_password` field to the password reset confirm and password change endpoints. This replaces the `new_password1` and `new_password2` fields.
3. Updated the Swagger schema to include information on deprecated fields.

---

{{< link-heading "h5" "2023-11-01" >}}

1. Updated validation when adding permissions to groups. An error will now be triggered if an admin permission is added to a user section group.
2. Updated MFA handling to throw an error when a admin user tries to enable SMS MFA.
3. Updated the validation of company names, and all user name fields to be more strict on what values are accepted.
4. Added a new `creator` property to the transaction resource. This property contains the user that created the transaction and it can be accessed via:
    - All transaction webhook events: `transaction.create`, `transaction.update`, `transaction.initiate`, `transaction.execute`.
    - The admin transaction retrieve endpoint : `/3/admin/transactions/{id}/`

---

{{< link-heading "h5" "2023-10-24" >}}

1. Added a new `weight` field to requirement sets and requirement set item resources.
2. Updated the requirement set item resource `name`, `description`, and `weight` fields to be editable via `PATCH` and `PUT`. 
3. Added new `created` and `name` filters to the bank, crypto and wallet account resource listings.
4. Added a new `number` filter on the bank account resource listing.

---

{{< link-heading "h5" "2023-09-22" >}}

1. Updated webhooks to be associated with a service if created by a service user. 
2. Updated webhooks so that they cannot be deleted or modified if they are related to an active service.
3. Updated the request logs  to return the `headers` field as properly formatted HTTP headers rather than the internal all-caps format.
4. Updated service activation/deactivation to return more details on the type of error when an error is thrown by the service.
5. Fixed the format of errors on transaction-collection creation. It was incorrectly returning a list of errors under `data` rather than a object.

---

{{< link-heading "h5" "2023-09-11" >}}

1. Fixed multiple minor bugs in the admin search endpoint. The admin search endpoint had issues searching by some special characters or multi-word inputs.
2. Fixed a bug where idempotent requests were not getting their request body (POST data) saved correctly in the request logs.
3. Fixed the error key used in 404 error outputs when an authenticator does not exist.
4. Fixed a bug when handling a 404 response on authenticator delivery that resulted in a 500 error instead of a 404 error.

---

{{< link-heading "h5" "2023-08-16" >}}

1. Final removal of the deprecated [MFA functionality](/platform/releases/deprecation_timeline/#2023-08-16).
   - The replacement MFA functionality is documented [here](/platform/advanced-usage/multi-factor/).

---

{{< link-heading "h5" "2023-07-07" >}}

1. Updated the Platform API swagger schema to use OpenAPI version 3.0.3. This change includes significnat improvements to the schema generation as well:
   - Added schema components (previously definitions) for response enevelopes (ie. `{"status": "success", "data": {}}`.
   - Improved Swagger UI examples for requests and parameters.
   - Improved schema generation for objects that can `oneOf` several differnet schemas.
2. Added a `label` field to the tier requirement sets resource.

---

{{< link-heading "h5" "2023-06-30" >}}

1. Updated the timestamp field to be an integer type in documentation.
2. Significantly improved the generation of the swagger `responses`:
    - Previously, documented `responses` on some endpoints were different to the actual results when the endpoint was invoked.
    - Additionally, the documented response statuses on some endpoints were different to the actual results when the endpoint was invoked.

---

{{< link-heading "h5" "2023-06-21" >}}

1. Added a new `clear_session_option` field to the password reset confirm endpoint. This field supports three clearing options:
    - `all` : Clear all sessions and tokens including permanent tokens (that may be used as API tokens).
    - `temporary` : Clear only temporary sessions and tokens with an expiry (this is the default behaviour).
    - `none` : Clear no sessions and tokens. 

---

{{< link-heading "h5" "2023-06-14" >}}

1. Added a new `related_resources` list field to the `document-type`.
2. Added a new `metadata` field to the `document-type` resource.
3. Fixed a bug with the `date` filters on the metric points endpoint that resulted in the unresolved metric point getting included in invalid date ranges.
4. Fixed a bug with transaction count metrics that resulted in 0 results getting aggregated due to a queryset filter error.

---

{{< link-heading "h5" "2023-06-05" >}}

1. Fixed a bug in exports that resulted in memory usage issues (and eventual failures) on the `account` resource.
2. Updated CSV exports to have simpler more CSV-appropriate columns and not create columns for nested list fields.
3. Updated `metadata` fields in CSV exports to always be a single column with the JSON formatted as a string.

---

{{< link-heading "h5" "2023-05-30" >}}

1. Added a new `use_new_documents_and_requirement_sets` field to the company. This can be used to switch to the new document and tier requirements functionality.
    - Turning this on will block the adding of document without using a `type` instead of a `document_type`.
    - Turning this on will switch requirement evaluation for tiers to use the new `requirement-sets` and requirement `items`.
2. Added thew new `document-type` resource. This will replace the static list of document types. 
    - POST, GET : `/admin/document-types/` 
    - GET, PATCH, PUT, DELETE: `/admin/document-types/<doc_id>/`
    - GET : `/document-types/` 
    - GET : `/document-types/<doc_id>/`
3. Updated the `document` resource to accept a new field of `type`, which must be an ID of the a object of the `document-type` resource.
4. Added a new `requirement-set` resource. This resource will be used to store thew new requirements for a tier. The advantage of requirement sets is that they can be defined with a condition of `all` or `any` (with an additional number indication how many) and can be structured in a nested way using the `parent` field (only one level of nested sets is supported).
    - POST, GET : `/admin/groups/<group_id>/tiers/<tier_id>/requirement-sets/` 
    - GET, PATCH, PUT, DELETE: `/admin/groups/<group_id>/tiers/<tier_id>/requirement-sets/<req_id>/`
    - GET : `/groups/<group_id>/tiers/<tier_id>/requirement-sets/` 
    - GET: `/groups/<group_id>/tiers/<tier_id>/requirement-sets/<req_id>/`
5. Added a new `item` resource under the `requirement-set` resources. `items` encapsulate requirement rules and can be used in combination with requirement-sets to construct complex requirement hierarchies. Currently the only supported rule type is `resource` which accepts a `condition` and  `resource` value. Conditions are formatted as JSON like `{"first_name__isnull": false}`.
    - POST, GET : `/admin/groups/<group_id>/tiers/<tier_id>/requirement-sets/<req_id>/items.` 
    - GET, PATCH, PUT, DELETE: `/admin/groups/<group_id>/tiers/<tier_id>/requirement-sets/<req_id>/items/<item_id>/`
    - GET : `/groups/<group_id>/tiers/<tier_id>/requirement-sets/<req_id>/items/` 
    - GET: `/groups/<group_id>/tiers/<tier_id>/requirement-sets/<req_id>/items/<item_id>/`
6. Updated the deprecation timelines. All functionality related to the old document type handling and requirements handling is now deprecated and subject to removal as per the deprecation timeline.

---

{{< link-heading "h5" "2023-05-25" >}}

1. Updated the platform to be seperated into two API schemas:
    - The Platform API - Core user API: https://api.rehive.com/swagger
    - The Platform Admin API - Management API: https://api.rehive.com/admin/swagger

---

{{< link-heading "h5" "2023-05-18" >}}

1. Fixed a bug in the webhook initiation on user deactivation that resulted in no webhook event getting triggered.
2. Fixed a bug in active user counts that resulted in incorrect system metrics.
3. Updated metrics to include more types of metrics and support `accumulate` and `set` metrics.

---

{{< link-heading "h5" "2023-05-04" >}}

1. Updated service activatation and deactivation errors to include additional error details. Three possible error response can be returned now:
    - Connection error: `An error occurred in the service: Unable to connect to {url}.`
    - Explicit service error: `An error occurred in the service: {message}`
    - Generic service error: `An error occurred in the service: Received a {code} response from {url}.`
   
---


{{< link-heading "h5" "2023-04-28" >}}

1. Final removal of deprecated items listed under the date 2023-04-25.
2. Fixed a 500 error on admin user listings when filtering by `account`, `account__name`, or `account__label`.
3. Fixed a bug in account deactivation that resulted in no webhook event firing off (and no notification with a deactivation link).
4. Fixed a bug in account primary field handling that resulted in multiple primary accounts per user in some very specific scenarios.

---

{{< link-heading "h5" "2023-03-20" >}}

1. Added a new authenticator-rule type of `setup`. This rule can be used to force users to setup MFA on their account.
    - A list of types can be configured to indicate which authenticators are allowed in order for a user to be considered compliant.
    - Like other authenticator rules, the group can be customized so that these rules only apply to users in a specific group.
2. Updated MFA authenticator list and view endpoints to mask some attribute values. The POST response will not be affected by this change.
3. Fixed a bug in media type handling on request logs that previously resulted in an internal error when trying to save request body data.
4. Added new `section` and `archived` filters to the groups list endpoints.

---

{{< link-heading "h5" "2023-03-07" >}}

1. Fixed a bug in legal term handling on registration that resulted in 500 errors if an invalid legal term was used.
2. Fixed a bug in webhook handling that sometimes resulted in `user.email.verify` and `mfa.sms.verify` events not getting sent. 

---

{{< link-heading "h5" "2023-02-23" >}}

1. Removed the old notification handling from the platform. Going forward all notifications besides initial email/mobile verify (welcome) emails must be sent via the notification extension.
2. Added new `deactivated` filter to the admin `user`(s) list endpoint.

---

{{< link-heading "h5" "2023-02-20" >}}

1. Fixed a bug in the `currencies` property on the admin accounts list endpoint.
2. Fixed a bug in account synchronization that resulted in archived accounts getting set as primary.
3. Fixed a bug in the population of the `resource` and `resource_id` fields on the request resource when a request resulted in a 400 error.
4. Updated the `first_name` and `last_name` fields on the user resource so that they allow `null` and default to `null`.

---

{{< link-heading "h5" "2023-01-31" >}}

1. Major update to the way transactions and transaction collections are transitioned.
    - Transactions can now be created as `initiating`. No effects or transitions will be run on these except for general validation.
    - Transitions (between different transaction statuses) are now recorded in a transaction transition resource.
    - Added managed currency transaction transition approvals flow.
    - Added account balance pooling within collections when doing balance checks.
    - Updated collections to always transition as a whole (ie. individual transactions cannot have different statuses to other transactions in the same collection).
2. Added automated pruning of initiating transactions older than 15 minutes.
3. Added new endpoints for retrieving, listing and updating transaction transition resources.
4. Added new `transaction.transition.create` and `transaction.transition.update` webhook events.
5. Fixed a minor bug when updating a collection status that would result in the new status not showing in the response.
6. Updated `action` handling on bank, crypto and wallet accounts.
    - User endpoints can now only create, delete and modify accounts with an action of `deposit`.
    - Admin endpoints can create, delete and modify all action types.

---

{{< link-heading "h5" "2022-12-14" >}}

1. Updated all endpoints that return the token resource (including login and register) to include the `expires` and `created` fields.
2. Updated the admin token create endpoint to include the `user` field on the response as well.
3. Improved Swagger documentation so that boolean fields use the correct default values.
4. Added new `transactions__created` and `exclude__transactions__created` filters on account assets.

---

{{< link-heading "h5" "2022-11-28" >}}

1. Added new Python SDK code samples to the Swagger documentation.
2. Removed the `permissions list` from the list groups and view groups serializers. 
3. Updated Swagger documentation to exclude deprecated endpoints.
4. Fixed `services` list representation in the Swagger documentation on the company object. The field now correctly shows a sub service resource instead of `string`.
5. Updated service view endpoint to not return a list of permissions. The permissions should be retrieved using `/services/<id>/permissions/` instead.

---

{{< link-heading "h5" "2022-11-09" >}}

1. Added new optional fields to the user bank accounts resource:
    - `owner` object that contains: `first_name`, `last_name`, `address`, `phone_number`, `email_address`, `ein_tin`, `cpf_cpnj`, and `company_name`
    - `beneficiary_type` with options `individual` and `business`
    - `payment_method_type`

---

{{< link-heading "h5" "2022-11-03" >}}

1. Improved the Swagger documentation of enum fields to correctly only include the values allowed on PATCH, PUT and POST.
2. Improved the Swagger documentation to include summaries, descriptions and x-code-samples (when available) on all admin endpoints.

---

{{< link-heading "h5" "2022-10-24" >}}

1. Fixed a bug where the user bank account create endpoint was throwing an error when the branch address field is an empty object.

---

{{< link-heading "h5" "2022-10-03" >}}

1. Fixed a bug where the `withdraw` action could not be set on new company bank or wallet accounts.
2. Updated the `action` field to allow admins to set it as `null` on wallet, crypto and bank accounts.
3. Updated the `username` field on the user resource to allow admins to modify its value.
4. Updated the `manager` field on the currency resource to contain a `service` object if the manager is a service user. 
    - The `service` object contains the following service fields:  `id`, `slug`, `name`, `url`, `type`.

---

{{< link-heading "h5" "2022-09-22" >}}

1. Added new `action` field to the wallet, crypto and bank account resources. This field can contain the values `withdraw` or `deposit`.
    - Only admin users can set the value on these resource as `deposit`.
2. Added new `action` filter to the wallet, crypto and bank account listing pages.
3. Updated the transfer endpoints to support `null` values on the `recipient` field.

---

{{< link-heading "h5" "2022-08-25" >}}

1. Added validation to to prevent users from creating an unlimited number of certain resources. This applies to emails, mobiles, addresses, wallet accounts, crypto accounts, bank accounts and devices.
2. Optimized the handling of timezones when calculating which metrics needs to run at a given time.
3. Added the `management_url` to the editable fields on the Service resource.
4. Fixed a bug with webhook expression evaluation that made it impssoible to evaluate an expression that included a condition on a list.
5. Added new throttling on MFA device creation. Requests to the MFA device create endpoint(s) are now restricted to no more than 10 requests an hour (per user).
6. Added new throttling on MFA SMS delivery. Requests to the MFA SMS delivery endpoint(s) are now restricted to no more than 10 requests an hour (per user).
7. Updated the SMS messages for SMS OTPs to include the company information and user name if available.

---

{{< link-heading "h5" "2022-08-03" >}}

1. Fixed an issue on company link endpoints and their permission checks that resulted in 500 errors.
2. Fixed a bug on subtype partner validation that resulted in the incorrect error text.
3. Fixed a bug in subtype partner validation where it was trying to do validation on `null` inputs.
4. Fixed filters on the admin webhook list endpoint: there was a regression that caused these filters to no longer work.
5. Added a new `owner` field to the `user` resource to indicate whether they are the owner of a company.
6. Added a new `owner` field to the `company` resource to indicate which user is the owner of that company.

---

{{< link-heading "h5" "2022-07-06" >}}

1. Added inclusive fees on `debit` transactions and updated the transaction builder to correctly adjust amounts and subsequent transactions when `inclusive` is specified on a transaction.
2. Added an `index` field to the transaction resource, this contains the transactions position in it's transaction collection.
3. Added a new `webhook__url` filter on the webhook tasks endpoint.
4. Fixed a bug in decimal validation handling that caused a 500 error on certain integer inputs.
5. Addressed an issue with related transaction discovery on transaction updates that resulted in fee transactions not transitioning at the same time as their parent.

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
