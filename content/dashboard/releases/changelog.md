---
date: 2018-09-17T15:21:22+02:00
title: Changelog
description: Dashboard changelog.
weight: 1
---

Summary of additions and changes to the Rehive Dashboard. 

---

{{< link-heading "h4" "2022-11-29" >}}

**Changes:**

- Updated the billing page to link to the Stripe customer portal, where admins can manage their billing plan.
- Added an enumerated list of events to webhook logs filters.

---

{{< link-heading "h4" "2022-11-28" >}}

**Bug fixes:**

- Fixed issue where admins could not upload logos or icons due to auth token not being included in the PATCH. (Hotfix)

---

{{< link-heading "h4" "2022-11-24" >}}

**New features:**

- The old transaction modal has been replaced by the new transaction page! Admins can see more information about each transaction, categorized into sections. Admins can also see special information for specific types of transactions that make it easier to process them from an operations point of view.

---

{{< link-heading "h4" "2022-11-23" >}}

**Bug fixes:**

- Fixed issue where the Stellar Extension was not showing amounts formatted correctly, and also not showing the correct on-chain balance (and in the correct format) in the hot wallet.
- Fixed issue where Warm Storage accounts were being duplicated in the Stellar Extension.

**New features:**

- Admins can now add custom extensions to their project from the Extensions listing page. From here they can activate, deactivate, manage permissions, and set a management URL.

---

{{< link-heading "h4" "2022-11-17" >}}

**Bug fixes:**

- Fixed issue where admins could not edit currency on the currencies listing page.

**Changes:**

- Changes to how the company registration works.

**New features:**

- Admins can now filter the Account Definitions page by group to see which definitions apply to which groups. They will also see warnings if a group does not have a default or primary account in their applied account definitions.

---

{{< link-heading "h4" "2022-11-16" >}}

**Bug fixes:**

- Fixed various sentry errors, specifically when adding a new user.
- Fixed an issue where admins could not remove/deselect an integration from a product.
- Fixed an issue where admins could not create a manual deposit if a user did not have an email address.

**Changes:**

- Added new filters to webhook logs - event and url.
- Change the back button on the currency view page.

---

{{< link-heading "h4" "2022-11-01" >}}

**Changes:**

- Fixed locales download link.

---

{{< link-heading "h4" "2022-09-30" >}}

**Changes:**

- Admins can now edit usernames after they have been set.

---

{{< link-heading "h4" "2022-09-28" >}}

**Bug fixes:**

- Fixes issue where currency icon was being sent to the prod template when creating a Production Project.

**Changes:**

- Updates all template names in test and prod project registration.

---

{{< link-heading "h4" "2022-09-27" >}}

**Bug fixes:**

- Fixed issue where admins could not complete the go to production flow if their company description had multiple lines.

**Changes:**

- In tier requirements, changed text to Profile verification instead of Account verification. (Hotfix)

---

{{< link-heading "h4" "2022-09-22" >}}

**Changes:**

- Admins now have to complete testing criteria before they can create a Production Project.
- We now display a banner indicating that the Locales feature is in beta mode in the App Extension.

---

{{< link-heading "h4" "2022-09-20" >}}

**Changes:**

- Added Ethereum as a Wyre currency option during onboarding.

---

{{< link-heading "h4" "2022-09-16" >}}

**Changes**:

- Changed how the en template downloads in the App Extension. (Hotfix)

---

{{< link-heading "h4" "2022-09-15" >}}

**Bug fixes:**

- Fixed issue where prices were not displaying for item vouchers, and blank metadata was displaying as [object Object].
- Fixed issue where missing a missing unit on a currency would cause the currencies listing page not to load.

**Changes**:

- Updated location of Locales JSON template. (Hotfix)

---

{{< link-heading "h4" "2022-09-09" >}}

**Changes:**

- Admins now have the ability to create their own Production Projects via the Go to Production flow, which begins on the Get Started page.
- Removes the Wyre Accounts listing section from the Wyre Extension.
- Displays Wyre users API info on the Wyre users listing page in the Wyre Extension.
- Adds back the Stellar transactions listing pages to the testnet and livenet Stellar Extensions.

---

{{< link-heading "h4" "2022-09-05" >}}

**Bug fixes:**

- Fixed issues in the Product Extension where amount was being sent through in decimal instead of integer format.
- Fixed issue where when editing the amount of a balance voucher, no value was being sent.
- Fixed issue where all required field when creating or editing notifications were not set to required.
- Currency display code now correctly shows on the orders listing page instead of the currency code.

**Changes:**

- Admins can no longer upload voucher codes manually for balance vouchers.
- Admins will no longer be able to change a voucher type (between Item and balance) once it has been set.
- Added better help messages to notifications edit and create for certain fields.

---

{{< link-heading "h4" "2022-08-29" >}}

**Bug fixes:**

- Fixed issue where admins were unable to add Plaid details in the Wyre Extension. (Hotfix)
- Fixed issue where the state management loader was not displaying correctly when adding Wyre API credentials in the Wyre Extension. (Hotfix)

**Changes:**

- Added Swagger link in Wyre Extension. (Hotfix)

**New features:**

- Admins can now add FAQ questions, which will display in the Web and Mobile Apps, via the App Extension app config in the new FAQs section.

---

{{< link-heading "h4" "2022-08-25" >}}

**Changes:**

- Added serial number and expires fields to the vouchers listing page in the Product Extension. (Hotfix)

---

{{< link-heading "h4" "2022-08-24" >}}

**Bug fixes:**

- Fixed issue where the document PDF button was not showing for uploaded PDF documents.
- Fixed swapped around Google and Apple icons on the Get Started page. (Hotfix)

**Changes:**

- The currency listing and view pages have been refactored to be more efficient.

---

{{< link-heading "h4" "2022-08-17" >}}

**Bug fixes:**

- Fixed issue where added prices were not displaying when editing some products.
- Metadata now displays correctly on products when editing.

**Changes:**

- Admins can now see available currencies in the Product sales credit account listing options.
- Credit fee account is now required when creating or editing a fee.
- Updated the styling on the tier and group fees listing pages.
- When creating Wyre projects, admins can now add two additional currencies: XLM and XBT.
- Admins can now add Wyre credentials only once. After that they cannot be edited, only viewed.

---

{{< link-heading "h4" "2022-08-13" >}}

**Bug fixes:**

- Fixed issue where admins could not update basic user info status from the document view/edit modal on the user details page. (Hotfix)

---

{{< link-heading "h4" "2022-08-12" >}}

**Bug fixes:**

- Fixed hover bug on currencies listing page.
- Fixed issue where admins could not set an empty partner on when creating a partner-type subtype.
- Fixed issue where admins could not use the top pagination on the vouchers listing page. (Hotfix)
- Fixed issue where admins could not update the User basic info status from the view/edit Document modal. (Hotfix)

---

{{< link-heading "h4" "2022-08-10" >}}

**Bug fixes:**

- Fixed issue where Go Live block was not showing on pending Production mode projects. (Hotfix)

**Changes:**

- Added the variant name to view order modal.

---

{{< link-heading "h4" "2022-08-05" >}}

**Bug fixes:**

- Fixed issue where admins could not edit external accounts added to users if they contained no metadata.

**New features:**

- Admins can now upload images to business categories in the Business Extension.

---

{{< link-heading "h4" "2022-08-04" >}}

**Changes:**

- Support for International Wyre clients is now available.
- Styling on currencies listing page has been adjusted.

---

{{< link-heading "h4" "2022-08-02" >}}

**Bug fixes:**

- Fixed issue where admins could not add variants to non-balance voucher type products.

---

{{< link-heading "h4" "2022-08-01" >}}

**Changes:**

- The Get Started steps for Manual projects has been updated to include adding a test user via the wallet and verifying the user's KYC documents as an admin.

**New features**:

- Admins can now create fees on a group basis in addition to on a tier basis.

---

{{< link-heading "h4" "2022-07-28" >}}

**Changes:**

- Max length on ID number field is now 24 characters, in line with Platform. (Hotfix)

---

{{< link-heading "h4" "2022-07-27" >}}

**Changes:**

- Admins can set usernames for a user if it has not already been set. (Hotfix)

---

{{< link-heading "h4" "2022-07-26" >}}

**Bug fixes:**

- Fixed issue where basic user info could not be saved when status was updated. (Hotfix)

---

{{< link-heading "h4" "2022-07-25" >}}

**Bug fixes:**

- Removed a defunct "manage vouchers" link on the edit product page. (Hotfix)

**Changes:**

- Updated the copy on the White-label web application domain settings page in the App Extension.

---

{{< link-heading "h4" "2022-07-20" >}}

**Bug fixes:**

- Fixed issue where an endpoint was called before MFA verify instead of after.
- Fixed an issue where admins could not log into other projects if an outstanding MFA challenge existed.
- Fixed issue where admins were unable to update basic user info details if ID field was blank. (Hotfix)
- Fixed issue where show/hide eye was showing for non-SSN numbers in the User Basic Info block and Edit User Basic Info modal. (Hotfix)

**Changes:**

- Hid "Enable 2FA" message in the top right dropdown if MFA is enabled.
- When a user has the USA as their nationality, their SSN number will be hidden by default. Admins can click to reveal the value.
- Admins can now view the partner of a partner subtype and set a partner.
- The groups listing page has been reworked. Groups are now separated into user and admin sections, and group shortcuts are more easily available.
- Admins can now set password set, reset and email verify urls per group.
- Admins can now create static item or balance-based vouchers in the Product Extension.

---

{{< link-heading "h4" "2022-07-14" >}}

**Changes:**

- Removed defunct App domain field from the App Extension Settings page. (Hotfix)

---

{{< link-heading "h4" "2022-07-08" >}}

**Bug fixes:**

- Fixed issue where "Managed by" was not being displayed correctly on the currencies listing page. (Hotfix)

---

{{< link-heading "h4" "2022-07-07" >}}

**Bug fixes:**

- Fixed an issue where admins could not deactivate domains in the App Extension. (Hotfix)

**Changes:**

- The currencies listing and view pages have been revamped. The currency totals have been moved to the currency view page.
- Updated the instructions when activating a domain in the App Extension. (Hotfix)

---

{{< link-heading "h4" "2022-06-29" >}}

**Bug fixes:**

- Fixed an issue where admins could not view certain documents to verify them due to a metadata parsing error.

**Changes:**

- Minimum withdraw_ach and withdraw_manual limits for USD are now added newly created to Wyre test projects.
- The Get Started page now functions better in terms of its responsiveness.

**New features:**

- Admins can now easily switch projects from anywhere on the Dashboard via the top right dropdown.

---

{{< link-heading "h4" "2022-06-21" >}}

**Bug fixes:**

- Fixed typo in Go to Production block on the Get Started page. (Hotfix)

**New features:**

- Admins can now access Rehive's Software Terms in order to accept them.
- Admins can now view and accept the latest Privacy Policy and Terms changes on the Get Started page.

---

{{< link-heading "h4" "2022-06-20" >}}

**Bug fixes:**

- Fixed incorrect function call name for Stellar Extension on the User details page. (Hotfix)

**Changes:**

- Added a "Process withdrawals" button to the transactions listing page.
- The link to download a Locales English template now displays even when no Locales have been added. (Hotfix)

---

{{< link-heading "h4" "2022-06-08" >}}

**New features:**

- On the Business Extension, admins can now more easily verify a Business and a Seller at the click of 1 button.
- Admins can now upload an image to a reward campaign.

---

{{< link-heading "h4" "2022-06-07" >}}

**Bug fixes:**

- Removed print of account options on Rewards settings page. (Hotfix)
- Fixed issue where nationality would always display as US and ID number vs SSN number label would not correctly display based on nationality. (Hotfix)

**Changes:**

- Dashboard now shows SSN as ID label on the user details page if user nationality is US, otherwise the label will read ID number. (Hotfix)
- Displays label and placeholder as SSN in the edit basic info modal if the user's nationality is US. (Hotfix)

---

{{< link-heading "h4" "2022-06-06" >}}

**Bug fixes:**

- Fixed issue where the create business category modal was not loading until clicked.
- Fixed link to a business on the user details page. (Hotfix)

**Changes:**

- Added breadcrumbs to all extensions.
- Added help text to Business payouts to indicate the timezone in which payout times are set. (Hotfix)
- Added link to Friendbot on the Get Started page. (Hotfix)
- Added a link to the Friendbot funding article to the Friendbot page. (Hotfix)

---

{{< link-heading "h4" "2022-06-03" >}}

**Bug fixes:**

- Fixed issue where admins were unable to view a crypto transaction if the crypto extensions were not activated. (Hotfix)
- Fixed styling issues with the text at the top of the Accounts pages.
- Fixed issue where Test Mode was not always being saved correctly.
- Fixed issue where setting quantity null was not being sent through correctly when editing a product in the Product Extension. (Hotfix)

**Changes:**

- Friendbot will only display on Test projects in the Wyre Extension.
- Removed unused colors in the App Extension App Config.
- Removed link to product categories page from create product page when there are no categories in the Product Extension. (Hotfix)
- Added back the Dashboard based password set, reset and email verify pages. Restructured these to accept path params instead of get params.
- Added `path__contains` and `method__in` filters to request logs.

**New features:**

- Admins can now create, edit and delete locales inside the App Extension in order to localize their apps. Admins can also download a template of the English translation to work from.

---

{{< link-heading "h4" "2022-06-01" >}}

**Bug fixes:**

- Fixed issue where the Business Categories listing page did not load correctly.

**Changes:**

- Admins can now edit which categories a business belongs to in the Business Extension.
- Removed Description and Category columns from the Businesses listing page in the Business Extension.
- Reworked how the Business and Product categories pages are fetched.
- The Rewards Extension has been reworked to break campaigns up into sections.

---

{{< link-heading "h4" "2022-05-30" >}}

**Bug fixes:**

- Fixed issue where entire file path would display in exports. (Hotfix)

**Changes:**

- Amended validation when making a transfer to ensure Sender and Receiver accounts are filled out. (Hotfix)

---

{{< link-heading "h4" "2022-05-28" >}}

**Bug fixes:**

- Fixed a typo on the Get Started page. (Hotfix)
- Fixed issue where Intercom users were still being created for @rehive.com email addresses during onboarding.
- Fixed a display issue on the transaction metrics page. (Hotfix)

**Changes:**

- The company info page has been updated to be more clear and broken up into sections.
- Updated the link in the Go to Production block on the Get Started page to go to a Production Request Typeform. (Hotfix)
- Removes test mode project condition on Friendbot nav item in Wyre Extension. (Hotfix)
- Updates the copy and link on the Get Started page for Test mode Wyre projects. (Hotfix)

**New features:**

- Admins can now fund their users on Test Projects using the Friendbot in the Wyre Extension.

---

{{< link-heading "h4" "2022-05-24" >}}

**Changes:**

- Deploy of password set/reset and email verify pages for testing.

---

{{< link-heading "h4" "2022-05-20" >}}

**Changes:**

- Updated the to email and from email placeholder text when creating or editing an email notification in the Notifications Extension. (Hotfix)
- Made the link under From email help text in email notifications in the Notification Extension open in a new tab. (Hotfix)

---

{{< link-heading "h4" "2022-05-18" >}}

**Bug fixes:**

- Fixed issue where Wyre id was not showing up on Standalone accounts even though wyre_service was present in the account's metadata. (Hotfix)
- Fixed how Extensions were called, changing from PUT to PATCH. (Hotfix)

**Changes:**

- Added `from_email` field to email notifications, an optional field admins can set for specific email notifications inside the Notification Extension.
- When creating or editing Push notifications, the Title field is no longer required. Event is now a required field.
- Redesigned the Stellar Warm Storage page to make switching between Warmstorage accounts more clear.
- An informative banner now displays on the Stellar livenet Extension if MSS has not been setup.
- Updated how steps are tracked in GA during onboarding.
- Updated GA tracking events during onboarding.
- The Invite Admins page during onboarding now validates if an admin tries to invite their email address again.
- The Stellar Testnet Extension is now hidden if the Wyre Extension is activated.
- The Wyre Extension can no longer be deactivated.
- Made it more clear what password to enter when creating a custom token, as well as that Allow Custom Token Duration needs to be enabled. (Hotfix)

---

{{< link-heading "h4" "2022-05-16" >}}

**Changes:**

- Updated account currency exports to look for resource account_asset instead of account_currency.
- Changed the filter on the Extensions page to the updated private vs public extension filter.
- Updates how Dashboard handles vars passed to the email verify and password reset page.

---

{{< link-heading "h4" "2022-05-12" >}}

**Changes:**

- The builder now looks at status instead of steps completed in order to decide when to redirect to Dashboard.
- Added link to customize notification templates to the Branding block on the Get Started page. (Hotfix)
- Changes "Customize notification templates" to "Customize notifications" in the Branding block on the Get Started page. (Hotfix)

---

{{< link-heading "h4" "2022-05-04" >}}

**Bug fixes:**

- Fixed display of account info modal on smaller screens.

**Changes:**

- Added two new webhook events to the webhooks section in Developers - currency.create and currency.update.
- Adjusted placeholder text for company description on the company info page.
- Amended help text on the public setting on the company info page.
- Updated "App extension" to read "App Extension" everywhere.
- Added the ability for admins to set up and enable Multisig Signer in the Stellar Extension.

---

{{< link-heading "h4" "2022-04-29" >}}

**Changes:**

- Added the ability to add multiple levels of categories to the Business Extension.
- Added the requests listing and view section to the Payment Request Extension.

---

{{< link-heading "h4" "2022-04-20" >}}

**Changes:**

- Admins can now edit more currency fields - symbol, unit and description.
- Admins can now only archive currencies, not delete them, to match what the API allows.

---

{{< link-heading "h4" "2022-04-19" >}}

**Bug fixes:**

- Fixed issue where the Get Started page would get stuck loading.
- Fixed issue where correct Get Started block would not show for correct project type (Wyre vs Manual)

**Changes:**

- Removed outdated mobile number validation from add user and add mobile number. (Hotfix)

---

{{< link-heading "h4" "2022-04-13" >}}

**Changes:**

- Added new user and admin permissions.
- Added links to the create Google and Apple dev links on the Get Started page.
- Fixed typo in the Android & iOS block on the Get Started page.
- Added link to the Verify email address link on the Get Started page.
- Added tour triggers to the Get Started page.

**New features:**

- Admins can now register a project to be managed with Wyre. Onboarding has been updated to be more streamlined.
- New Get Started page.

---

{{< link-heading "h4" "2022-04-11" >}}

**Changes:**

- Added a link to the Expressions Guide on reward campaigns, notifications and webhooks.
- Removed Demo and Setup Bitcoin Testnet blocks from the Get Started page.
- Removed the Product Type from the Product Extension Products listing page.
- Dashboard now displays the product ID on the Products listing page and when editing a product.
- Dashboard now displays an order item ID when viewing an order in the Product Extension.
- Added pagination to the Wyre Extension's accounts, transfers, and users listing pages.

---

{{< link-heading "h4" "2022-04-06" >}}

**Changes:**

- Adds the display of a Wyre wallet id on user accounts and standalone accounts if Wyre Extension metadata is present.
- Adds message about API keys and account IDs being truncated to the Wyre Extension settings page.

---

{{< link-heading "h4" "2022-04-01" >}}

**Bug fixes:**

- Fixed issue where admins could not unset a product as a voucher in the Product Extension.
- Fixed issue where setting a product as a voucher when editing it did not correctly set the type and creation type in the voucher schema.

**Changes:**

- Changes "Credit deposit" in the transaction helper to "Manual deposit". (Hotfix)
- Adds id to the create manual deposit shortcut in the accounts results dropdown in search. (Hotfix)

---

{{< link-heading "h4" "2022-03-30" >}}

**Bug fixes:**

- Fixed issue where setting an already existing product as a voucher did not correctly set the type and creation type for the voucher schema. (Hotfix)

**Changes:**

- Updates how vouchers work on the Product Extension.

---

{{< link-heading "h4" "2022-03-24" >}}

**Changes:**

- Adds full Wyre Extension UI with accounts, transfers, and users.
- Adds the ability for admins to add Plaid credentials in the Wyre Extension.

---

{{< link-heading "h4" "2022-03-14" >}}

**Changes:**

- Added `language` field in the auth section of the App Config.
- Added new help text in the App Extension in the settings section for App Domain and Web app hosting domain URLs.

---

{{< link-heading "h4" "2022-03-07" >}}

**Bug fixes:**

- Fixed issue where "Create credit deposit" link in the search results sat on a spinning loader forever.
- Fixed issue where "Process withdrawals" link in the search results did not look for the correct withdrawal subtype.
- Removed the "Approve" button from failed withdraw_manual transactions.
- Fixes issue with Credit account search link introduced with the fix of Create manual deposit. (Hotfix)

**Changes:**

- Added a "Decline" button for pending withdraw_manual transactions.
- Renamed "Create credit deposit" link in the search results to "Create manual deposit".

---

{{< link-heading "h4" "2022-03-01" >}}

**Bug fixes:**

- Fixed issue where view document modal was missing from the Business Extension.
- Fixed issue where entering incorrect format of website on the company info page resulted in a partially broken page.

**Changes:**

- Refactor of registration code.

---

{{< link-heading "h4" "2022-02-24" >}}

**Changes:**

- Admins can now manually change the permissions of individual `service` group users.

---

{{< link-heading "h4" "2022-02-18" >}}

**Bug fixes:**

- Fixed date display for suspension date for past due invoices. (Hotfix)

---

{{< link-heading "h4" "2022-02-16" >}}

**Bug fixes:**

- Fixed issue when editing a product in the Product Extension where integrations on the product would not display.
- Fixed issue where integrations added to the Product Extension did not show up when editing a product without an integration.
- Fixed issue where changing a product integration did not save when editing a product.

**Changes:**

- Changed text in header for test projects to read "Test project" instead of "Test company".

---

{{< link-heading "h4" "2022-02-15" >}}

**Changes:**

- Updated the label for the operational account in the Product Extension when creating or editing a product to make it more clear that it is the product sale credit account.
- Updated the error displayed when an operational account is missing when adding or editing a product. It now refers to the correct field instead of "supplier account".
- Added basic explanations for what the App config and JSON config are in the App Extension.
- Hid the "New" button on the Orders page.
- Added help text to the Standalone accounts and Account Definitions pages. Added links to the help center.
- Renamed Edit field on Account Definitions to Rename and swapped positions with Archive account definition. 
- Renamed Rate Pairs page in the Conversion Extension Custom Rate pairs. Added help text. 

---

{{< link-heading "h4" "2022-02-14" >}}

**Changes:**

- Added a date picker to the transaction and user metrics, allowing admins to refine their metrics results.

---

{{< link-heading "h4" "2022-02-11" >}}

**Bug fixes:**

- Fixed issue where "dismissable" toggles did not work on the Cards section in the App Extension App Config for Popup and Announcements.

**Changes:**

- Removed the Bitcoin testnet address info block from the user details page.
- Added better help information to the add and edit fee modals. The add and edit fee modals also no longer close when clicking outside of the modal, they only close on clicking on the X or the close button.
- Added a title field to prompts in the Cards section in the App Extension App Config.
- Added bank account back to tier requirements.
- The add and edit webhook modals no longer close when clicking outside of the modal - they now only close when clicking on the X or the close button.
- Invited admins are now added via the builder.

---

{{< link-heading "h4" "2022-02-07" >}}

**Changes:**

- Added an enable referrals toggle to the App Extension -> App Config -> General settings -> Profile section.

---

{{< link-heading "h4" "2022-02-04" >}}

**Changes:**

- Added resource id filter to request logs.
- Added the ability to edit and delete alerts, prompts and posts in the App Extension 'Home cards' section.
- All created project app IDs on Rehive will now end in _test

---

{{< link-heading "h4" "2022-02-02" >}}

**New features:**

- Added Metrics to Transactions and Users. Admins can now view transaction metrics for volume of transactions as well as number of transactions, broken up by debits and credits. Admins can view number of active users as well as new registrations in user metrics.

---

{{< link-heading "h4" "2022-02-01" >}}

**Changes:**

- Updated analytics events for onboarding and subscription tracking.

---

{{< link-heading "h4" "2022-01-29" >}}

**Changes:**

- Changed label of manager groups on Product Extension Settings. (Hotfix)

---

{{< link-heading "h4" "2022-01-24" >}}

**Bug fixes:**

- Fixed issue where Rewards deactivation would not appear, spinner would show endlessly.

**Changes:**

- Removed Bitcoin extension activation from onboarding.
- Added view payouts section to the Business Extension.
- Removed old GTM tracking events.

---

{{< link-heading "h4" "2022-01-13" >}}

**Changes:**

- Removed requirement for title when adding or editing a slider in the App Extension.

---

{{< link-heading "h4" "2021-12-24" >}}

**Changes:**

- Adds new method for tracking and firing GA pageLoad events for every route state change
- Adds logic to fetch user if logged in and pass user info to GA events
- Adds new method to track and fire GA event fires on every step completion
- Adds new method to track and fire subscription events for user plan selection and completion

---

{{< link-heading "h4" "2021-12-22" >}}

**Changes:**

- Added new "section" column and filter to Mass Send listing page
- Added new "status" filter to Business listing page
- Inside the App Extension, split Sliders and Cards into individual pages instead of Content
- Reworked layout of the App Config Cards section, added new modals for Alerts, Prompts and Posts. Split layout between Main and Feed sections.

---

{{< link-heading "h4" "2021-11-29" >}}

**Bug fixes:**

- Fixed issue where attempting to edit notifications with PRS events did not work. (Hotfix)

**Changes:**

- Added help text to the App Extension settings page for app domains. Renamed the App domains listing section. (Hotfix)

---

{{< link-heading "h4" "2021-11-26" >}}

**Changes:**

- Added editable metadata to user documents.
- Added new Payment Request Extension notification events. Admins can now create notifications which are triggered by Payment Request Extension events.
- Added a seller section to the view business page. Admins can now approve a seller associated with a business on the same page that they verify the business.

---

{{< link-heading "h4" "2021-11-19" >}}

**Bug fixes:**

- Fixed an issue on the create new transaction modal where archived accounts would show up as an option.

**Changes:**

- Updated Bitcoin livenet onboarding to include OpenNode API key requirement.
- Added the ability for admins to add and activate their own app domains in the Settings section of the App Extension.
- Added editable metadata UI to user bank accounts.

---

{{< link-heading "h4" "2021-11-08" >}}

**Bug fixes:**

- Fixed user listing error due to deprecated KYC field. (Hotfix)
- Fixed issue where, when viewing transactions with temporary users with only mobile number, (new) displayed instead of the mobile number.

**Changes:**

- Added help text to the permissions page in groups.

---

{{< link-heading "h4" "2021-10-28" >}}

**Changes:**

- Added bank id to the bank account detail view on the user details page.

---

{{< link-heading "h4" "2021-10-25" >}}

**Bug fixes:**

- Fixed issue where USDC could be added twice during onboarding. (Hotfix)
- Moved Ethereum currency from fiat currencies to cryptocurrencies during onboarding.

**Changes:**

- Updated Mass Send Extension to use the admin endpoint. Admins can now also see a history of Mass Sends they have done.

---

{{< link-heading "h4" "2021-10-14" >}}

**Bug fixes:**

- Fixed issue where product settings manager groups was calling the incorrect API endpoint.

---

{{< link-heading "h4" "2021-10-12" >}}

**Changes:**

- Removed functionality where a change of status of a Proof of Identity document also changed the user's user status.

---

{{< link-heading "h4" "2021-10-04" >}}

**Changes:**

- Added logs to individual user document view modal.
- Removed the menu hover effect on user accounts.
- Updated onboarding to allow the selection of more cryptocurrencies and a stablecoin. Admins can now also change their generated app id.
- Moved app config product settings from App Extension app config general settings to the Product Extension settings.

---

{{< link-heading "h4" "2021-09-27" >}}

**Bug fixes:**

- Fixed issue where the message displaying that there were no currencies in an account was aligned incorrectly.

---

{{< link-heading "h4" "2021-09-22" >}}

**Bug fixes:**

- Fixed issue on the login page where long company descriptions would display out of bounds.

**Changes:**

- When creating a new credit transaction, an admin must now first select account instead of currency. The account selected will determine which currencies are available to use.

---

{{< link-heading "h4" "2021-09-15" >}}

**Bug fixes:**

- The Dashboard now shows when a currency is archived in a user account.

**Changes:**

- Admins can now archive user accounts which are not controlled by an account definition.
- Added a link to a user's business (if they have one) on the user details page.
- Added a currency limit to onboarding. During onboarding only 5 fiat currencies may be selected.
- After creating a token, admins will explicitly have to close the modal displaying their token. This was changed to prevent accidental modal closures by clicking anywhere outside of the modal.
- The login screen has been updated. Admins will now see the last 3 apps they have logged into and can click on these to automatically populate their app id, making it easier to login.

---

{{< link-heading "h4" "2021-09-06" >}}

**Changes:**

- Updated transactions listing and transaction history modal to improved how we show when a user is temporary and when a transaction went to or came from a standalone account.
- Updated the subtype controls pages to sort the controls by subtype name instead of subtype label.

---

{{< link-heading "h4" "2021-09-01" >}}

**Changes:**

- Added metadata and note fields to the business document modal in the Business Extension.
- Fixed the display of the document type on the business view page and the business document modal.

---

{{< link-heading "h4" "2021-08-26" >}}

**Changes:**

- Admins can now credit searched-for accounts directly from the search result popdown.
- Added new fields to the user basic info and tier requirements: grandfather's name and grandmother's name.
- Renamed the settings page in Transactions to Global subtype controls.

---

{{< link-heading "h4" "2021-08-19" >}}

**Bug fixes:**

- Dashboard now displays the correct error when an admin attempts to add a user with an email address that already exists in the system.

---

{{< link-heading "h4" "2021-08-13" >}}

**Bug fixes:**

- Fixed redirection issue where admins would be redirected back to the currencies page after first login.

**Changes:**

- Added Swagger UI doc links to actively supported extensions.

---

{{< link-heading "h4" "2021-08-13" >}}

**Changes:**

- Added a new app config section in the Business Extension which allows admins to select which business onboarding sections should display in the app. Admins can also set section title and section text for all business onboarding sections.
- Added gender to the user details page under the basic info section. Gender has also been added as a tier requirement option.
- Admins can now easily view the issuance date of a proof of identity document when viewing a user's proof of identity document.
- The Business Extension UI has been revamped. Businesses are now displayed and edited on their own page. Admins can also manage documents uploaded to the business.

---

{{< link-heading "h4" "2021-08-05" >}}

**Bug fixes:**

- Fixed styling issue on the Account Definitions listing page where Restore links incorrectly had a background color.

**Changes:**

- Recon accounts have been moved out of the User accounts and Standalone accounts listing pages, and instead into their own Recon listing page. This page also contains a link to the Rehive Help Center with articles about how Recon accounts work.
- Conversion pairs are no longer automatically created from selected currencies during onboarding. All conversion pairs will have to be added manually in the Conversion Extension.
- Admins can now choose which Account Definitions to add a currency to when adding a new currency to their company.

**New features:**

- Added the Wyre and Wyre Testnet Extension UIs.
- New fields (title, marital status, father's name, mother's name, and central bank number) have been added to the Basic Info section on the user details page, and these same fields can be used as tier requirements. 
- A new category of document has been added - Proof of Income. Under this category are 3 different document types which are classified as Proof of Income: payslip, employment letter, and financial statement. This document category has also been added as an option on tier requirements so that admins can require verified proof of income.

---

{{< link-heading "h4" "2021-07-28" >}}

**Bug fixes:**

- Fixed issue where incorrect error was display when app name was too short.

**Changes:**

- Rehive's onboarding has been streamlined. The Sandbox landing page has been removed, app name was moved from the branding page to the registration page, and app ids generated from app name now.
- Several small styling adjustments have been made to the Stellar and Bitcoin onboardings.

**New features:**

- Warm Storage onboarding for the Bitcoin and Bitcoin testnet extensions is now live.

---

{{< link-heading "h4" "2021-07-20" >}}

**Bug fixes:**

- Fixed an issue when editing a product, where trying to edit the quantity of a variant it would not correctly send through the entered quantity.

---

{{< link-heading "h4" "2021-07-12" >}}

**Changes:**

- Added links to the documentation to the main extensions in the Dashboard.

---

{{< link-heading "h4" "2021-07-08" >}}

**Changes:**

- Adjusted the spacing of the previous and next buttons at the bottom of the transactions listing page.

---

{{< link-heading "h4" "2021-07-07" >}}

**Changes:**

- Implemented cursor pagination on the transactions listing page and request logs.
- Added commas to long numbers throughout the Dashboard to make them easier to read.

**New features:**

- In the Stellar extensions, we have added prelisted assets so that admins can easily add a known Stellar asset to their extension. USDC will be the first asset available to add.

---

{{< link-heading "h4" "2021-07-01" >}}

**Bug fixes:**

- Updated text in Stellar Testnet Hot Wallet onboarding from XLM to TXLM.
- Changes references to "Lumens" to "lumens" in the Stellar testnet and livenet onboardings.
- Fixed various copy errors in Stellar Extensions.

**New features:**

- Added an onboarding feature to the Stellar Extensions (testnet and livenet) so that users have a guided way to set up their hot wallet and warm storage accounts.

---

{{< link-heading "h4" "2021-06-24" >}}

**Changes:**

- Updated the link to the Rehive privacy policy on the register page.

---

{{< link-heading "h4" "2021-06-23" >}}

**Changes:**

- Updated various archive warning messages to be more explicit.
- Added Hot Wallet Onboarding to the Bitcoin Extensions.

---

{{< link-heading "h4" "2021-06-17" >}}

**Changes:**

- Removed auto-funding transactions from the Sandbox template.
- On login, the Dashboard no longer calls endpoints which require MFA before MFA is verified.

---

{{< link-heading "h4" "2021-06-08" >}}


**Changes:**

- App config has moved from the company settings into the App Extension.
- Added messages and links letting admins know that the app/JSON config has moved and where they can find its new location.
- By default, transactions in recon accounts will not display on the transactions listing page or on the transaction stats page. Admins can set filters to either include recon account transactions or show only recon account transactions.

**New features:**

- The ability to tag an account as a "recon" account has been added to the Dashboard. These accounts are a representation of an external account in Rehive. An individual user account, standalone account, or entire account definition can be set as recon.

---

{{< link-heading "h4" "2021-06-01" >}}

**Changes:**

- Updated the billing page. Removed hosting options and update pricing.

---

{{< link-heading "h4" "2021-05-31" >}}

**Bug fixes:**

- Fixed an issue where the expression field appeared to be blank until clicked on after an admin added a reward template.

**Changes:**

- An admin's app id is now displayed on the 2FA page as well as a log out button.
- Admins can now set a default operational account for the Conversion Extension and the Rewards Extension, with the option of selecting a different operational account per conversion pair or reward campaign.

---

{{< link-heading "h4" "2021-05-21" >}}

**Changes:**

- Removed defunct "Allow multiple addresses per user" setting in Bitcoin extensions. That setting is now default behavior in the extensions.

---

{{< link-heading "h4" "2021-05-14" >}}

**Changes:**

- Added a link to the help center in the Conversion Extension.
- Added a link to a help center article in the Mass Send Extension.
- Added a new video on the Get Started page giving an overview of Rehive's product.
- Added an app id label to the Dashboard header.
- Updated the Weekly Demo icon on the Get Started page.

---

{{< link-heading "h4" "2021-05-12" >}}

**Changes:**

- Standalone accounts and user accounts are now separated into their own pages in the accounts section. Admins can now manage limits, fees and subtype controls on standalone accounts.
- Added new Get Started page with videos and links to the help center.

---

{{< link-heading "h4" "2021-05-11" >}}

**Changes:**

- Admins are no longer forced to choose at least one fiat currency - they may now select to only have a crypto currency during onboarding.
- Admins can now add percentage padding to their conversion rates when creating a conversion pair in order to hedge against currency volatility.
- Admins can now select a reward template, which will populate their new reward campaign with preset values to help them get started faster.

---

{{< link-heading "h4" "2021-04-30" >}}

**Changes:**

- Updated onboarding currency selector to allow admins to choose whether to add the crypto extensions.
- Removed trailing 0s from the conversion extension.

---

{{< link-heading "h4" "2021-04-16" >}}

**Changes:**

- Admins can now upload and view currency icons.

---

{{< link-heading "h4" "2021-04-15" >}}

**Bug fixes:**

- Fixed issue where users without permission to delete MFA from users did not see an error message letting them know that they did not have permission to perform that action when attempting to remove MFA from a user. Dashboard would also incorrectly show that it had been deactivated.
- Fixed the "Is transfer" filter to use the correct value.

**Changes:**

- Updated the default page size for exports of transactions, accounts and account currencies from 10k to 50k.

---

{{< link-heading "h4" "2021-04-14" >}}

**Bug fixes:**

- Fixed an issue where multiple export files would overlap their display in the export download list.

**Changes:**

- Adjusted the design of the Company Settings table.

---

{{< link-heading "h4" "2021-04-13" >}}

**Bug fixes:**

- Fixed issue where wrong field was being updated in Account Definitions when updating the primary marker on a definition. 
- Fixed issue where, when editing a product with variants, the "Simple" radio button in the pricing section was selected instead of the "Variants" button, making it look like there were no variants on the product.
- Changed the "Session duration" field in Company Settings to always show and not incorrectly require that "Allow custom session duration" setting be true before a session duration can be set.

**Changes:**

- The transaction create modal no longer disables the next button when attempting to transfer from a standalone account with no funds. It now lets admins attempt the transaction but will throw an insufficient funds error when they try to confirm the transaction.
- Clicking outside of the transaction create modal no longer closes the modal - it can only be closed by  pressing on the x in the top right corner.
- In line with the Platform deprecation timeline, Dashboard has deprecated the `source` and `destination` transaction fields. All filters and columns now use `partner` functionality instead. Transactions now have a "is partner" filter which will display all transactions that are or have a partner transaction. Admins can also now choose to display a "Partner txn id" column, which will show a transfer transaction's partner's ID.
- Admins can no longer delete account definitions, groups from account definitions, or currencies from account definitions they will only be able to archive them.
- Admins can no longer delete users. Users can now be archived or deactivated. Archiving is used as a soft delete of the user - the user cannot login and no transactions or actions can happen on that user. Deactivating a user prevents  them from logging in and can be done in order to protect their account if it has been breached, or to investigate a suspicious user.
- Admins will now see an error or message if their company is suspended or restricted.
- Onboarding has been updated to an interim solution.  There is now only Sandbox to choose from. Admins can now select what currencies they want during the onboarding process.

---

{{< link-heading "h4" "2021-03-29" >}}

**Bug fixes:**

- Fixed broken Contact Sales links on the Select Plan and Get Started pages.

**Changes:**

- Added Sellers information to the Product Extension. Admins can now see when a product has been uploaded by a seller, view a list of sellers, approve a seller, and set which groups can become sellers.
- Removed the need to type "deactivate" when deactivating an extension.
- Added new app config field to the Settings section of the app config: loop currencies.

---

{{< link-heading "h4" "2021-03-24" >}}

**Changes:**

- Adds small text in Group Add/Edit under description.
- Fixed issues with currency dropdown when adding Tier limit.
- Changed modal text and fixed currency mapping issue in Delete confirmation prompt when deleting a currency from an account definition.
- Fixed styling issue on account definitions listing page.
- Updated text of popup modal when reassigning user group.
- Fixed account definition routing issue when clicked on navigation item.
- Updated create order to work with product variants. When adding an order admins can now select a variant, see how much quantity of a product is left, enter a variable amount price where applicable and calculate the total of the order.
- Admins can now see when a product item on an order is using a custom variable price.
- Added 3 new generic document types for user documents.

---

{{< link-heading "h4" "2021-03-17" >}}

**Changes:**

- Added links to associated transactions and the user on the conversions modal in the Conversions Extension.
- The Dashboard now deals with uploaded PDFs better for KYC documents. Instead of showing a broken image a button letting the admin know they need to click to view the file in a new tab displays.

**New features:**

- Admins can now enable and disable payment processors in the Payment Requests Extension, as well as amend the base redirect url the extension usersl.

---

{{< link-heading "h4" "2021-03-11" >}}

**Bug fixes:**

- Fixed issue where Dashboard did not handle missing expected metadata properly on transactions and would not open the transaction modal.

**Changes:**

- Archived user accounts are now greyed out and marked as "archived" on a user's accounts page.
- On the default subtypes listing page and on all subtype switches pages changed from displaying the subtype label tot he subtype name.

---

{{< link-heading "h4" "2021-03-04" >}}

**Bug fixes:**

- Fixed issue where a Stellar error message would show up when switching between xpub keys in the warm storage in the Bitcoin Extensions.

**Changes:**

- Rearranged the add user modal fields to have select group first and email second.
- Added a note to company description letting admins know that it is a field shown to end-users.
- Renamed the note field on the view document modal to let admins know that notes are shown to end-users.
- Added support website field to the company info page.
- Added the country of operations field to company info.

---

{{< link-heading "h4" "2021-02-25" >}}

**Bug fixes:**

- Removed Stellar trustline message displayed when switching between xpubs in Bitcoin Extensions' Warmstorages.
- Fixed various issues where null values would trigger errors.

---

{{< link-heading "h4" "2021-02-24" >}}

**Changes:**

- Redesigned the add and edit product pages.
- Added product integrations section to the Product Extension settings.


**New features:**

- Admins can now add product variants to products on the Dashboard. Create options and build variants e.g. size and color combinations.

---

{{< link-heading "h4" "2021-02-22" >}}

**Changes:**

- Admins can now add, edit and remove currencies from users' listed bank accounts.
- Admins can now add credit and debit notes to transfers.

---

{{< link-heading "h4" "2021-02-16" >}}

**Changes:**

- Swapped the position of the Stripe API key fields in onboarding and the Stripe Extension.
- Swapped the position of usage type and description around on the Subtypes page.
- Removed old defunct fee fields from view conversion modal in the Conversion Extension.
- Added new `require_registration` field to the Company Settings. Enabling this will require users to be registered before any transactions can be made to them. This will prevent temporary users from being created via transfers to unregistered users.

---

{{< link-heading "h4" "2021-02-02" >}}

**Bug fixes:**

- Fixed issue where admins could not edit or delete a conversion pair if the associated operational account had been deleted.
- Fixed a bug where admins could not deactivate the Payment Requests Extension.

**Changes:**

- Updated the crypto extensions to add and associate the updated subtypes.
- Amended the subtypes listing page to display subtype name first and sort by subtype name.
- Removed superfluous "some text" text on the Stellar extensions.
- Amended Dashboard to use display code everywhere outside of extensions.
- Added tier to the user header on the user details page.

---

{{< link-heading "h4" "2021-01-27" >}}

**Changes:**

- Updated Terms & Conditions link on register.

---

{{< link-heading "h4" "2021-01-26" >}}

**Bug fixes:**

- Fixed issue where rates in the Conversion Extension were displaying as 0 when rates were e.g. 0.001

**Changes:**

- Amended background colour of profile picture section on the top right.
- Added the `resource` section to the request log modal.
- Added a configuration check to ignore Intercom validation on staging.

---

{{< link-heading "h4" "2021-01-19" >}}

**Bug fixes:**

- Fixed issue where "user for x days" information was incorrect for users who had been in the system for more than 1 year.

**Changes:**

- Added 2FA warning banner for admins on production companies. 
- Added a 2FA shortcut in the user profile dropdown.
- Amended the user profile dropdown to be more obviously a dropdown.

---

{{< link-heading "h4" "2021-01-13" >}}

**Changes:**

- Added a logout button on the expired trial modal.
- Added the ability to set session durations in Company settings.
- Updated subtypes in the transaction helper and transaction modal for the January 2021 Subtype update.

Rehive also rolled out a routine configuration update, the details of which can be [viewed here](https://docs.google.com/document/d/1sFYqvjr9HkLuWo4c2m-zmvWnMvXwn-NeDt_Ta1PMVxA/edit?usp=sharing).

---

{{< link-heading "h4" "2021-01-12" >}}

**Bug fixes:**

- Fixed issue where using the transaction helper to have a credit deposit or a transfer deposit did not pick up the correct account from the entered account reference.

**Changes:**

- Changed deactivating an extension to no longer require entering your password.
- Implemented the Mass Send Extension UI.
- Improved the process of reviewing user documents by refreshing the list after vetting a document and displaying the related user's email.

---

{{< link-heading "h4" "2021-01-08" >}}

**Changes:**

- Admins can now see a user's tier on the user details page in the Groups block.
- Updated the display of unassigned deposits on the Stellar Warm Storage page. Admins can now see more information about an unassigned deposit and also assign them to a user.
- Added Intercom identify verification to Dashboard users.
- Updated the exports to a new API endpoint.

---

{{< link-heading "h4" "2020-12-11" >}}

**Changes:**

- Moved "Add currencies" link when managing an account definition to align with the archive links.
- Moved "Add groups" link on the account definitions listing page to align with the archive links.
- Added the ability to edit the name and label of an account definition on the account definition listing page.
- Dashboard now blocks editing of any any account that is under an account definition. An icon with a tooltip message is displayed to let an admin know when an account is under an account definition.

---

{{< link-heading "h4" "2020-12-10" >}}

**Changes:**

- Added "verified user status" to tier requirements.
- Added the transaction collection ID to the view conversion modal.

**New features:**

Account definitions:

- Account configurations in groups have been replaced with Account definitions, which can be found under the Accounts section in the Dashboard.
- Admins can now create an account definition and select which groups it applies to.
- When adding a group to an account definition, admins can select which currencies this group's accounts should have.
- Any change made to an account definition will be rolled out to any accounts of users in the groups that an account definition is applied to. 
- If a currency or group is archived from an account definition, or the account definition itself is archived, any account that has that currency, or is under that group or account definition will also be archived, along with any related transactions.
- Archived currencies, groups and account definitions can be restored, along with all of their related transactions.
- If a currency or group is deleted from an account definition, or the account definition itself is deleted, any account that has that currency, or is under that group or account definition will also be deleted, along with any related transactions. **Deleting is permanent and cannot be undone.**

Subtype controls:

- Admins now have more granular subtype controls.
- Admins can disallow a subtype globally, per group or per tier for specific currencies. E.g. Disallow send_email for USD for the individual group.
- Admins can disallow a subtype per group or per tier for specific account names. E.g. Disallow withdraw_manual for savings accounts in the individual group.
- Admins can disallow a subtype per group or per tier for a specific combination of currency and account name. E.g. Disallow withdraw_manual but only for EUR in general accounts in the business group.

Fees:

- Admins can now optionally add an account definition to a fee, where a fee will only be charged if an account under that account definition is involved in the transaction. E.g. Only charge a fee for withdraw_manual for USD if the withdrawal is made from the savings account.

Limits:

- Admins can now optionally add an account definition to a limit, where a limit will only be applied if an account under that account definition is involved in the transaction. E.g. Only enforce a limit for transfers made from savings accounts.

---

{{< link-heading "h4" "2020-12-03" >}}

**Changes:**

- Added a text field allowing admins to add or edit an image for a slider in the app config.

---

{{< link-heading "h4" "2020-12-02" >}}

**Changes:**

- Changed company logo and icon upload to allow only jpg and png uploads.
- Added deactivation interface for the Payment Requests Extension.

---

{{< link-heading "h4" "2020-11-20" >}}

**Changes:**

- Updated all instances of Project name and ID to App name and ID instead.
- Added a character limit and counter for company description on the branding page of onboarding.
- Added the company's App ID to the Company info page.

---

{{< link-heading "h4" "2020-11-13" >}}

**Bug fixes:**

- Fixed issue where business logo was using the incorrect url to display a business logo.

---

{{< link-heading "h4" "2020-11-12" >}}

**Changes:**

- Added the payout_day and payout_hour fields to the Business Extension settings. This allows admins to set the time and day on which payouts to businesses will occur.
- Added the session_duration field to the app config. This allows admins to set session durations for their users in the app, as long as custom session durations are allowed on a company level.

---

{{< link-heading "h4" "2020-11-11" >}}

**Bug fixes:**

- Fixed an issue where the datetime was using the incorrect format on start/end dates in rewards.

---

{{< link-heading "h4" "2020-11-06" >}}

**Bug fixes:**

- Fixed an issue where admins were unable to deselect "billing" address type in the Profile Settings section of the App Config.

---

{{< link-heading "h4" "2020-11-05" >}}

**Changes:**

- Added the ability to see and edit the status field in the Business Extension.
- Reworked the Bitcoin and Bitcoin testnet Extensions' settings pages to combine settings. Also added the new allow_multiple_addresses_per_user field to both extensions.
- Added the "owner" field to the Business Extension. Admins can now view the owner of a business on the business listing page, the view business modal, and the edit business modal.

---

{{< link-heading "h4" "2020-10-29" >}}

**Bug fixes:**

- Fixed pagination issue on Products page where pagination would not work.

---

{{< link-heading "h4" "2020-10-21" >}}

**Changes:**

- Added a "Refresh" button to the conversions page.

---

{{< link-heading "h4" "2020-10-20" >}}

**Bug fixes:**

- Updated subtypes when looking for crypto withdrawals on the crypto extensions.

**Changes:**

- Added two new actions to the App Config section: Deposit voucher and Withdraw voucher.
- Added account name to the transaction modal.

---

{{< link-heading "h4" "2020-10-19" >}}

**Bug fixes:**

- Fixed bug on global transaction controls page where updating the credit or debit section would undo settings in the other section (i.e. making a change to a credit subtype would undo debit settings).

**Changes:**

- Removed "default transaction status" setting from company settings.

---

{{< link-heading "h4" "2020-10-16" >}}

**Changes:**

- Changed currencies list in the app config to only contain currencies currently added to the company. This change allows for custom currencies to be selectable options.

---

{{< link-heading "h4" "2020-10-07" >}}

**Changes:**

- On the MFA page the token input field is now autofocussed on page load.
- On the MFA page you can now submit your token by pressing enter.

---

{{< link-heading "h4" "2020-10-01" >}}

**Bug fixes:**

- Fixed issue where General settings switches for Hide bank accounts, hide primary currency, hide notifications and hide SMS MFA were not saving.
- Fixed issue where totals on currencies page were all showing as 0.

**Changes:**

- Increased page size of get extensions functions in order to ensure all extensions display on the extensions listing page.

---

{{< link-heading "h4" "2020-09-24" >}}

**Bug fixes:**

- Fixed the app config UI to no longer overwrite the JSON config.

**Changes:**

Major update to the App config UI:

- Adds Sessions, MFA and Tier requirements in the company Auth section.
- Adds a new Settings section.
- Adds Sales settings. Moves Product, Sales and Profile settings under the Settings nav item.
- Adds new fields for Product Settings.
- Renamed Accounts section to Actions. Adds Donate config and conditions, and new modals for add/edit/delete donation recipients. Adds Pay config section. Adds Prepaid config and add/edit/delete modals for Prepaid configurations
- Adds Tertiary, Focus, Tertiary contrast, Focus contrast, Warning, Error, Success, Positive and Negative color controls to the Colors config section

---

{{< link-heading "h4" "2020-09-23" >}}

**Bug fixes:**

- Fixed alignment issue of checkboxes on view document modal.
- Fixed issue where transaction limits were not loading.

---

{{< link-heading "h4" "2020-09-21" >}}

**Bug fixes:**

- Fixed broken navigation CSS in the onboarding flow.

**New features:**

- Added the UI for the Business Extension.
- Added the UI for the Kraken Extension.
- Added the UI for the VoucherMoney Extension.

---

{{< link-heading "h4" "2020-09-10" >}}

**Bug fixes:**

- Fixed pagination and ordering issue on Conversion pairs page in the Conversion Extension.

---

{{< link-heading "h4" "2020-08-31" >}}

**Bug fixes:**

- Fixed an issue where adblockers were causing a critical failure when blocking sentry.

---

{{< link-heading "h4" "2020-08-24" >}}

**Bug fixes:**

- Fixed email console error bug on transactions.

---

{{< link-heading "h4" "2020-08-21" >}}

**Bug fixes:**

- Fixed issue where the user documents listing page was not ordering correctly.

**Changes:**

Improved functionality when viewing a user's uploaded KYC document:
- Admins can now more clearly see  document's expiry date. Dashboard will display a warning if it is past its expiry date.
- Admins will see a warning when a user is under 18 years of age on proof of identity documents.
- Added a link to the user's detail page when viewing their document from the user documents listing page.
- Added additional KYC checkboxes for an admin to mark off whether the document is the full document (not missing any pages), of sufficient image quality and is a color document. These checks are stored as metadata on the document.
- Admins can now see the date a document was uploaded on when viewing the document.

Other:
- Added branch address to both company and user bank accounts.
- Admins must now add an account to a product before they are able to save it.

---

{{< link-heading "h4" "2020-08-06" >}}

**Changes:**

- Admins can now set an id and a number when adding a card in the Chipless Card Terminal Extension.
- Admins can how set updated fees on individual user account currencies.

---

{{< link-heading "h4" "2020-08-03" >}}

**Bug fixes:**

- Fixes issue where reward credit account was not being set when creating a new campaign.

**Changes:**

- Added currency object information to the currency overview page.
- Adds Flash extension UI

---

{{< link-heading "h4" "2020-07-29" >}}

**Bug fixes:**

- Fixed issue where notification name would not allow capital letters when editing.
- Fixed bug where timeframe and max per user per timeframe fields would be overwritten when editing a Rewards campaign.

**Changes:**

- Added the ability to MFA an API token created by an admin user if they currently have MFA enabled on their account.
- Added the ability to set a credit account by account reference on a reward campaign.
- Removed defunct `request_payment` action control from the app config.

---

{{< link-heading "h4" "2020-07-23" >}}

**Changes:**

- Subtype controls on the main Transaction settings page are now sorted by debits and credits.
- Fixed the sorting by label of subtypes in all subtype controls. 
- Added subtype controls to user accounts. 
- Subtype descriptions can now be viewed on subtype controls by hovering over the subtype label.

---

{{< link-heading "h4" "2020-07-21" >}}

**Bug fixes:**

- Fixed issue with subtype controls where it appeared as if they were not saving properly. 
- Fixed issue with tier subtype controls where subtypes turned off for one tier appeared to also be turned off for another when going to that tier.

**Changes:**

- Added alternating colour backgrounds to subtype controls to make it easier to see which one you're working on.
- Increased the panel space for subtype switches and moved Type to the left of Subtype label.
- Split Group subtype controls and Tier subtype controls into separate menu items in the Transaction settings section of Groups.

---

{{< link-heading "h4" "2020-07-17" >}}

**Changes:**

- Added Tier name field back to group tiers section.
- Added recipient account setting to reward campaigns.

---

{{< link-heading "h4" "2020-07-16" >}}

**Bug fixes:**

- Fixed issue where group name was not being sent in the request when editing a group tier.
- Fixed issue where the display of the uploaded company icon was being stretched out of proportion on the company info page.

**Changes:**

- Amended product image help text to include image size limitation.

---

{{< link-heading "h4" "2020-07-15" >}}

**Bug fixes:**

- Fixed issue where it was possible to create a Reward campaign without adding a debit account which funds reward transactions.

**Changes:**

- Added helper text for image size when uploading a product image in the Product Extension.
- Updated builder templates.

---

{{< link-heading "h4" "2020-07-09" >}}

**Changes:**

- Removed defunct 'Scan' option from App config.
- Updated fee name tooltip when adding or editing a fee on a group tier.

---

{{< link-heading "h4" "2020-07-08" >}}

**Changes:**

- Added a new permission in groups and users for both admin and user permissions - `device`. This permission gives permission to access to a list of a user's mobile devices.
- Any newly created group will auto-generate with the user permissions for devices.

**New features:**

- Added Push notifications UI to the Notifications extension. Admins are now able to add push notifications to their company.
- Admins can view in Notification Extension -> Settings -> Push notifications whether push notifications are enabled for their company. 
- Push notifications need to be enabled for a company by Rehive. Currently, if you are a Premium or Enterprise client you can request push notifications be enabled from the Notification Extension -> Settings -> Push notifications page.

---

{{< link-heading "h4" "2020-07-07" >}}

**Bug fixes:**

- Fixed issue where uploaded company logos and uploaded company icons were not displaying on the company settings page

**Changes:**

- Added `account name` filter to the Transactions and Transactions stats pages.
- The Chipless  Card Service has been updated to allow admins to set a pin on a card when creating or editing a card. An admin can also set a new pin on an existing card.

---

{{< link-heading "h4" "2020-07-06" >}}

**Bug fixes:**

- Fixed spinner bug where a large spinner was displaying in the task viewer when generating an account or account currencies export.
- Fixed misaligned radio buttons when adding a user to a group via the group user page.
- Fixed issue where a validation popup was incorrectly showing up when clicking the colour edit button when adding a group.

**Changes:**

- CSV will now be selected by default when exporting accounts or account currencies.

---

{{< link-heading "h4" "2020-07-03" >}}

**Changes:**

- Added fee name field to transaction settings in groups. This will allow lower level fees with the same name to override the higher level fee. Fee name functionality still needs to be added to the user account currency fees.
- Added the ability for admins to choose between a standalone account and a user account for the fee credit account.

---

{{< link-heading "h4" "2020-06-18" >}}

**New features:**

- Added the Chipless Card Service UI to the Dashboard.

---

{{< link-heading "h4" "2020-06-03" >}}

**Bug fixes:**

- Fixed the missing reference for assigning Stellar transactions.

---

{{< link-heading "h4" "2020-06-01" >}}

**Changes:**

- Switched from a modal to a page when adding new default subtypes.
- Added 'Add default subtypes' text link to manual onboarding in the subtypes section.

---

{{< link-heading "h4" "2020-05-27" >}}

**Bug fixes:**

- Fixed issue where last login on the user details page displayed as `.` instead of `--`.

**New features:**

- Added the interface for the Stripe Extension.

---

{{< link-heading "h4" "2020-05-21" >}}

**Bug fixes:**

- Fixed issue where order id and products were not showing up on the transaction modal for purchases.
- Fixed issue where app config was not loading correctly.

**Changes:**

- Updated placeholder URLs in company info for password set, password reset and email verify.
- Updated the "Allow session durations" label in Company settings to "Allow custom session durations".
- Added updated date to transaction modal.
- Added address type to document review modal.

---

{{< link-heading "h4" "2020-05-18" >}}

**Changes:**

- Added "Default subtypes" button to the subtypes page. Admins can now see a list of Rehive's default subtypes and their descriptions and select which ones they would like to add.

---

{{< link-heading "h4" "2020-05-11" >}}

**Bug fixes:**

- Fixed bug when editing a product category.

**Changes:**

- Added new field to virtual products: virtual redemption.
- Added allow/disallow and disallow currency-specific subtype switches to transaction settings in groups.
- Added allow/disallow subtype switches to main transaction settings page.
- Added allow/disallow subtype switches on currency settings in user accounts.

---

{{< link-heading "h4" "2020-04-17" >}}

**New features:**

- Admins can now upload icons to groups.

---

{{< link-heading "h4" "2020-04-15" >}}

**Changes:**

- Configuration tweaks to the Sandbox, Points an Rewards templates.

**New features:**

- Admins can now see activity logs for a specific user, accessible from the user's details page.
- Admins can now archive or delete currencies.


---

{{< link-heading "h4" "2020-04-08" >}}

**Bug fixes:**

- Fixed copy typo on the manual onboarding page.

**Changes:**

- Amended copy on the template selection page for Sandbox template.

---

{{< link-heading "h4" "2020-04-07" >}}

**Bug fixes:**

- Fixed an edge case bug where sometimes admins could not create a transfer between a user's accounts if they selected a currency and amount before selecting a user.

**Changes:**

- Updated the Sandbox template configuration.
- Added warning for manual configurations as well as links to the Standardisation document on the Get Started page.

**New features:**

- Rehive has introduced 2 new templates: Points and Rewards templates.

---

{{< link-heading "h4" "2020-03-09" >}}

**Bug fixes:**

- Fixed issue where `enable` button was not showing up when a warmstorage address was disabled in the Stellar Extension.
- Fixed issue where note on warmstorage address was not showing up in the Stellar Extension.
- Editing and deleting subtypes in the Stellar Extension no longer visually bugs out.

**Changes:**

- Removed x icon from warmstorage selection dropdown in the Stellar Extension. Replaced it with an arrow to indicate it is a close not a remove button.
- Added toast message to notify admins that a note has been successfully added to the warmstorage in the Stellar Extension.
- Updated link to documentation int he Stellar Extension.
- Changed how API tokens are added. Made it more clear on whether an admin is adding a permanent or custom token.
- Admins can now view unassigned user deposits for the Stellar Extension and assign those to Rehive users.
- Removed product id and instant buy columns from the Product listing page in order not to hide the edit button due to a scroll bar on small screens.
- Admins can now choose an account for rewards, products and conversions by searching for either a user or an account reference. 
- When adding a new account, admin can select whether to associate the account to a user or make it a standalone account.
- Admins can now filter accounts by whether they are standalone accounts or not.

---

{{< link-heading "h4" "2020-03-05" >}}

**Bug fixes:**

- Fixed issue where when viewing a user-uploaded document, the status dropdown was empty.
- Fixed display issue with trial banner where certain objects on Dashboard would appear above it.

**Changes:**

- Admins can now see when a company is a test company.
- Added shortcuts to credit, debit and transfer to the user details page.
- On register, admin can now select whether a company is a test or production company.
- Updated the design of the account modal on the Accounts listing page.
- All companies created by the builder are now public by default.
- Updated wording on billing page.

**New features:**

- Admins can now add a BIMI selector heading setting to notifications in the Notifications Extension.

---

{{< link-heading "h4" "2020-02-20" >}}


**Bug fixes:**

- Fixed issue where basic user info would bug out on user details page if conversion extension was not active.

**Changes:**

- Added link to basic custom config on company info page.
- On Dashboard password reset page made it more clear that company id is required, not the company name.
- Added a new filter to the transactions and user lists. Admins can now filter transactions and users by temporary users.
- Updated the Sandbox template to include conversion pairs.

---

{{< link-heading "h4" "2020-02-17" >}}

**Bug fixes:**

- Fixed issue where MFA SMS notification was not showing up in the list of added notifications in companies created by the builder.

---

{{< link-heading "h4" "2020-02-12" >}}

**Bug fixes:**

- Fixed issue where the withdraw button on Stellar management page caused an error.
- Fixed link to voucher code example csv.


**Changes:**

- If an admin has not verified their email address a reminder to do so will be displayed in the trial banner. A link to resend the verification is also included on the banner.
- When viewing a product, currently selected categories are now displayed without having to open the edit categories modal.
- Values for enums and choice fields have been changed.
- Renamed "Company email" to "System email". This field is now a required field. This field will be automatically populated with the company owner's email address - it can be updated at any time. Any system or notification extension emails will send "from" this system email.
- Updated the Sandbox template to include more reward campaigns, physical products and USD currency.
- Removed 'bank account' from tier requirements.  Moved 'address' out of Basic information in tier requirements and placed it in its own section called 'Address'.
- Added a new information page to the Mass Send Extension. This page explains how to use the Mass Send Extension.
- Tweaked the design of the exports dropdown.
- Changed default transactions columns to exclude id and include note.
- Notifications are now ordered alphabetically.
- Updated add/edit conversion pair modal. Quote duration is no longer a required field. Updated the placeholder text for Path value when 'Path' is selected. Updated quote duration info text.
- Admins can now click "Use default" buttons next to password set url, password reset url and email verification url in Settings -> Company info if they want to use the Rehive App's default urls.


**New features:**

- When editing products or notifications admins now have access to additional save options. Admins can now save and keep editing, save and add another product or notification, or save and go back to the list of products/notifications. 
- Admins can now add a contact email and a support email to their company information.
- Subtypes can now have extra limitations placed on how they are used. They can be set such that they can only be used in once-off transactions or only in transfers, or without any extra limitations.
- Admins can now set that subtypes are required for all transactions.
- Admins now have a UI for the app config. This can be found in Settings -> App config.
- Admins can now view a list of pending user documents as part of our expanded KYC functionality. From this list of pending documents, admins can verify documents individually. 

---

{{< link-heading "h4" "2020-01-10" >}}

**Bug fixes:**

- Fixed issue where Dashboard would load endlessly if localstorage parameter was not set correctly.
- Fixed issue where transaction popup was not working due to failing check for rewards and product extensions.

**Changes:**

- Changed how product categories are stored, fetched and managed in localstorage. 

---

{{< link-heading "h4" "2020-01-02" >}}

**Changes:**

- Updated how coldstorage keys are added to mainnet Stellar.
- Added unfunded Bitcoin transaction management for admins. Admins can now approve or decline unfunded Bitcoin transactions.
- Added TOML file management to settings page in Stellar extensions.
- Added auto generation and download of TOML file to Stellar extensions.

---

{{< link-heading "h4" "2019-12-23" >}}

**Bug fixes:**

- Fixed caching issues that occured when localstorage was deleted. 

**Changes:**

- Added billing to the Rehive Dashboard. Admins can now activate and manage their Rehive subscription from the Dashboard.
- Implemented new template and template builder functionality onboarding.
- In the Bitcoin extension we now display the onchain balance for xpubs when an admin selects an xpub from the dropdown to view.

---

{{< link-heading "h4" "2019-12-10" >}}

**Changes:**

- Added ability for admins to create daily, weekly or monthly reward campaigns.
- Admins can now set the limit a user can be rewarded per timeframe, i.e. twice per day in a daily campaign.

---

{{< link-heading "h4" "2019-11-27" >}}

**Changes:**

- Admins are now able to make transfers to users who don't exist in the Rehive system yet.
- Added a basic Mass Send extension page where admins are now able to disable the extension.
- Removed recent transactions from crypto extensions UIs.
- Updated Dashboard for transaction collections. Admins can view the collection Id of transactions, related transactions in the collection, and can filter by collection Id.
- Updated fees to work with new transaction collections. Admins can now add a fee description and set which subtypes the debit and credit portions of the fee are set to. Admins can set a destination account for the credit potion of the fee transaction.
- Added new webhook event `mfa.sms.verify`.

---

{{< link-heading "h4" "2019-11-21" >}}

**Bug fixes:**

- Fixed issue with the currency filter where it displayed all currency options instead of ones activated on the company.
- Mobile recipient snow correctly display on the transactions page and on the transaction modal.
- Fixed display issue on the tier limits page.
- Fixed issue where product supplier accounts were not showing up and would be overwritten as empty when editing the product.

**Changes:**

- Groups are now automatically given user permissions for subtypes when they are created.
- Temporary users are now listed in a grey color in the users list. On the user page of a temporary user a banner now displays informing admins that the user is a temporary one.
- Updated the Stellar and Bitcoin warm wallet pages. Admins can now add multiple xpub addresses to the warm storage and set which one is primary and each can have a note set and will display how many addresses were generated from the key. Warm storage accounts can be disabled. Admins can now see the on-chain balance of the warm storage account. 

---

{{< link-heading "h4" "2019-11-05" >}}

**Changes:**

- Added the ability to set the subtypes for Stellar and Bitcoin extensions for `credit` (deposit), `debit` (send), `fund`, `issue`, `fee`, and `withdraw` transactions. Admins can have Rehive create and set recommended subtypes for each type of transaction.
- Admin can set which groups are considered 'default' by the Stellar and Bitcoin extensions and will have the TXLM/TXBT/XLM/XBT currencies added to their group account configuration.
- In the Stellar extensions, admins can now add a domain where the company's `stellar.toml` file with Federation address information can be found. This will activate the ability for users to set and use Federation addresses when making Stellar transactions on the company.
- When viewing crypto transactions in the Rehive transaction modal, sender and recipient addresses are now linked to blockexplorers to view the transactions.
- Admins can now approve or decline crypto withdrawals from the Rehive transaction modal. Withdrawals will change status until an admin takes action. Once an admin approves a withdrawal it is sent to the blockchain.
- When admins add a known Stellar asset, if that asset's issuer address has a `stellar.toml` file associated with it, the extension will find it and display any associated information for the asset e.g. description, name, unit, logo etc.

---

{{< link-heading "h4" "2019-10-31" >}}

**Changes:**

- The Rehive account reference and the public address of the hot wallet account are now displayed on the hot wallet.
- Admins can now toggle allowing crypto sends on or off on the hot wallet.
- Withdrawals from the hot wallet will no longer be automatically processed, an admin must approve them first. On the hot wallet page a banner will display informing the admin if there are any pending withdrawals. Admins can click on the banner to approve or decline them. They will be taken to a filtered view of the transactions list with all pending crypto withdrawals where they can approve or decline them.
- Admins can now withdraw funds from the hot wallet to an external wallet.
- The hot wallet will now display its Rehive balance and its on-chain balance to assist admins with recon.
- A link to the total fees for XLM/TXLM/XBT/TXBT will now be displayed on the hot wallet. 
- Admins can view transactions associated with each currency on the hot wallet. The "View transactions" links will take an admin to a list of transactions filtered by the hot wallet account and the currency.
- Admins can now see the last 10 hot wallet transactions.

---

{{< link-heading "h4" "2019-10-16" >}}

**Bug fixes:**

- Fixed issue where sometimes "claim" was deselected when editing a reward campaign.

**Changes:**

- Improved design of checkbox selections and category selection on creating/editing products.
- Adjusted row highlight colour on user accounts page.

---

{{< link-heading "h4" "2019-09-24" >}}

**Bug fixes:**

- Fixed issue where token was not displaying after creation.
- Fixed bug where limit type was not being displayed correctly in Tier limits.
- Fixed a styling issue on the add access control modal.
- Removed duplicate search icon on tablet responsive view.

**Changes:**

- Added hover links on user's accounts page. 
- Added link to download Rehive's mobile application on Android or iOS.
- Added delete icon to user page.

---

{{< link-heading "h4" "2019-09-13" >}}

**Bug fixes:**

- Fixed issue where admins were not being correctly redirected to the notifications list after creating a notification.
- When viewing an account modal, the "view transactions" link was not working. It now links an admin to the transactions page filtered by the account reference.

**Changes:**

- Made Text field mandatory when creating a notification, as notifications will not send if this field is blank.
- Admins can now set a custom quote time for a conversion pair.
- When clicking the "Clear" button on filters, the filters popdown now automatically closes.

**New features:**

- Admins can now view and export historical balances for a specific currency and or account in a new "Account currencies" section in accounts.

---

{{< link-heading "h4" "2019-09-12" >}}

**Changes:**

- Improved display of required information on orders.

---

{{< link-heading "h4" "2019-09-04" >}}

**Bug fixes:**

- Fixed an error where the save button read "Create" instead of "Save" when editing a conversion pair. 
- Fixed an issue where filtering by Bitcoin address on the users list was not working.
- Fixed small visual bugs and improved styling of crypto details on transaction modal.


**Changes:**

- Added order id and products list to the transaction modal of `purchase` subtype transactions. The order id also links to the order.
- Admins can now create credits or deposits and process withdrawals via dropdowns in the search popdown when searching by account reference.
- On the Users page, filter options are now listed alphabetically.
- Improved performance when fetching Stellar or Bitcoin information on a user's Details page.
- In filters on the transaction list page, subtype filter options are now in alphabetical order.


**New features:**

- Admins can now create and manage categories for products.

---

{{< link-heading "h4" "2019-09-01" >}}

**Bug fixes:**

- Fixed an issue where the transaction modal would not open for bitcoin withdraw transactions.

---

{{< link-heading "h4" "2019-08-31" >}}

**Changes:**

- Admins can now see a user's display currency on their user details page.
- Admins can now associate a supplier account to a product. When products are purchased, the credit transaction will be directed to the associated supplier account.
- Admins can now fail payments on orders. This fails any associated transactions and the order itself.

---

{{< link-heading "h4" "2019-08-30" >}}


**Bug fixes:**

- Fixed an issue when editing Orders - the save button was not highlighting correctly despite all required fields being entered.
- Fixed an issue where columns were not being correctly refreshed after being added.


**Changes:**

- Admins can now view Stellar extension crypto details in the Rehive transaction modal. Details displayed are transaction hash, memo, sender public address and recipient public address.
- Admins can now view a user's last logged in date on the transaction modal.
- Admins can now see when a user's MFA status was updated on the transaction modal.
- On the Orders page, when viewing an order, admins can hover over a user ID to see the associated user email.
- Added a downloadable example csv on the add vouchers page showing the correct format the import requires.
- Moved edit and delete shortcuts on the orders page out of the ... menu and onto the listing page.
- Added `website` field under user info on the user details page.
- Updated amount filters to be greater than/less than and equal to instead of only greater than/less than. Amounts returned are also absolute rather than relative - both negative and positive amounts will display. To view only debits or credits filter by transaction type.

---

{{< link-heading "h4" "2019-08-27" >}}

**Bug fixes:**

- Fixed issues with crypto info filtering on users.

**Changes:**

- Admins can now select/view a "type" when adding/viewing an address for a user.
- Admins can now specify required information on a product. Admins can set shipping address, billing address, mobile number and or email address as required.
- Any info which is required on a product in an order is now displayed when viewing an order.

---

{{< link-heading "h4" "2019-08-26" >}}

**Bug fixes:**

- Fixed an issue where products could not be edited.
- Fixed a bug with the transaction helper where admins were unable to change transaction type after turning off the transaction helper.
- Fixed a bug where percentage was being sent through as incorrect number type and causing a bug in percentage rewards.
- When editing a reward campaign, expressions now correctly display.
- Fixed an issue where completing a pending withdraw transaction overrode metadata.

**Changes:**

- Admins can now view reward details on the related transaction on the transactions list. Admins are also now able to accept or reject a request reward from the transaction modal.
- Added `Active` and `Visible` checkboxes to the Reward campaigns listing page to allow for faster reward campaign management. Moved edit/delete links out of the ... menu and onto the listing page.
- Removed date limits on reward campaign start/end dates.
- Added the ability to filter users on the user list by Stellar memo or Bitcoin address.
- We now display a user's Stellar memo, address and federation address as well as Bitcoin address details on the user details page.
- Removed defunct username and address fields from the Stellar extension users list.

---

{{< link-heading "h4" "2019-08-14" >}}

**Changes:**

- Added the ability to filter by balance on the accounts page.

---

{{< link-heading "h4" "2019-08-10" >}}

**New features:**

- Added the ability to export data from the accounts page based on an admin's filter selection.

**Changes:**

- Added the ability to add conversion pairs to allow for currency exchange via the Conversion extension.

---

{{< link-heading "h4" "2019-08-07" >}}

**Bug fixes:**

- When viewing an account's details on the Accounts page, the user group now correctly shows.
- Fixed display of Balance and Status fields on the Rewards listing page.
- Fixed two edge case bugs with the transaction helper where users did not have a primary account or an email address.


**Changes:**

- On the account details modal on the Accounts page, a user's email address now links to their user details page.
- On the account details modal on the Accounts page, there is now a 'manage' link next to each currency so admins can easily manage the settings.
- Updated template config to more simplified and  clean version.
- Updated the tokens UI under the developer section.
- Added more shortcuts to the search results popdown. Admins can now create a credit deposit, process withdrawals, or credit a user via quick links in the search popdown. 
- Added a new permission, `transactionsubtypes`.
- Improved the search to search by Account.

**New features:**

- Admins can now upload and manage voucher codes for virtual-type products in the Product Extension. Codes can be uploaded individually or imported via a CSV file.
- Admins can globally switch subtypes on or off. This setting can be accessed via going to Transactions -> Settings.

---

{{< link-heading "h4" "2019-07-07" >}}


**Changes:**

- Added character counter to product description.

**New features:**

- Transaction helper. Admins can enable a transaction helper that will make the operational aspects of specific types of transactions easier e.g. credit deposit, transfer deposit. Transaction fields are ordered and arranged in a logical format for the operation being done.

---

{{< link-heading "h4" "2019-07-02" >}}

**Bug fixes:**

- Thumbnails of uploaded logos are no longer distorted on the settings page.
- Updated placeholder help text for "Terms and conditions url" and "Privacy policy url" fields in Company Settings to have more relevant examples.

**Changes:**

- Added sentry error tracking to the Dashboard.
- When creating or editing a notification, events are now listed in alphabetical order.
- Doubled the height of the Company config field inside Company info.
- Added an information tooltip to the "Public" toggle in Company info to explain its use.
- Added "Stellar" as a Crypto type option when viewing/editing/creating a user's external crypto account. 
- Added radio buttons to distinguish between testnet and mainnet crypto account addresses for Bitcoin and Stellar addresses.

**New features:**

Added manual withdrawals operational features for the admin. Managing withdrawals in Rehive Dashboard is now more user-friendly and helps admins pick up suspicious activity more easily for manual withdrawals:

- Users' KYC and MFA status on the transaction details page.
- An easy 'Approve' button has been added to quickly complete the transaction.
- Users' selected withdrawal bank account details are now displayed on the transaction modal and are all copyable. 
- Admins can see the KYC status of a user's bank account as well as when it was created and updated.
- Admins will be alerted if there have been any recent duplicate withdrawals on the account.

---

{{< link-heading "h4" "2019-06-11" >}}

##### Extensions update

In this release there were major updates to 3 Rehive Extensions: Conversion, Product and Rewards.

**Conversion Extension updates:**

- When the Conversion extension is active, for all non-custom currencies, rates will now be automatically calculated. Admins can override this and set a rate pair if they would like a custom rate.
- Defined rate pairs can now be pegged to another rate pair's value.
- Admins can now set the default Display currency for their company, to be used in the user applications.

**Product Extension updates:**

- Added "Instant buy" flag to products - indicates which products can bypass a cart when buying.
- Added countries whitelist to display a product only in the specified countries.
- Added `supplier` field.
- Added metadata field.
- Added a short description. Increased the size of longer product description field.
- Changed product type - type can only be selected from a predefined list now. Either `virtual` or `physical`.
- Images can now be added to products.
- Each individual product in an order can have a status set e.g. shipped, fulfilled, etc.
- Orders now display the date the order was placed, in addition to the date the cart was created.
- Order status can now be updated to `placed`, `pending`, `failed`, `complete`.
- Admins can now create payments for an order if the user has funds (in the case where a user has run into some error and cannot pay).

**Rewards Extension updates:**

- Campaigns can be defined as 'claim' type campaigns. This means users have to claim/request a reward.
- Campaigns can require an event and an expression to be evaluated against before a reward is issued. Campaigns can't be both claim and event based.
- Admins can set event amounts and event IDs for event campaigns. These fields can be used to reward users a percentage of a transaction or to reward a referee in a referral program.
- Several fields were renamed for simplicity.
- Campaigns can now have a default status - this refers to the status a reward will have by default once claimed or earned via an event by a user.
- Admins can now limit campaigns to specific groups.

**Bug fixes:**

- Fixed an issue on the Stellar Extension where admins could not add an asset.

**Changes:**

- Removed defunct accounts API calls in the Rewards Extension which were slowing down the page.
- Updated template custom asset description to "DEMO token" from "Demo asset."
- Renamed template subtype `purchase` type credit to `sale`.
- Updated currency list.

---

{{< link-heading "h4" "2019-05-13" >}}

**Bug fixes:**

- Fixed an issue where, when searching for an email address, if a user clicked on "Show more results" for the transaction results, the results page would break.
- Fixed issue where focusing the search bar caused an empty search preview pop-down to flash onscreen momentarily.

---

{{< link-heading "h4" "2019-05-11" >}}

**Changes:**

- Made group names clickable and removed hexagons.
- Subtypes are now ordered alphabetically.
- Changes group description field to a large text area.
- Implemented an alternative version of the search. Search is only triggered by pressing enter.
- Implemented Rehive friendbot call for funding Stellar testnet assets during the template build.

---

{{< link-heading "h4" "2019-04-30" >}}

**Changes:**

- When adding a notification or bulk adding notifications, templates are now listed alphabetically.
- Increased the number of notifications shown on the notifications list.
- Added a character counter to the `Expression` field when adding a notification.
- Updated the field used on the Transaction stats page to use `total_amount` instead of `amount`.

**Bug fixes:**

- Fixed a bug where admins were unable to change the status of a user's crypto account.
- Documents uploaded by users now retain their original ratio instead of being distorted.
- Group tiers are now correctly ordered in descending order.
- Fixed a bug where admins could not update basic info on the user details page.
- Fixed an issue where `issue` subtype was not being correctly applied to the transaction funding the hot wallet with DEMO token. Funding an admin's reward account was also incorrectly using the `reward` subtype - this has been fixed to use the `fund` subtype.
- Fixed an issue where pages were blank when accessed via the left menu from a subpage.

---

{{< link-heading "h4" "2019-04-25" >}}

**New features:**

- Admin users can now set their confirmation limit in the Bitcoin and Bitcoin testnet extensions.

**Changes:**

- Changed the layout of the Extensions page.
- Updated the Rehive logo on the login/register pages and adjusted the spacing of the logo and buttons.
- Increased the size of the `description` field when creating a subtype.
- Moved 'subtype' field out of advanced options when creating a transaction.
- Added `debit subtype` and `credit subtype` fields to the transfer.
- Changed "more details" field on a webhook log to say "data" instead.
- When logged in, an admin can change the image on the top right via their profile page.
- Updated the result sets end points in line with Platform deprecation timeline.
- Lowered the "Back to templates" link on the manual company set up page so as not to conflict with the logo link.
- When a user tries to log in to the Dashboard, if their credentials do not work, the password field is now cleared.
- When a 0.00 amount transaction is made the 0.0 value is now displayed in the "amount" column on the transaction list page.

**Bug fixes:**

- Fixed an issue where the `account` field was required when editing a reward campaign.
- Fixed a bug where adding bulk SMS notifications added each notification twice.
- Fixed alignment issue where the "Delete permanently" button did not line up with the "Cancel" button when deleting a tier.

---

{{< link-heading "h4" "2019-03-29" >}}


**New features:**

- We are proud to introduce Rehive's first fintech template - a rewards and loyalty application on Stellar. The template will automatically configure a multi-currency app with powerful extensions including mass payments, rewards, the product marketplace and notifications with a custom token on Stellar's test network.

**Enhancements:**

- Improved the top search. Admins can now search for users, transactions or accounts by an account reference. 
- Admins can now upload a profile picture to their profile which will appear on the top right of the header.
- Adjusted visual aspects of the Get Started and Try the Application pages. Added more convenient back button to Try the Application page.
- Changed the colour of "off" toggles to grey so that it's more obvious when a setting is off. The previous "off" colour was too close to the "on" colour.

**Changes:**

- Hotfix to fix aesthetic bug with the header on the Template page.
- Hotfix to fix a URL issue during template building.

**Bug fixes:**

- Fixed a bug where Bitcoin extension dashboard redirected to Bitcoin testnet extension UI.
- Fixed a bug where users were unable to update a price of a product in the Product extension.

---

