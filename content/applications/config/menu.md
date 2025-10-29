---
date: 2018-09-17T15:21:22+02:00
title: Menu
description: Menu configuration
weight: 10
---

Config key: `menu`

## Overview

The menu configuration controls which navigation menu items are visible throughout the application. This allows you to customize the app's navigation based on your business needs.

## Configuration Structure

The menu configuration consists of an array of menu item objects, each specifying a menu item name and its visibility.

### Properties

**items** - Array of menu item objects

Each menu item object contains:
- **name** - Name of the menu item (string)
- **hide** - Whether to hide this menu item (boolean)
  - `true` - Menu item is hidden
  - `false` - Menu item is visible
  - Default: `false`

## Available Menu Items

The following menu items can be controlled:

- **payments** - Payment processing features
- **customers** - Customer management section
- **invoices** - Invoice creation and management
- **cards** - Card management features
- **developers** - API keys and developer tools
- **business** - Business account features
- **settings** - User settings and preferences

## Configuration Example

```json
{
  "menu": {
    "items": [
      {
        "name": "payments",
        "hide": false
      },
      {
        "name": "customers",
        "hide": true
      },
      {
        "name": "invoices",
        "hide": false
      },
      {
        "name": "cards",
        "hide": true
      },
      {
        "name": "developers",
        "hide": false
      },
      {
        "name": "business",
        "hide": true
      },
      {
        "name": "settings",
        "hide": false
      }
    ]
  }
}
```

## Common Use Cases

### Consumer Wallet

Hide business-focused features for consumer applications:

```json
{
  "menu": {
    "items": [
      {"name": "customers", "hide": true},
      {"name": "invoices", "hide": true},
      {"name": "business", "hide": true},
      {"name": "developers", "hide": true}
    ]
  }
}
```

### Business Application

Show all business features:

```json
{
  "menu": {
    "items": [
      {"name": "payments", "hide": false},
      {"name": "customers", "hide": false},
      {"name": "invoices", "hide": false},
      {"name": "business", "hide": false}
    ]
  }
}
```

### Developer-Focused App

Enable developer tools while hiding customer management:

```json
{
  "menu": {
    "items": [
      {"name": "developers", "hide": false},
      {"name": "customers", "hide": true},
      {"name": "invoices", "hide": true}
    ]
  }
}
```

## Best Practices

1. **Only include items you want to override** - Menu items not specified will use their default visibility
2. **Match menu to user needs** - Hide features that aren't relevant to your target users
3. **Consider user groups** - Different menu configurations may be appropriate for different user types
4. **Test navigation flow** - Ensure users can still access essential features after hiding menu items
