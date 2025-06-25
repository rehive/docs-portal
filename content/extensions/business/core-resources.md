---
date: 2018-09-17T15:21:22+02:00
title: Core resources
description: Business extension core resources.
weight: 3
---

There are several core resource in the Bridge extension that you need to know about when interacting with it.

### Managers

The manager resource encapsulates users who have been designated as business users and the functionality available to them as managers. Users can be designated as managers by configuring the `manager_groups` field through the API or the dashboard. Once a user's group is one of the `manager_groups`, then users in that group are able to access business manager endpoints.

Managers are able to create businesses, manage customers and other managers in those business and access other business functionality.


### Customers

The customer resource encapsulates users who have been designated as the customers of specific business and the functionality available to them as customers. Customers must be enrolled with a business via the enroll endpoint or alternatively they will be allocated to the business automatically if the business extension sees a transaction from a user to the business account.


### Businesses

The business resource handles businesses, their management options and other business related functionality. A manager user can create a business, and once done can do the following.

- Customize the business info and profile.
- Configure business categories
- View and create invoices (Through the Payment Requests Extension)
- View metrics related to the busines
- View transactions related to the business
- View users who are managers/customers related to the business.

A business has the following data:

Field | Description
--- | ---
name |  The name of the business
description | A description for the business
owner | The user who created the business
website | The website for the business
inc_number | The incorporation number for the business
colors | An object of colors used for UI theming
categories | A list of related business categories
logo | A logo image for the business
icon | A smaller icon image for the business
account | The account where business transactions will be logged
currency | The currency that the business operates under
timezone | The timezone that will be used to generate metrics for the business
vat_number | The vat number related to the business
address_line_1 | A line 1 address for the business
address_line_2 | A line 2 address for the business
address_city | The city the business operates in.
address_state_province | The state or province the business operates in.
address_country | The country the business operated in.
address_postal_code | The postal code for the business address.
status | The status of the business, must be `verified` for users to interact with the business.
metadata | A object that supports custom fields related to the business.
