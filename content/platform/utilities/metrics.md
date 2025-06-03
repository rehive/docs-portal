---
date: 2018-09-17T15:21:22+02:00
title: Metrics
description: Metrics in the platform.
weight: 3
---

Metrics are data collection objects that can be configured by users and companies to generate daily metrics on specific metrics types with customizable filters.

The following metric types are supported:

Name | Sections |Description
---|---|---
transaction_count | `admin`, `user` | Count of transactions.
transaction_complete_count | `admin`, `user` | Count of completed transactions.
transaction_failed_count | `admin`, `user` | Count of failed transactions.
transaction_pending_count | `admin`, `user` | Count of pending transactions.
transaction_complete_sum | `admin`, `user` | Sum of the total_amount of complete transactions.
transaction_failed_sum | `admin`, `user` | Sum of the total_amount of failed transactions.
transaction_pending_sum | `admin`, `user` | Sum of the total_amount of pending transactions.
transaction_balance_sum | `admin`, `user` | Sum of the total_amount of all balance transactions transactions.
transaction_available_balance_sum | `admin`, `user` | Sum of the total_amount of all available balance affecting transactions.
user_count | `admin` | Count of users.
user_active_count | `admin` | Count of active users.
user_transacted_in_30days_count | `admin` | Count of users who transacted in the last 30 days.

Metrics are processed asynchronously and may take longer to generate on companies with larger data sets.

<aside class="notice">
	Please take a look at the <a href="https://api.rehive.com/?api=rehive-platform-api#tag/metrics/GET/3/metrics/" target="_blank">API reference</a> for further details on the metric endpoints.
</aside>

<aside class="notice">
	Please take a look at the <a href="https://api.rehive.com/?api=rehive-platform-admin-api#tag/metrics/GET/3/admin/metrics/" target="_blank">API reference</a> for further details on the <strong>admin</strong> metric endpoints.
</aside>

## Points

Metric data points are calculated on a daily basis at midnight (with a rolling data point for the current day). For this reason, when creating a metric a `timezone` must be explicitly defined. The `timezone` is used to ensure data points are generated at the correct midnight time.

When fetching data points, an `interval` filter can be used to alter the aggregation of the data points. The intervals that can be used are: `day`, `week`, `month`, and `year`.

As mentioned previously, a rolling data point is included in each metric's data points. This point is dynamically calculated and contains the current day's data (from the last midnight data point to now).

<aside class="notice">
	Please take a look at the <a href="https://api.rehive.com/?api=rehive-platform-api#tag/metrics/GET/3/metrics/{identifier}/points/" target="_blank">API reference</a> for further details on the metric points endpoints.
</aside>

<aside class="notice">
	Please take a look at the <a href="https://api.rehive.com/?api=rehive-platform-admin-api#tag/metrics/GET/3/admin/metrics/{identifier}/points/" target="_blank">API reference</a> for further details on the <strong>admin</strong> metric pointsendpoints.
</aside>

## Limits

There are some limits placed on metric creation:

Description | Limit
---|---
Per-user `user` section metrics | 50 metrics
Per-company `admin` section metrics | 12 metrics

Metrics can be deleted and/or recreated later if you exceed the limits.
