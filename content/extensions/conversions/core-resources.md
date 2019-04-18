---
date: 2018-09-17T15:21:22+02:00
title: Core resources
description: Conversion extension core resources.
weight: 3
---

There is only currently one core component within the conversion extension. Additional features will be added as furthe rfunctionality is completed.

### Rates

The primary component of the conversion extension is the rates. The rates contain all currency pairs that you (as an admin) wish to expose to end users. Rates consist of the following data:

Field | Description
--- | ---
from_currency |  The currency to convert from.
to_currency | The currency to convert to.
dynamic_rate | Will auto populate if a rate can be found for the specific currency pair.
fixed_rate | An overide rate that nullifies the automated dynamic rate.

<aside class="warning">
	Rates do not allow for reverse conversions. A separate rate should always be defined if you want to be able to reverse from one currency to another.
</aside>
