---
date: 2018-09-17T15:21:22+02:00
title: Changelog
description: Dashboard changelog.
weight: 1
---

Summary of additions and changes to the Rehive Dashboard. 

---

{{< link-heading "h4" "24-09-2019" >}}

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

{{< link-heading "h4" "13-09-2019" >}}

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

{{< link-heading "h4" "12-09-2019" >}}

**Changes:**

- Improved display of required information on orders.

---

{{< link-heading "h4" "04-09-2019" >}}

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

{{< link-heading "h4" "01-09-2019" >}}

**Bug fixes:**

- Fixed an issue where the transaction modal would not open for bitcoin withdraw transactions.

---

{{< link-heading "h4" "31-08-2019" >}}

**Changes:**

- Admins can now see a user's display currency on their user details page.
- Admins can now associate a supplier account to a product. When products are purchased, the credit transaction will be directed to the associated supplier account.
- Admins can now fail payments on orders. This fails any associated transactions and the order itself.

---

{{< link-heading "h4" "30-08-2019" >}}


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

{{< link-heading "h4" "27-08-2019" >}}

**Bug fixes:**

- Fixed issues with crypto info filtering on users.

**Changes:**

- Admins can now select/view a "type" when adding/viewing an address for a user.
- Admins can now specify required information on a product. Admins can set shipping address, billing address, mobile number and or email address as required.
- Any info which is required on a product in an order is now displayed when viewing an order.

---

{{< link-heading "h4" "26-08-2019" >}}

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

{{< link-heading "h4" "14-08-2019" >}}

**Changes:**

- Added the ability to filter by balance on the accounts page.

---

{{< link-heading "h4" "10-08-2019" >}}

**New features:**

- Added the ability to export data from the accounts page based on an admin's filter selection.

**Changes:**

- Added the ability to add conversion pairs to allow for currency exchange via the Conversion extension.

---

{{< link-heading "h4" "07-08-2019" >}}

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

{{< link-heading "h4" "07-07-2019" >}}


**Changes:**

- Added character counter to product description.

**New features:**

- Transaction helper. Admins can enable a transaction helper that will make the operational aspects of specific types of transactions easier e.g. credit deposit, transfer deposit. Transaction fields are ordered and arranged in a logical format for the operation being done.

---

{{< link-heading "h4" "02-07-2019" >}}

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

{{< link-heading "h4" "11-06-2019" >}}

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

{{< link-heading "h4" "13-05-2019" >}}

**Bug fixes:**

- Fixed an issue where, when searching for an email address, if a user clicked on "Show more results" for the transaction results, the results page would break.
- Fixed issue where focusing the search bar caused an empty search preview pop-down to flash onscreen momentarily.

---

{{< link-heading "h4" "11-05-2019" >}}

**Changes:**

- Made group names clickable and removed hexagons.
- Subtypes are now ordered alphabetically.
- Changes group description field to a large text area.
- Implemented an alternative version of the search. Search is only triggered by pressing enter.
- Implemented Rehive friendbot call for funding Stellar testnet assets during the template build.

---

{{< link-heading "h4" "30-04-2019" >}}

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

{{< link-heading "h4" "25-04-2019" >}}

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

{{< link-heading "h4" "29-03-2019" >}}


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

