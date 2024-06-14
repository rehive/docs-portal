---
date: 2018-09-17T15:21:22+02:00
title: Changelog
description: Web application changelog.
weight: 1
---

Summary of additions and changes to the web application.

--- 

{{< link-heading "h4" "2024-06-14 - 2.24.36" >}}

**Enhancement**
- Updated the ability for multiples of an item to be added to the cart under Products.

**Bug fixes**
- Fixed a loading issue with the start shopping pop-up modal on the Products landing page.
- Fixed an issue with options and variants not saving correctly while editing a product in the pricing and quantity tab.
- Resolved an issue where prices and categories were not saving correctly when editing products.

--- 

{{< link-heading "h4" "2024-06-11 - 2.24.35" >}}

**Change**
- Updated to ensure alphabetical ordering for product sub-categories.

--- 

{{< link-heading "h4" "2024-06-03 - 2.24.34" >}}

**Change**
- Fixed broken two-factor authentication QR code on sign up flow.

--- 

{{< link-heading "h4" "2024-05-22 - 2.24.33" >}}

**Change**
- Added the deactivation verify page to the account deactivation flow.

--- 

{{< link-heading "h4" "2024-05-16 - 2.24.31" >}}

**Change**
- Addition of request delete and verify delete pages for the account deletion flow.

--- 

{{< link-heading "h4" "2024-04-18 - 2.24.30" >}}

**Changes**
- Fixed a bug to ensure that reward campaigns that are restricted by a group, do not show for that group.
- Added a warning message to let users know when they need to top up their insufficient balance to proceed to checkout.
- Added confirm and success messages to the transaction flow.
- Enhanced to include the user's profile picture on the request transaction item in the account requests list.
- Amended the max button to include fees in the transaction flow.

--- 

{{< link-heading "h4" "2024-03-21 - 2.24.29" >}}

**Bug fix**
- Fixed for MFA challenges that were not completing after creating API tokens on an MFA enabled business user.

--- 

{{< link-heading "h4" "2024-03-12 - 2.24.28" >}}

**Changes**
- Fixed to allow users to select a currency when using the Pay with Stellar option on the PRS checkout flow.
- Enhanced the user interface for displaying currencies linked to other products.
- Resolved an issue where previously selected currencies failed to save after navigating between tabs.
- Implemented a solution to use the account definition instead of the user account reference to fetch currency details.

--- 

{{< link-heading "h4" "2024-03-01 - 2.24.26" >}}

**Changes**
- Allowed for the ability to hide additional fields in the app configuration.
- Added a pre-loading state to the SEP-24 Transaction Form.

--- 

{{< link-heading "h4" "2024-02-22 - 2.24.25" >}}

**Changes**
- Updated how the wallet gets crypto details for a currency within it's various flows.
- Implemented the linking of account actions to subtypes.

--- 

{{< link-heading "h4" "2024-02-15 - 2.24.24" >}}

**Changes**
- Implemented updates to how orders are managed.
- Actioned improvements to do with error messages in mass sending.
- Updated an error message in the developer API token creation.
- Updated the structure of the data returned by the Business Extension.

--- 

{{< link-heading "h4" "2024-01-31 - 2.24.23" >}}

**Fixes**
- Implemented a text edit in the payment request flow.
- Revised the conversion settings on the "Create New Sale" QR screen.
- Ensured user session creation after logging in with MFA in the SEP-24 widget.
- Enabled the option for users to hide the deposit/withdrawal selection in the SEP-24 production flow.
- Updated to the latest version of the Rehive JavaScript Library for password updates.

--- 

{{< link-heading "h4" "2023-11-28 - 2.24.19" >}}

**Fixes**
- Actioned an update to improve subtype filtering 
- Updated the display message for when crypto and bank accounts are applied in the configuration 
- Removed unnecessary white space on the home transaction card 
- Fixed custom processor currency patch using an incorrect currency code 

--- 

{{< link-heading "h4" "2023-11-09 - 2.24.18" >}}

**Fixes**
- Implemented an update for multi-fee handling.
- Added support for the custom payment processor in the PRS checkout flow. 

--- 

{{< link-heading "h4" "2023-10-30 - 2.24.17" >}}

- Fixed issues relating to deposit types and config in the Withdraw flow.

--- 

{{< link-heading "h4" "2023-10-20 - 2.24.15" >}}

- Fixed how added limits are displayed in the Withdraw flow. 

---

{{< link-heading "h4" "2023-10-19 - 2.24.14" >}}

- Fixed a divisibility error relating to the transaction amount in the Withdraw flow. 

---

{{< link-heading "h4" "2023-10-16 - 2.24.13" >}}

**Fixes**
- Fixed a string error for a resend OTP issue on sign-up. 
- Fixed a web rigid issue relating to responsiveness on the home page. 

---

{{< link-heading "h4" "2023-10-16 - 2.24.12" >}}

- Completed a Hotfix for a logic issue that was affecting tier fees. 

---

{{< link-heading "h4" "2023-10-02 - 2.24.10" >}}

- Implemented the invoking of the logout API when a user clicks UI logout button.  

---

{{< link-heading "h4" "2023-09-07 - 2.24.6" >}}

- Updated transaction success screen continue button label.

---

{{< link-heading "h4" "2023-08-16 - 2.24.4" >}}

**Fixes**
- Fixed react-scripts hot refresh issue 
- Updated date format in buy-sell-exchange flows 
  
---

{{< link-heading "h4" "2023-08-03 - 2.24.3" >}}

**Fixes**
- Updated PRS functionality to make payments using the correct operational account
- Updated PRS request handling to use the new API format/requirements
- Updated PRS transaction history handling to correctly label transactions.

---

{{< link-heading "h4" "2023-07-20 - 2.24.2" >}}

**Fixes**
- Updated left to right handling to fix issues with scrollbars.

---

{{< link-heading "h4" "2023-06-29 - 2.24.0" >}}

**Fixes**
- Fixed wallet warnings.
- Fixed admin type user onboarding issue.
- Fixed products list page currency option does not showing correctly.
- Implemented new FAQ configuration and design.
- Switched to new MFA endpoints and required changes.

---

{{< link-heading "h4" "2023-05-11 - 2.23.9" >}}

- Fixed stellar crypto account creation network type.

---

{{< link-heading "h4" "2023-05-10 - 2.23.8" >}}

- Updated staging environmental variable configuration

---

{{< link-heading "h4" "2023-05-04 - 2.23.7" >}}

- Reverted changes in v2.23.6 which caused issues with custom hostnames.

---

{{< link-heading "h4" "2023-05-02 - 2.23.6" >}}

- Fixed staging env variables.

---
{{< link-heading "h4" "2023-03-20 - 2.23.5" >}}

**Features**
- Remove wyre code to clean up codebase
- Fix incorrect tier check for onboarding redirect

---
{{< link-heading "h4" "2023-03-17 - 2.23.4" >}}

**Features**
- Hotfix: Fix redirect urls on email verify and password set forms

---
{{< link-heading "h4" "2023-03-16 - 2.23.3" >}}

**Features**
- Add e2e tests
- Update to Node 16

---
{{< link-heading "h4" "2023-03-14 - 2.23.2" >}}

**Features**
- In the Tiers section of the user's Profile, tier requirements are now clickable and link to the required field.

---
{{< link-heading "h4" "2023-03-07 - 2.23.1" >}}

**Fixes**
- Fixed issue where username was not correctly sending in the payload during registration.

---
{{< link-heading "h4" "2023-03-06 - 2.23.0" >}}

**Features**
- Added support for transaction messages.
- Made documents status more clear.
- Added arrow next to project name in the session header.

**Fixes**
- Fixed issue where deposit button would not show when users had a personal deposit action account for a currency if there was no company bank account with that currency as well.
- Changed default payment due date on invoices to 14 days.
- Updated company service to service slug and use of display_code in more places.

---
{{< link-heading "h4" "2023-03-03 - 2.22.1" >}}

**Fixes**
- Minor UI update: Swapped the News and FAQ Cards on the home page and rename the News card to Posts.

---
{{< link-heading "h4" "2023-02-28 - 2.22.0" >}}

**Fixes**
- Fixes payment requests multiplying issue.
- Fixes session redirect bug where users were not redirected to the login page upon session expire.

---
{{< link-heading "h4" "2023-02-16 - 2.21.0" >}}

**Features**
- Added ier support for deposit action - admins can set what tier is required to view deposit details.

---
{{< link-heading "h4" "2023-01-26 - 2.20.18" >}}

**Features**
 - Add automatic codebase packaging - dashboard downloads for Standard plan and higher
 - Update amount input currency to default to actual amount rather than display currency amount

**Fixes**
 - Fix product cart page item image responsiveness issue
 - Fix minor account name display issue
 - Add conversion details to exchange confirm and success screens
 - Fix Cancel button missing for invoice payment requests
 - Update ETH default logo
 - Fix minor product items API call issue

---
{{< link-heading "h4" "2022-11-10 - 2.20.17" >}}

**Fixes**
 - Hotfix: Fix display formatting for very small values

---
{{< link-heading "h4" "2022-11-09 - 2.20.16" >}}

**Fixes**
 - Hotfix: fix exchange validation issue

---
{{< link-heading "h4" "2022-11-09 - 2.20.15" >}}

**Fixes**
 - Fix issue with Buy max amount
 - Update display decimal places for cryptocurrencies

---
{{< link-heading "h4" "2022-11-01 - 2.20.14" >}}

**Fixes**
 - Fix withdraw fee calculation bug

---
{{< link-heading "h4" "2022-10-31 - 2.20.13" >}}

**Fixes**
 - Fix issue where withdraw hide action config disables crypto sends

---
{{< link-heading "h4" "2022-10-28 - 2.20.12" >}}

**Fixes**
 - Add additional cryptocurrencies to Settings > External accounts
 - Add option to add bank withdrawals for stellar crypto currencies

---
{{< link-heading "h4" "2022-10-05 - 2.20.11" >}}

**Fixes**
- Update to determine language direction using i18n library
- Update to support Platform authentication updates

---
{{< link-heading "h4" "2022-10-03 - 2.20.10" >}}

**Fixes**
- Hotfix: Currency conversion functionality not loading

---
{{< link-heading "h4" "2022-09-29 - 2.20.9" >}}

**Fixes**
- Fixes withdraw add account and send flow recipient issues on Wyre currencies

---
{{< link-heading "h4" "2022-09-28 - 2.20.8" >}}

**Fixes**
- Fix incorrect withdraw options for USD on Wyre companies

---
{{< link-heading "h4" "2022-09-23 - 2.20.7" >}}

**Fixes**
- Improvements to reduce API calls

---
{{< link-heading "h4" "2022-09-20 - 2.20.6" >}}

**Fixes**
- Fix missing error handling on invoice payment failure
- Updates to not call Wyre endpoints if the Wyre Extension is not enabled

---
{{< link-heading "h4" "2022-09-16 - 2.20.5" >}}

**Fixes**
- Fix for "Create new sale" not sending amount
- Wallet business extension customer page update
- Fix for mobile verification step issue when mobile verification is optional or off

---

{{< link-heading "h4" "2022-09-14 - 2.20.4" >}}

**Fixes**
- Fix incorrect labels on conversion success screen
- Update Wyre currency API page_size default value

---

{{< link-heading "h4" "2022-09-12 - 2.20.3" >}}

**Fixes**
- Validation on buy form not working consistently
- Fix popup text on non-Stellar cryptocurrencies

---

{{< link-heading "h4" "2022-09-09 - 2.20.2" >}}

**Fixes**
- Fix onboarding for companies with a manual bank account configuration

---

{{< link-heading "h4" "2022-09-09 - 2.20.1" >}}

**Fixes**
- Language update fixes

---

{{< link-heading "h4" "2022-09-08 - 2.20.0" >}}

**Features**
- Add support for locales and multi-language.

---

{{< link-heading "h4" "2022-09-08 - 2.19.25" >}}

**Fixes**
- Fix incorrect message for pending bank accounts in wyre deposit flow

---

{{< link-heading "h4" "2022-09-01 - 2.19.24" >}}

**Fixes**
- Show campaign image on rewards

---

{{< link-heading "h4" "2022-08-31 - 2.19.23" >}}

**Fixes**
- Enable get-started card hide/show via app config

---

{{< link-heading "h4" "2022-08-30 - 2.19.22" >}}

**Fixes**
- Enable get-started card hide/show via app config

---

{{< link-heading "h4" "2022-08-26 - 2.19.21" >}}

**Fixes**
- Fixing routing issue showing two screens when user does not match tier requirement

---

{{< link-heading "h4" "2022-08-26 - 2.19.20" >}}

**Fixes**
- Fix country validation issue

---

{{< link-heading "h4" "2022-08-25 - 2.19.19" >}}

**Fixes**
- Update heading on invoice creation
- Fixing buy and sell form wording
- Fixes to POS new sale currency conversion issue

---

{{< link-heading "h4" "2022-08-25 - 2.19.17" >}}

**Fixes**
- Change default country code for mobile identifier

---

{{< link-heading "h4" "2022-08-04 - 2.19.16" >}}

**Fixes**
- Fix trustline validation on withdraw screen

---

{{< link-heading "h4" "2022-08-03 - 2.19.15" >}}

**Features**
- Wyre User API features

**Fixes**
- Voucher format field update 
- Preview document improvements
- MFA verify message update
- Help center page padding fix
- Fix onboarding side navbar responsive design
- Fix multiselect - close dropdown on select 
- Fix seller not saving on registration

---

{{< link-heading "h4" "2022-05-20 - 2.19.0" >}}

**Features**
- Updated id number input to use an SSN mask if user's nationality is US

**Fixes**
- Requests list order issue
- Home page layout improvements and card fixes
- UI fixes
- Voucher toggle on product admin bug
- Various wyre related fixes and improvements
- Onboarding improvements
- Transfer conversion bug

---

{{< link-heading "h4" "2022-05-11 - 2.18.0" >}}

**Features**
- Allow users to manage multiple businesses and added a selector for switching between them
- Added "Team" screen with functionality to add new team members

---

{{< link-heading "h4" "2022-04-29 - 2.17.0" >}}

**Fixes**
- Bug on business categories not saving
- Scrolling in onboarding

---

{{< link-heading "h4" "2022-04-29 - 2.16.0" >}}

**Features**
- Send metadata step

---

{{< link-heading "h4" "2022-04-13 - 2.15.0" >}}

**Features**
- Added Wyre phase 1 (onboarding, deposit, withdraw, ACH, help center)

---

{{< link-heading "h4" "2022-03-30 - 2.14.0" >}}

**Features**
- Updated product checkout to handle async flow
- Async voucher service changes

---

{{< link-heading "h4" "2021-12-07 - 2.13.0" >}}

**Features**
- Merchant app component design updates
- Transfer and exchange redesign
- Mass send improvements

**Fixes**
- Various ui improvements and bug fixes

---

{{< link-heading "h4" "2021-12-02 - 2.12.0" >}}

**Features**
- Order management
- Redesign confirm/success components

---

{{< link-heading "h4" "2021-10-18 - 2.10.4" >}}

**Fixes**
- Missing/incorrect text field labels

---

{{< link-heading "h4" "2021-10-14 - 2.10.3" >}}

**Fixes**
- Withdrawal new bank account labels
- Removed reason label from refund invoice modal

---

{{< link-heading "h4" "2021-10-14 - 2.10.2" >}}

**Fixes**
- Featured products display issue
- Support for account reference on currency cards

---

{{< link-heading "h4" "2021-10-12 - 2.10.1" >}}

**Fixes**
- Cater for no buy/sell options
- Updated mass send condition logic to use business service settings groups

---

{{< link-heading "h4" "2021-10-11 - 2.10.0" >}}

**Features:**
- Complete buy flow
- Sell flow
- User orders design rework

**Fixes**
- Homepage improvements

---

{{< link-heading "h4" "2021-09-24 - 2.9.5" >}}

**Features:**
- Replaced the send input with the smart recipient input

---

{{< link-heading "h4" "2021-09-24 - 2.9.4" >}}

**Fixes:**
- Updated Point of Sale to use the Payment Request Service

---

{{< link-heading "h4" "2021-09-22 - 2.9.2" >}}

**Features:**
- Wyre buy functionality

---

{{< link-heading "h4" "2021-09-22 - 2.9.0" >}}

**Features:**
- Products design rework
- Products checkout rework

---

{{< link-heading "h4" "2021-09-15>21 - 2.8.4-7" >}}

**Fixes:**
- Online checkout fixes
- Removed manifest.json info
- Change manifest colors

---

{{< link-heading "h4" "2021-09-10 - 2.8.3" >}}

**Fixes:**
- Removed QR encoding

---

{{< link-heading "h4" "2021-09-08 - 2.8.2" >}}

**Fixes:**
- Stellar underpaid handling

---

{{< link-heading "h4" "2021-09-08 - 2.8.1" >}}

**Fixes:**
- Online checkout improvements

**Features:**
- Invoice refunds

---

{{< link-heading "h4" "2021-09-02 - 2.7.3" >}}

**Fixes:**
- MFA OTP QR url encoding
- Loading issue on invoice create if business does not exist
- Empty invoice currency dropdown options
- Divisibility rounding issue

---

{{< link-heading "h4" "2021-08-31 - 2.7.1-2" >}}

**Fixes:**
- Moved finances to its own section
- Incorporated fees into max amount calculation

---

{{< link-heading "h4" "2021-08-30 - 2.7.0" >}}

**Features:**
- Profile tier linking
- Profile field updates
- Business settings updates
- Shareholders section
- Various minor bug fixes

---

{{< link-heading "h4" "2021-08-26>30 - 2.6.7-11" >}}

**Fixes:**
- Reset password submission issue

---

{{< link-heading "h4" "2021-08-26 - 2.6.6" >}}

**Fixes:**
- Grandmother and grandfather fields (onboarding only)
- Linked lang file usage in onboarding

---

{{< link-heading "h4" "2021-08-26 - 2.6.5" >}}

**Fixes:**
- Added missing onboarding local strings

---

{{< link-heading "h4" "2021-08-11>26 - 2.6.2-4" >}}

**Fixes:**
- Issues around adding a mobile number
- Switched to saving business docs via business service
- Switched to using a new QR code library
- Moved locale logic to a context model
- Support to disable tracking/analytics

---

{{< link-heading "h4" "2021-08-11 - 2.6.1" >}}

**Fixes:**
- Responsive fixes
- Favicon switching when changing companies

---

{{< link-heading "h4" "2021-08-10 - 2.6.0" >}}

**Features:**
- Merged user and business onboarding 
- Added new fields and sections to onboarding

---

{{< link-heading "h4" "2021-07-30 - 2021-08-04 - 2.5.3-7" >}}

**Fixes:**
- Incorrect underpaid bitcoin checkout handling
- Company page header icon to color
- Fetch grey-label config from application service
- Changes to hide action logic

---

{{< link-heading "h4" "2021-07-29 - 2.5.2" >}}

**Fixes:**
- Decoupled checkout flow from app's auth system and other checkout related fixes

---

{{< link-heading "h4" "2021-07-28 - 2.5.1" >}}

**Fixes:**
- Withdraw add bank acc bug

---

{{< link-heading "h4" "2021-07-27 - 2.5.0" >}}

**Features:**
- Switched to single app hosting with client switching based on app domain

---

{{< link-heading "h4" "2021-07-06>24 - 2.4.1-6" >}}

**Fixes:**
- styling on currency selector
- amount input bug
- autoselect to autocomplete
- payments Invoice label
- refund on success
- Made avatar user group icon color white and fixed styling
- add: checkout/defaultPaymentMethod config

---

{{< link-heading "h4" "2021-07-05 - 2.4.0" >}}

**Features:**
- Reworked Settings screen / updated design

---

{{< link-heading "h4" "2021-06-08 - 2.3.2-8" >}}

**Features:**
- Add: bank branch address to deposit details
- New Toast layout

**Fixes:**
- recipient buttons not showing for email/mobile
- onboarding skips after mobile
- public pages loading
- empty toast messages in profile
- withdraw infoMessage bug

---

{{< link-heading "h4" "2021-06-08 - 2.3.2" >}}

**Features:**
- Currency icons pull from platform if available else fallback to hardcode

**Fixes:**
- Withdraw config `infoMessage` config location

---

{{< link-heading "h4" "2021-06-08 - 2.3.1" >}}

**Features:**
- Added max button to amount inputs

---

{{< link-heading "h4" "2021-06-08 - 2.3.0" >}}

**Features:**
- Updated profile section with new design/layout and improved features

---

{{< link-heading "h4" "2021-06-08 - 2.2.0" >}}

**Features:**
- Updated app config to pull from app service instead of off company object

---

{{< link-heading "h4" "2021-05-12 - 2.1.1-6" >}}

**Design improvements and bug fixes:**
- Various fixes and design updates

---

{{< link-heading "h4" "2021-04-06 - 2.1.0" >}}

**Features:**
- Product management screen with a bunch of new components

**Design improvements and bug fixes:**
- Various fixes and design updates

---

{{< link-heading "h4" "2021-02-11 - 2.0.84" >}}

**Features:**
- Referral rewards in profile and on register

**Design improvements and bug fixes:**
- Fixed `labelID` config option
- Various small tweaks and design updates

---

{{< link-heading "h4" "2021-02-09 - 2.0.79" >}}

**Features:**
- Add mainnet payment request processors

**Design improvements and bug fixes:**
- Various small tweaks and design updates

---

{{< link-heading "h4" "2021-02-09 - 2.0.78" >}}

**Features:**
- Added support around stellar features to ensure correct memo usage for deposits / receives
- Add trustline validation to withdraw

**Design improvements and bug fixes:**
- Various small tweaks and design updates

---

{{< link-heading "h4" "2021-01-26 - 2.0.69" >}}

**Features:**
- Test company banner and disclaimer to auth screen
- Added Help section with About page, FAQs and contact support

**Design improvements and bug fixes:**
- Various small tweaks and design updates

---

{{< link-heading "h4" "2021-01-25 - 2.0.66" >}}

**Features:**
- Add receive config to show recipient buttons on QR

---

{{< link-heading "h4" "2021-01-24 - 2.0.65" >}}

**Design improvements and bug fixes:**
- Fixed account filters

---

{{< link-heading "h4" "2021-01-21 - 2.0.61" >}}

**Features:**
- Add payment requests page

**Design improvements and bug fixes:**
- Various small tweaks and design updates

---

{{< link-heading "h4" "2021-01-13 - 2.0.57" >}}

**Features:**
- Updated subtypes

**Design improvements and bug fixes:**
- Various small tweaks and design updates

---

{{< link-heading "h4" "2021-01-13 - 2.0.55" >}}

**Design improvements and bug fixes:**
- PoS layout improvements
- Bugs on invoice create

---

{{< link-heading "h4" "31-10-2019" >}}

**Bug fixes:**

- Removed a random 0 from the Withdraw page.
- Fixed a bug where values on the success screen would switch to 0.

**Changes:**

- Admins can now configure applications for sending to only mobile numbers or only email addresses.
- Admins can now configure registration via mobile number instead of email address.
- Admins can now configure mobile number required upon registering.
- Added file size limit information to file uploads.
- Admins can now display a custom message on any confirm screen.

---

{{< link-heading "h4" "30-10-2019" >}}

**Bug fixes:**

- Fixed an issue where the Notifications page did not load correctly.
- Fixed issue where Bitcoin addresses for testnet were not being pulled through correctly.
- Fixed a bug where product total amount was not updating after removing a product.
- Fixed an issue where limit validation would trigger incorrectly.
- Fixed issue where note was not being sent in bitcoin transactions.
- Fixed bug with display of conversions.
- Pull refresh now works again on the account view page.

**Changes:**

- Admins can now create a 'scan to pay' flow where users scan QR codes of merchants to purchase goods.
- The app now displays what tier a user is on and what requirements need to be met in order for users to advance to the next tier.
- The app now displays what a user's limits are (such as maximum withdrawals, minimum payments etc) according to their tier.
- Users can now exchange to or from any account which has an exchangeable currency - they are no longer limited to only their primary account.
- Improved filtering on the products listing page.
- Admins can now set custom session durations.
- Removed auto-filtering by country on products.
- Users can set country, birthdate and timezone (mobile).
- Transaction Id is now displayed in the extended transaction information.
- Added timezone field.

---

{{< link-heading "h4" "30-08-2019" >}}

**Bug fixes:**

- Fixed a visual bug where users could not change filter option.
- Fixed issue where send copy was not displaying correctly for mass_send type transactions.


**Changes:**

- Made transaction filter results take timezone into account.
- "Is between" amount filter is now inclusive i.e. if users search for transactions of an amount between 1 and 5 their results will include amounts of 1 and 5. 
- Amount filter results are now absolute - i.e. searching for transactions of an amount 5 will return both debits (-5) and credits (5). Users can filter by transaction type to show only one type of result.
- Users can no longer change product qty in their cart to be less than 1.
- Added date for when a product item status was updated on an order.
- Added a success page after a mass send csv has been successfully uploaded and run.
- Updated mass send example template to include metadata example.
- Improved the way account balances update so they update as often as transaction history.
- Users can now add a currency when adding a withdrawal account. Withdrawal account options will be filtered by currency when withdrawing.
- When adding a bank account from the withdraw screen, withdraw accounts will automatically have the withdraw account's currency added.
- Failed transactions are now in grey text.
- Admins can specify a default country for users upon registration.
- Admins can specify whether users are allowed to send/deposit/withdraw/receive for specific currencies. This is set in the company config in the Dashboard.
- Admins can specify a custom message on the withdrawal success screen. This is set in the company config in the Dashboard.
- When sending, the application now displays when the rate was last fetched.
- On the deposits page, company bank account options now filter by currency. Only bank accounts with a currency that matches the account currency a user wants to deposit will display.
- Any limits set on withdrawals are now displayed on the withdraw screen. If a user tries to withdraw and encounters a limit, a validation message will display.
- When adding a new address users can choose an address type, either "billing" or "shipping".
- Admins can now set whether user information is required when purchasing a specific product. This is set in the Dashboard. Admins can set mobile number, email address, shipping address and or billing address as required information. If users are missing any of these they are prompted on checkout to add it.
- Fees set in the Dashboard are now displayed on transaction confirmation screens and expanded transaction info in transaction history. In addition, fees are validated against - if a user does not have enough balance to cover e.g. the send amount and the fee, a user will not be able to make the transaction.


---

{{< link-heading "h4" "05-08-2019" >}}

**Bug fixes:**

- Visual fixes on web and responsive views.


**Changes:**

- Users can now seethe on-chain transaction hash link for crypto transactions in their transaction history.
- Updated "contact number" field name to "mobile number."
- Added a refresh button to the transaction history page.
- Updated how sessions and caching of application ID is handled.


**New features:**

- Users can now enter send and receive amounts in their display currency while sending or receiving in a different currency. 
- Users can buy and sell currencies, as defined by an admin.
- Users can also view their transaction history in their display currency.
- Users can now filter, sort, and export their transaction history.
- Users can now view a lsit of their purchased vouchers and their redeem status.
- Users can now transfer currencies between their accounts.
- Users are now able to manage their notification preferences.

---
