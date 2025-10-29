---
date: 2018-09-17T15:21:22+02:00
title: Business
description: Business features configuration
weight: 4
---

Config key: `business`

## Overview

The business configuration section controls business-specific features and workflows, including invoices, payouts, customer management, products, and analytics.

## Configuration Options

### Invoice Management

- **invoices.enabled** - Enable invoice functionality (boolean)
  - Default: `true`

- **invoices.templates** - Available invoice templates (array)
  - Example: `["basic", "detailed"]`
  - Default: `["basic"]`

- **invoices.autoSend** - Automatically send invoices when created (boolean)
  - Default: `false`

- **invoices.requireApproval** - Require approval before sending invoices (boolean)
  - Default: `true`

### Payout Management

- **payouts.enabled** - Enable payout functionality (boolean)
  - Default: `true`

- **payouts.requireApproval** - Require approval for payouts (boolean)
  - Default: `true`

- **payouts.batchProcessing** - Enable batch payout processing (boolean)
  - Default: `false`

### Customer Management

- **customers.enabled** - Enable customer management (boolean)
  - Default: `true`

- **customers.requireKYC** - Require KYC for customers (boolean)
  - Default: `false`

- **customers.autoVerify** - Automatically verify customers (boolean)
  - Default: `false`

### Product Management

- **products.enabled** - Enable product management (boolean)
  - Default: `true`

- **products.categories** - Available product categories (array)
  - Example: `["digital", "physical"]`
  - Default: `[]`

- **products.inventory** - Enable inventory tracking (boolean)
  - Default: `true`

### Analytics

- **analytics.enabled** - Enable analytics features (boolean)
  - Default: `true`

- **analytics.realTime** - Enable real-time analytics (boolean)
  - Default: `false`

### Currency Settings

- **hideCurrency** - Array of currencies to hide from business operations (array)
  - Example: `["BTC", "ETH"]`
  - Default: `[]`

### Documents

- **documents.hide** - Hide documents section in business onboarding/settings (boolean)
  - Default: `false`

## Configuration Example

```json
{
  "business": {
    "invoices": {
      "enabled": true,
      "templates": ["basic", "detailed"],
      "autoSend": false,
      "requireApproval": true
    },
    "payouts": {
      "enabled": true,
      "requireApproval": true,
      "batchProcessing": false
    },
    "customers": {
      "enabled": true,
      "requireKYC": false,
      "autoVerify": false
    },
    "products": {
      "enabled": true,
      "categories": ["digital", "physical"],
      "inventory": true
    },
    "analytics": {
      "enabled": true,
      "realTime": false
    },
    "hideCurrency": [],
    "documents": {
      "hide": false
    }
  }
}
```

## Common Use Cases

### Full Business Suite

Enable all business features:

```json
{
  "business": {
    "invoices": {"enabled": true},
    "payouts": {"enabled": true},
    "customers": {"enabled": true},
    "products": {"enabled": true},
    "analytics": {"enabled": true}
  }
}
```

### Invoice-Only Business

Enable only invoice functionality:

```json
{
  "business": {
    "invoices": {"enabled": true},
    "payouts": {"enabled": false},
    "customers": {"enabled": false},
    "products": {"enabled": false}
  }
}
```

### High-Trust Environment

Auto-approve and auto-send:

```json
{
  "business": {
    "invoices": {
      "enabled": true,
      "autoSend": true,
      "requireApproval": false
    },
    "payouts": {
      "requireApproval": false
    },
    "customers": {
      "autoVerify": true
    }
  }
}
```

## Best Practices

1. **Enable only needed features** - Reduce complexity by disabling unused business features
2. **Use approval workflows** - Enable `requireApproval` for financial operations in production
3. **Consider KYC requirements** - Enable `requireKYC` based on your regulatory obligations
4. **Track inventory** - Enable inventory management for physical products
5. **Hide irrelevant currencies** - Use `hideCurrency` to simplify currency selection for business operations
