---
date: 2018-09-17T15:21:22+02:00
title: Exports
description: Exports in the platform.
weight: 2
---

Exports can be used to export data from a company or a specific user. Exports support customizable filters and can be either created as CSV or JSON feiles. The max number of results allowed on a single export page is 50000. Larger result sets will be paginated and generate as many files as necessary to complete the result set.

The supported export resources are:

- accounts
- account currencies
- transactions
- users (admin-only)

Exports are processed asynchronously and may take longer to complete on companies with larger data sets. To ensure exports finish quickly, try to perform exports with the necessary date range specified in the filters.

<aside class="notice">
	Please take a look at the <a href="https://rehive-platform.redoc.ly/tag/exports" target="_blank">API reference</a> for further details on the export endpoints.
</aside>

<aside class="notice">
	Please take a look at the <a href="https://rehive-platform-admin.redoc.ly/tag/exports" target="_blank">API reference</a> for further details on the <strong>admin</strong> export endpoints.
</aside>
