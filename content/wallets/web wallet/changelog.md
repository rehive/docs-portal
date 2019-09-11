---
date: 2018-09-17T15:21:22+02:00
title: Changelog
description: Web wallet changelog.
weight: 1
---

Summary of additions and changes to the Web Wallet. 

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
- When sending, the wallet now displays when the rate was last fetched.
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
- Updated how sessions and caching of wallet ID is handled.


**New features:**

- Users can now enter send and receive amounts in their display currency while sending or receiving in a different currency. 
- Users can buy and sell currencies, as defined by an admin.
- Users can also view their transaction history in their display currency.
- Users can now filter, sort, and export their transaction history.
- Users can now view a lsit of their purchased vouchers and their redeem status.
- Users can now transfer currencies between their accounts.
- Users are now able to manage their notification preferences.

---
