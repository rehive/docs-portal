---
date: 2018-09-17T15:21:22+02:00
title: Changelog
description: Mobile application changelog.
weight: 1
---

Summary of additions and changes to the mobile application.

---

{{< link-heading "h4" "2024-12-17 - 7.8.16" >}}

**Bug fixes**
- Fixed receive/send screen crash issue.

---

{{< link-heading "h4" "2024-11-29 - 7.8.14" >}}

**Changes**
- Updated image permissions to meet Play Store requirements.

---

{{< link-heading "h4" "2024-11-29 - 7.8.13" >}}

**Bug fixes**
- Fixed image/file permissions to meet Play Store requirements.

---

{{< link-heading "h4" "2024-11-29 - 7.8.12" >}}

**Features**
- Added Bridge crypto receive page functionality.
- Implemented Bridge onboarding flow.
- Added Bridge crypto send functionality.
- Implemented Bridge bank deposit and withdrawal support.
- Added Bridge pending bank account handling.
- Implemented Bridge features and custom selector components.

**Changes**
- Enhanced transaction display with additional details.
- Improved bank account backwards compatibility.
- Cleaned up async send functionality.

**Bug fixes**
- Fixed bottom sheet height issue on some Android devices.

---

{{< link-heading "h4" "2024-03-28 - 7.8.9" >}}

**Changes**
- Updated default Node.js version.
- Upgraded from Expo 51 to Expo 52.
- Upgraded to latest Rehive JS SDK version.
- Removed redundant fields (limit, fees) from tiers API.

**Bug fixes**
- Fixed open email Sentry issue.

---

{{< link-heading "h4" "2024-01-10 - 7.8.7" >}}

**Changes**
- General maintenance and improvements.

---

{{< link-heading "h4" "2023-12-13 - 7.8.6" >}}

**Changes**
- Updated version.json to match git release tags.

---

{{< link-heading "h4" "2023-10-21 - 7.8.5" >}}

**Changes**
- Switched default referral configuration to false.

---

{{< link-heading "h4" "2023-10-21 - 7.8.4" >}}

**Bug fixes**
- Fixed home header function issue.

---

{{< link-heading "h4" "2023-10-21 - 7.8.3" >}}

**Changes**
- Improved home and onboarding experience.

---

{{< link-heading "h4" "2023-10-04 - 7.8.2" >}}

**Changes**
- General maintenance and improvements.

---

{{< link-heading "h4" "2023-10-04 - 7.8.1" >}}

**Changes**
- Updated Expo version in GitHub Actions.

---

{{< link-heading "h4" "2023-10-04 - 7.8.0" >}}

**Changes**
- Upgraded and migrated Sentry to fix app crash errors.

---

{{< link-heading "h4" "2023-09-12 - 7.7.13" >}}

**Features**
- Added support for new residency field.

---

{{< link-heading "h4" "2023-08-30 - 7.7.12" >}}

**Changes**
- General maintenance and improvements.

---

{{< link-heading "h4" "2023-08-29 - 7.7.11" >}}

**Bug fixes**
- Fixed app crash issue.

---

{{< link-heading "h4" "2023-08-14 - 7.7.10" >}}

**Features**
- Added search filter for Rewards.

**Changes**
- Updated quantity components for products.
- Improved export requests and error handling.
- General feature improvements throughout the app.

**Bug fixes**
- Fixed back button modal not closing as expected.

---

{{< link-heading "h4" "2023-08-07 - 7.7.9" >}}

**Bug fixes**
- Fixed app crash issue.

---

{{< link-heading "h4" "2023-08-02 - 7.7.8" >}}

**Bug fixes**
- Fixed page retrieval for document types issue.

---

{{< link-heading "h4" "2023-08-01 - 7.7.7" >}}

**Changes**
- Updated app version configuration.

---

{{< link-heading "h4" "2024-08-01 - 7.7.6" >}}

**Change**
- Implemented the new KYC group tier requirements and document-types update. 

---

{{< link-heading "h4" "2024-07-10 - 7.7.5" >}}

**Changes**
- Upgraded expo SDK to version 51. 
- Upgraded the nodeJS version to 18 to support the latest expo SDK update.
- Actioned an Exchange ActiveSync version update patch for the deployment. 

---

{{< link-heading "h4" "2024-06-27 - 7.7.4" >}}

**Changes**
- Updated the request account deletion confirmation text.
- Fixed the infinite scroll functionality and updated the loader.

---

{{< link-heading "h4" "2024-05-16 - 7.7.3" >}}

**Change**
- Updates to the user deletion and deactivation functionality.

---

{{< link-heading "h4" "2024-04-25 - 7.7.1" >}}

**Changes**
- Implemented skeleton loaders for initial page load.
- Updated the fail screen text to be more user-friendly.
- Improved the UI by adding the request user's profile picture to requests.
- Ensured that the MAX button includes fees.
- Added confirm and success messages to Locales.
- Enhanced the logout transition to be smoother.
- Updated the back button to be fixed when scrolling.

---

{{< link-heading "h4" "2024-03-12 - 7.6.1" >}}

**Changes**
- Implemented a solution to use the account definition instead of the user account reference to fetch currency details.
- Introduced the ability to hide specific sections in the app config settings for enhanced customisation.

---

{{< link-heading "h4" "2023-12-14 - 7.4.0" >}}

**Changes**
- Set android launchMode as singleInstance 
- Upgraded expo SDK version to 49 
- Improved subtype filtering 
- Sets public address not federation address as the default withdraw option 
- Added a copied to clipboard message on the transaction history 
- Removed amplitude and it's usage  
- Removed 'expo-analytics-amplitude' library 

---

{{< link-heading "h4" "2023-11-13 - 7.3.0" >}}

**Bug fixes**
- Implemented the invoking logout API when the user clicks UI logout button.

**Changes**
- Updated the date format in the buy-sell flows. 
- Updated how limits are displayed in the withdraw flow. 
- Implemented multi-fee handling. 

---

{{< link-heading "h4" "2023-08-03 - 7.2.0" >}}

**Features**
- Updated PRS functionality to make payments using the correct operational account
- Updated PRS request handling to use the new API format/requirements
- Updated PRS transaction history handling to correctly label transactions.

---

{{< link-heading "h4" "2023-07-11 - 7.1.0" >}}

**Features**
- Switched to new MFA endpoints and required changes.

**Fixes**
- Fixes sidebar drawer flickering issue.

---

{{< link-heading "h4" "2023-04-26 - 7.0.0" >}}

**Features**
- Upgrades React-Native version.
- Upgrades Expo SDK version 48.

---

{{< link-heading "h4" "2023-04-06 - 6.0.1" >}}

**Fixes**
- Fix splash screen load regression.

---

{{< link-heading "h4" "2023-03-30 - 6.0.0" >}}

**Features**
- Upgraded to Expo SDK 46 which includes React Native 0.69.5.

---

{{< link-heading "h4" "2023-03-22 - 5.1.0" >}}

- Added support for user accounts in deposit flow in addition to company bank accounts.
- Added support for transaction messages.
- Updated app to use service slugs and to show currency display codes.

---

{{< link-heading "h4" "2023-03-15 - 5.0.5" >}}

- Fixed issue with username submission on register.
- Updated to pull app branding details from Rehive App Extension using app bundle identifier.

---

{{< link-heading "h4" "2023-02-07 - 5.0.4" >}}

- Fixed issue with plaid pops ups in company onboarding onboarding.
- Updated default ethereum logo and icon.
- Updated default amount input currency to actual amount rather than display amount.
- Fix silent errors in splash screen and contact email link.

---

{{< link-heading "h4" "2023-01-25 - 5.0.3" >}}

- Updated to React Native 0.68 and related library updates.
- Updated bundling process resulting in smaller app size.

---

{{< link-heading "h4" "2022-10-21 - 4.0.2" >}}

- Fixed undefined confirmations display issue for off-chain Wyre transactions.
- Fixed Wyre currency retrieval from paginated endpoint.
- Add support for Platform authentication updates.

---

{{< link-heading "h4" "2022-10-19 - 4.0.1" >}}

- Fixed withdraw add account and send flow recipient issues.
- Fixed inaccurate pop up text on receive for non-Stellar currencies.
- Fixed on-chain transaction issue for non-Wyre companies.

---

{{< link-heading "h4" "2022-10-06 - 4.0.0" >}}

- Upgrade Expo SDK from version 44 to 45.

---

{{< link-heading "h4" "2022-09-01 - 3.9.2" >}}

- Added FAQ section
- Added Payment requests
- New Send flow
- New Onboarding flow
- Added referrals feature
- Added Home cards
- Updates to Withdraw, Deposit, Buy and Sell
- Added profile tiers functionality
- POS updates to use Payment Requests Extension
- Added transaction filters
- Send metadata improvements
- Welcome screen udpates
- Sidebar improvements
- Wyre User API integration
- Rewards campaign image functionality

---

{{< link-heading "h4" "2022-07-19 - 3.9.2" >}}

- Added FAQ section
- Added Payment requests
- New Send flow
- New Onboarding flow
- Added referrals feature
- Added Home cards
- Updates to Withdraw, Deposit, Buy and Sell
- Added profile tiers functionality
- POS updates to use Payment Requests Extension
- Added transaction filters
- Send metadata improvements
- Welcome screen udpates
- Sidebar improvements
- Wyre User API integration
- Rewards campaign image functionality

---

{{< link-heading "h4" "2022-07-19 - 3.7.0" >}}

- Added category filter to products

---

{{< link-heading "h4" "2022-06-29 - 3.6.0" >}}

- Various UI improvements including updating all success/fail screens to use Lottie animations

---

{{< link-heading "h4" "2022-06-04 - 3.5.0" >}}

- Updated id number input to use an SSN mask if user's nationality is US
- Various bug fixes and improvements

---

{{< link-heading "h4" "2022-05-11 - 3.4.0" >}}

- Point of Sale: reworked navigation, added teller/top up section, moved redeem voucher from actions to PoS screen, business switching

---

{{< link-heading "h4" "2022-04-13 - 3.3.0" >}}

- Added Wyre phase 1 (onboarding, deposit, withdraw, ACH, help center)

---

{{< link-heading "h4" "2022-03-30 - 3.2.0" >}}

- Updated product checkout to handle async flow
- Async voucher service changes

---

{{< link-heading "h4" "2022-02-16 - 3.1.0" >}}

- Point of Sale: added static QR code tab to PoS/merchant screen

---

{{< link-heading "h4" "2022-02-16 - 3.0.0" >}}

- Localisation: added multi-language support throughout the app. This includes in-app strings, rehive platform content and config content. More information on multi-language implementation and usage can be found [here](https://github.com/rehive/rehive-javascript/tree/locales/locales).
- Expo: Updated to the latest [Expo SDK 44](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/#sdk-44)
- Navigation: updated to the latest `react-navigation` library and overhauled navigation structure to work with new navigation API
- Codebase: clean up codebase by removing unused folders/files, consolidating all screen folders into `src/screens/` and various other clean up tasks
- Packages: updated a bunch of smaller packages to their latest (or near latest) available versions
- Various other bug fixes and performance improvements

---

{{< link-heading "h4" "2021-10-13 - 2.7.0" >}}

**Features:**
- Mobile Point of Sale: create sales (quick invoices) for verified business users

---

{{< link-heading "h4" "2021-09-29 - 2.6.0" >}}

**Features:**
- Account filters and export: added various transaction list filters and the ability to create exports

---

{{< link-heading "h4" "2021-08-10 - 2.5.0" >}}

**Features:**
- User onboarding: users will be presented with an onboarding flow prompting them to enter certain information based on tier requirements 

---

{{< link-heading "h4" "2021-07-29 - 2.4.0" >}}

**Features:**
- Withdraw: updated design incl. new account selectors, native numpad, new confirm/result layout, improved limit and fee handling
- Deposit: updated design
- Buy/Sell: add new flows to crypto applications to perform/buy sell

---

{{< link-heading "h4" "2021-07-07 - 2.3.0" >}}

**Features:**
- Send: updated design incl. native numpad, new confirm/result layout, improved limit and fee handling
- Request: updated design incl. new activity list, native numpad, new confirm/result layout

---

{{< link-heading "h4" "2021-06-15 - 2.2.2" >}}

**Features:**
- Withdraw `infoMessage`

---

{{< link-heading "h4" "2021-06-15 - 2.2.1" >}}

**Features:**
- Currency icons pull from platform if available else fallback to hardcode

---

{{< link-heading "h4" "2021-06-08 - 2.2.0" >}}

**Features:**
- Updated app config to pull from app service instead of off company object

---

{{< link-heading "h4" "2021-06-04 - 2.1.0" >}}

**Features:**
- Added basic wyre widget

---

{{< link-heading "h4" "2021-05-30 - 2.0.1-7" >}}

**Fixes and UI improvements:**
- Various bug fixes and improvements including: primary help text change, onboarding skip bug, tiers not showing in profile, pay screen back button padding

---

{{< link-heading "h4" "2021-05-26 - 2.0.0" >}}

**Features:**
This was a major update that included the following:
- Products/Cart: updated listing layout, improved detail view, new cart header layout with cart switching and seller filter chip, filter by seller, smarter logic around deleting last item from cart
- Checkout: new multistep checkout flow, checkout cart with slide to delete, add seller info to products,
- Orders: New orders layout, new order details view, multi-product order view
- Profile: reworked profile overview page, updated design on all pages, improvements to documents upload flow specifically for multi-image uploads, slide to delete on lists, helper modal with icon descriptions
- Settings: updated design on all pages, improved devices permission request
- Rewards: updated listing layout
- Requests: request activity now lists all currencies, support for blank requests with any amount, multi-currency request paying
- General: updated Toast component across the app

---

{{< link-heading "h4" "2021-02-11 - 1.37.0" >}}

**Features:**
- User onboarding
- Referral rewards in profile and on register
- Improved OTA (over the air) update handling forcing users to download the latest app version

**Design improvements and bug fixes:**
- Register button on landing to text button
- Various small tweaks and design updates
- Fixed `labelID` config option
- Switching cart currency when on product detail crash

---

{{< link-heading "h4" "2021-02-02 - 1.36.0" >}}

**Features:**
- Improvements to Stellar flows with help banners and prompts to include memo when necessary
- Improvements to Payment requests

**Design improvements and bug fixes:**
- Local authentication icon changes depending on biometrics API level
- Added fee to withdraw amount input
- Fix help section styling
- Disclaimer styling


---

{{< link-heading "h4" "2021-01-26 - 1.35.0" >}}

**Features:**
- Test company banner and disclaimer to auth screen
- Added Help section with About page, FAQs and contact support

**Design improvements and bug fixes:**
- Various small tweaks and design updates

---

{{< link-heading "h4" "2021-01-22 - 1.34.0" >}}

**Features:**
- Updated recipient input on Send
- Reworked receive screen

**Design improvements and bug fixes:**
- Added support for currency display_code
- Various small tweaks and design updates

---

{{< link-heading "h4" "2021-01-20 - 1.33.0" >}}

**Features:**
- Add FAQ section to settings that can be utilised using `config/faqs`
- Updated recipient input on send flow to handle phone contacts better

**Design improvements and bug fixes:**
- Various small tweaks and design updates

---

{{< link-heading "h4" "2021-01-06 - 1.32.7" >}}

**Features:**
- Reworked scan to pay to work with checkout requests and cross-payment PoS payments

**Design improvements and bug fixes:**
- Sliders design update
- Spacing on home screen
- Home balance card design update
- Currency card design update
- Fixed bug on android with textfields
- Various small tweaks and design updates

---

{{< link-heading "h4" "2019-10-31" >}}

**Bug fixes:**

- Fixed a bug where the receive screen crashed when entering a note.
- Fixed a bug where values on the success screen would switch to 0.

**Changes:**

- Admins can now configure applications for sending to only mobile numbers or only email addresses.
- Added file size limit information to file uploads.
- Changed text highlight colour to neutral grey instead of primary company color.
- Admins can now display a custom message on any confirm screen.

---

{{< link-heading "h4" "2019-10-08" >}}

**Bug fixes:**

- Fixed an issue where the Notifications page did not load correctly.
- Fixed issue where Bitcoin addresses for testnet were not being pulled through correctly.
- Fixed a bug where product total amount was not updating after removing a product.
- Fixed an issue where limit validation would trigger incorrectly.
- Fixed issue where note was not being sent in bitcoin transactions.
- Fixed bug with display of conversions.
- Pull refresh now works again on the account view page.
- Issue where recipient was intermittantly was blank in transaction history has been fixed.

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

{{< link-heading "h4" "2019-08-30" >}}

**Bug fixes:**

- Fixed a bug on the exchange confirm screen by removing a superfluous "to" in the confirmation text.
- Fixed issue where send copy was not displaying correctly for mass_send type transactions.


**Changes:**

- Admins can specify a default country for users upon registration.
- Users can now add a currency when adding a withdrawal account. Withdrawal account options will be filtered by currency when withdrawing.
- When adding a bank account from the withdraw screen, withdraw accounts will automatically have the withdraw account's currency added.
- Admins can specify whether users are allowed to send/deposit/withdraw/receive for specific currencies. This is set in the company config in the Dashboard.
- Admins can specify a custom message on the withdrawal success screen. This is set in the company config in the Dashboard.
- When sending, the application now displays when the rate was last fetched.
- On the deposits page, company bank account options now filter by currency. Only bank accounts with a currency that matches the account currency a user wants to deposit will display.
- Any limits set on withdrawals are now displayed on the withdraw screen. If a user tries to withdraw and encounters a limit, a validation message will display.
- Users can no longer change product qty in their cart to be less than 1.
- Added date for when a product item status was updated on an order.
- Failed transactions are now in grey text.
- When adding a new address users can choose an address type, either "billing" or "shipping".
- Admins can now set whether user information is required when purchasing a specific product. This is set in the Dashboard. Admins can set mobile number, email address, shipping address and or billing address as required information. If users are missing any of these they are prompted on checkout to add it.
- Fees set in the Dashboard are now displayed on transaction confirmation screens and expanded transaction info in transaction history. In addition, fees are validated against - if a user does not have enough balance to cover e.g. the send amount and the fee, a user will not be able to make the transaction.

---

{{< link-heading "h4" "2019-08-05" >}}

**Bug fixes:**

- Fixed an issue where users could not send crypto to federation addresses.

**Changes:**

- Users can now seethe on-chain transaction hash link for crypto transactions in their transaction history.
- Updated "contact number" field name to "mobile number."


**New features:**

- Users can now enter send and receive amounts in their display currency while sending or receiving in a different currency. 
- Users can buy and sell currencies, as defined by an admin.
- Users can also view their transaction history in their display currency.
- Users can now filter and sort their transaction history.
- Users can now view a lsit of their purchased vouchers and their redeem status.
- Users can now transfer currencies between their accounts.
- Users are now able to manage their notification preferences.

---
