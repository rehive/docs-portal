---
date: 2018-09-17T15:21:22+02:00
title: Accounts
description: Accounts configuration
weight: 1
---

Config key: `accounts`

## Overview

The accounts configuration section controls how accounts and currencies are displayed throughout the application, including layout options, action button styles, and balance display settings.

## Configuration Options

### Layout

**layout** - Account display layout (string)
- `"list"` - Display all currencies as a flat list
- `"accounts"` - Group currencies by accounts with account totals
- Default: `"list"`

### Action Buttons

**actionVariant** - Style of action buttons (string)
- `"contained"` - Filled button style
- `"outlined"` - Outlined button style
- `"text"` - Text-only button style (uses icons by default)
- `""` - Default icon buttons
- Default: `""`

### Account Identification

**identifier** - Account identifier used in URLs (string)
- `"name"` - Use account name in URLs
- `"reference"` - Use account reference in URLs
- Default: `"name"`

### Display Settings

**amountDisplayCurrency** - Use display currency for amounts (boolean)
- `true` - Show amounts in user's display currency
- `false` - Show amounts in actual account currency
- Affects account listings, currency cards, and amount inputs
- Default: `true`

**displayAccountReference** - Show account reference on currency cards (boolean)
- `true` - Display account reference on each currency card
- `false` - Hide account reference
- Default: `false`

### Balance Visibility

**hideBalance** - Hide account balances (boolean)
- `true` - Balances are hidden from view
- `false` - Balances are visible
- Default: `false`

### Inactive Accounts

**hideInactive** - Hide inactive accounts (boolean)
- `true` - Inactive accounts are hidden from lists
- `false` - All accounts are shown
- Default: `true`

## Configuration Example

```json
{
  "accounts": {
    "layout": "list",
    "actionVariant": "contained",
    "identifier": "name",
    "amountDisplayCurrency": true,
    "displayAccountReference": false,
    "hideBalance": false,
    "hideInactive": true
  }
}
```

## Common Use Cases

### Grouped Account View

Display currencies grouped by their parent account:

```json
{
  "accounts": {
    "layout": "accounts",
    "displayAccountReference": true
  }
}
```

### Text Action Buttons

Use text labels instead of icons for action buttons:

```json
{
  "accounts": {
    "actionVariant": "text"
  }
}
```

### Privacy Mode

Hide balances for privacy-focused applications:

```json
{
  "accounts": {
    "hideBalance": true
  }
}
```

### Show All Accounts

Display both active and inactive accounts:

```json
{
  "accounts": {
    "hideInactive": false
  }
}
```

## Best Practices

1. **Match layout to account structure** - Use "accounts" layout if users have multiple accounts with multiple currencies each
2. **Consider mobile UX** - Icon buttons (default) work better on small screens than text buttons
3. **Display currency preference** - Enable `amountDisplayCurrency` for international applications
4. **Reference display** - Show account references only if users need to reference them externally
