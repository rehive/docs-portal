---
date: 2018-09-17T15:21:22+02:00
title: Changelog
description: Mobile wallet changelog.
weight: 1
---

Summary of additions and changes to the Mobile Wallet.

---

{{< link-heading "h4" "31-10-2019" >}}

**Bug fixes:**

- Fixed a bug where the receive screen crashed when entering a note.
- Fixed a bug where values on the success screen would switch to 0.

**Changes:**

- Admins can now configure wallets for sending to only mobile numbers or only email addresses.
- Added file size limit information to file uploads.
- Changed text highlight colour to neutral grey instead of primary company color.
- Admins can now display a custom message on any confirm screen.

---

{{< link-heading "h4" "08-10-2019" >}}

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

{{< link-heading "h4" "30-08-2019" >}}

**Bug fixes:**

- Fixed a bug on the exchange confirm screen by removing a superfluous "to" in the confirmation text.
- Fixed issue where send copy was not displaying correctly for mass_send type transactions.


**Changes:**

- Admins can specify a default country for users upon registration.
- Users can now add a currency when adding a withdrawal account. Withdrawal account options will be filtered by currency when withdrawing.
- When adding a bank account from the withdraw screen, withdraw accounts will automatically have the withdraw account's currency added.
- Admins can specify whether users are allowed to send/deposit/withdraw/receive for specific currencies. This is set in the company config in the Dashboard.
- Admins can specify a custom message on the withdrawal success screen. This is set in the company config in the Dashboard.
- When sending, the wallet now displays when the rate was last fetched.
- On the deposits page, company bank account options now filter by currency. Only bank accounts with a currency that matches the account currency a user wants to deposit will display.
- Any limits set on withdrawals are now displayed on the withdraw screen. If a user tries to withdraw and encounters a limit, a validation message will display.
- Users can no longer change product qty in their cart to be less than 1.
- Added date for when a product item status was updated on an order.
- Failed transactions are now in grey text.
- When adding a new address users can choose an address type, either "billing" or "shipping".
- Admins can now set whether user information is required when purchasing a specific product. This is set in the Dashboard. Admins can set mobile number, email address, shipping address and or billing address as required information. If users are missing any of these they are prompted on checkout to add it.
- Fees set in the Dashboard are now displayed on transaction confirmation screens and expanded transaction info in transaction history. In addition, fees are validated against - if a user does not have enough balance to cover e.g. the send amount and the fee, a user will not be able to make the transaction.

---

{{< link-heading "h4" "05-08-2019" >}}

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
