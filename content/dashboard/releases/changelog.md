---
date: 2018-09-17T15:21:22+02:00
title: Changelog
description: Dashboard changelog.
weight: 1
---

Summary of additions and changes to the Rehive Dashboard. 


---

{{< link-heading "h4" "11-06-2019" >}}

### Extensions update

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

