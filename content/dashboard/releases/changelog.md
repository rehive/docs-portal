---
date: 2018-09-17T15:21:22+02:00
title: Changelog
description: Dashboard changelog.
weight: 1
---

Summary of additions and changes to the Rehive Dashboard. 

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
- Added link to download Rehive's mobile wallet on Android or iOS.
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
- Admins can now set the default Display currency for their company, to be used in the user wallets. 

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

- We are proud to introduce Rehive's first fintech template - a rewards and loyalty wallet on Stellar. The template will automatically configure a multi-currency app with powerful extensions including mass payments, rewards, the product marketplace and notifications with a custom token on Stellar's test network.

**Enhancements:**

- Improved the top search. Admins can now search for users, transactions or accounts by an account reference. 
- Admins can now upload a profile picture to their profile which will appear on the top right of the header.
- Adjusted visual aspects of the Get Started and Try the Wallet pages. Added more convenient back button to Try the Wallet page.
- Changed the colour of "off" toggles to grey so that it's more obvious when a setting is off. The previous "off" colour was too close to the "on" colour.

**Changes:**

- Hotfix to fix aesthetic bug with the header on the Template page.
- Hotfix to fix a URL issue during template building.

**Bug fixes:**

- Fixed a bug where Bitcoin extension dashboard redirected to Bitcoin testnet extension UI.
- Fixed a bug where users were unable to update a price of a product in the Product extension.

---

