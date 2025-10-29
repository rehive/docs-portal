---
date: 2018-09-17T15:21:22+02:00
title: Actions
description: Actions configuration
weight: 2
---

Config key: `actions`

## Overview

Actions control the transaction operations available to users in the wallet application. Action visibility is primarily controlled by **subtypes** configured on the Rehive Platform, with additional legacy configuration options available for certain actions.

## Important: Subtype-Based Control

**Most actions are controlled by subtypes**, not by app extension configuration. Subtypes are fetched from the Platform API and determine which actions are available for each account currency:

- Subtypes are configured in the Rehive Dashboard under **Transactions > Subtype controls**
- The `subtypes` property on each currency contains only subtypes allowed for that account currency
- Subtypes are filtered by company, user, group, tier, and account currency settings
- Actions are automatically shown or hidden based on available subtypes

## Available Actions

- **send** - Send funds to another user
- **receive** - Receive funds from another user
- **withdraw** - Withdraw funds to external account
- **deposit** - Deposit funds from external source
- **request** - Request payment from another user (controlled by PRS extension)
- **exchange** - Exchange between currencies
- **buy** - Purchase cryptocurrency
- **sell** - Sell cryptocurrency
- **transfer** - Transfer between own accounts
- **prepaid** - Prepaid voucher functionality
- **redeem_voucher** - Redeem voucher codes
- **scan** - (Mobile only) Scan QR code for send/pay
- **pay** - Payment functionality (accessed through scan)

## Action-Subtype Mapping

Each action requires specific subtypes to be enabled:

| Action | Required Subtypes | Hide Logic |
|--------|------------------|------------|
| `buy` | `buy` | Hidden if subtype not available |
| `sell` | `sell` | Hidden if subtype not available |
| `exchange` | `buy`, `sell` | Hidden if EITHER subtype is disabled |
| `send` | `send_email`, `send_mobile`, `send_account`, `send_crypto` | Hidden only if ALL subtypes are disabled. Partial functionality available based on enabled subtypes |
| `receive` | `receive_email`, `receive_mobile`, `receive_account` | Hidden only if ALL subtypes are disabled |
| `deposit` | `deposit_manual` | Hidden if subtype not available |
| `withdraw` | `withdraw_manual` | Hidden if subtype not available |
| `transfer` | `send_transfer`, `receive_transfer` | Hidden if EITHER subtype is disabled |

**Special Cases:**

- **REQUEST**: Controlled by the Payment Request Service (PRS) extension, not subtypes
- **SEND**: Shows different recipient field options based on which specific send subtypes are enabled
- **EXCHANGE**: Requires both `buy` AND `sell` subtypes to be enabled

## Legacy Configuration

Some actions still support traditional condition-based configuration:

### Condition Options

Available for all actions:

- **hide** - Completely hide this action
- **hideCurrency** - Array of currency codes to hide this action for
- **showCurrency** - Array of currency codes to show this action for (overrides hide)
- **hideGroups** - Array of user groups to hide this action for
- **showGroups** - Array of user groups to show this action for
- **hideAccounts** - Array of account references to hide this action for
- **showAccounts** - Array of account references to show this action for

### Action-Specific Config

#### Send

- **confirmMessage** - Custom message displayed on the confirmation screen
- **recipient** - Array of allowed recipient types: `['email', 'mobile', 'account', 'crypto']`

#### Receive

- **initialPage** - Default page to show: `'qr'` or `'form'`
- **recipient** - Array of allowed receive types: `['email', 'mobile', 'crypto']`

#### Withdraw

- **confirmMessage** - Custom message displayed on the confirmation screen
- **pairs** - Array of conversion pairs for exchange withdrawals (e.g., `["XLM:USD"]`)

#### Deposit

- **hideDepositReference** - Hide the deposit reference field
- **cryptoBankSupport** - Array of currencies supporting crypto bank deposits (e.g., `["BTC", "ETH"]`)

## Configuration Example

```json
{
  "actions": {
    "send": {
      "condition": {
        "hide": false,
        "hideCurrency": ["BTC"],
        "showCurrency": [],
        "hideAccounts": [],
        "showAccounts": [],
        "hideGroups": ["basic"],
        "showGroups": []
      },
      "config": {
        "confirmMessage": "Please verify the recipient details before sending.",
        "recipient": ["email", "mobile"]
      }
    },
    "receive": {
      "condition": {
        "hide": false,
        "hideCurrency": [],
        "showCurrency": []
      },
      "config": {
        "initialPage": "qr",
        "recipient": ["email", "mobile"]
      }
    },
    "withdraw": {
      "condition": {
        "hide": false,
        "hideCurrency": [],
        "hideGroups": ["unverified"]
      },
      "config": {
        "confirmMessage": "Withdrawals may take 1-3 business days to process.",
        "pairs": []
      }
    },
    "deposit": {
      "condition": {
        "hideCurrency": ["USD"]
      },
      "config": {
        "hideDepositReference": false,
        "cryptoBankSupport": ["BTC", "ETH"]
      }
    },
    "exchange": {
      "condition": {
        "hide": false,
        "hideGroups": ["basic"]
      }
    }
  }
}
```

## Best Practices

1. **Use subtypes for primary control** - Configure subtypes in the Rehive Dashboard for main action visibility
2. **Use legacy config for refinement** - Use condition-based config only for additional filtering beyond subtypes
3. **Test thoroughly** - Verify action visibility for different user groups, tiers, and currencies
4. **Document your setup** - Keep track of which subtypes are enabled for which currencies
