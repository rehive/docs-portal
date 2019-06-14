---
date: 2018-09-17T15:21:22+02:00
title: Core resources
description: Conversion extension core resources.
weight: 3
---

There are two core resource within the conversion extension. Additional features will be added as further functionality is completed.

### Rates

The primary resource of the conversion extension is the rates. The rates contain the calculated rates for both the global (default) rate-pairs as well as any custom rate-pairs that are set for the company.

All rates are set using a base currency. The base currency is USD but further base currencies options will be added in future.

Rates consist of the following data:

Field | Description
--- | ---
key |  A currency key in the `USD:<to_currency_code>` format
rate | Recorded rate at the time created
created | Timestamp date the rate was created

### Rate pairs

Rate pairs store any custom pairs a company wants to setup. This allows companies to overide the global rate pairs as well as add their own rate pairs related to custom currencies/assets.

Rate pairs consist of:

Field | Description
--- | ---
key |  A currency key in the `USD:<to_currency_code>` format
path | A path to another rate (eg. `USD:EUR`)
rate | A fixed rate

