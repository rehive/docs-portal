---
date: 2018-09-17T15:21:22+02:00
title: Bank Settings
description: Bank account configuration for fiat deposits and withdrawals
weight: 5
---

Config key: `settings.bank`

## Overview

The bank configuration system controls which countries, currencies, and payment methods are supported for fiat deposits and withdrawals throughout the application. This critical configuration determines:

- Which countries users can add bank accounts from
- What bank account fields are required for each country
- Which fiat currencies are supported for deposits and withdrawals
- How app currencies map to banking zones and payment methods

## Version

**bank.version** - Bank configuration version (integer)
- Set to `2` to use the new banking zone system
- Set to `1` or omit for legacy configuration
- Default: `1`

## Banking Zones (V2)

Banking zones define groups of countries that use the same payment network.

**bank.bankingZones** - Object mapping zone names to country codes (object)
- Common zones: `SEPA`, `ACH`, `UK_DOMESTIC`, `WIRE`, `SWIFT`

Example:
```json
{
  "SEPA": ["FI", "AL", "AD", "AT", "PT", "BE", "BG", "ES", "HR", "CY", "CZ", "DK", "EE", "FR", "DE", "GI", "GR", "HU", "IS", "IE", "IT", "LV", "LI", "LT", "LU", "MT", "MD", "MC", "ME", "MK", "NL", "NO", "PL", "RO", "SM", "RS", "SK", "SI", "SE", "CH", "VA", "GB"],
  "ACH": ["US"],
  "UK_DOMESTIC": ["GB"]
}
```

## Zone Templates

Zone templates define the required bank account fields for each payment method.

**bank.zoneTemplates** - Object mapping zone names to required field arrays (object)

Example:
```json
{
  "SEPA": ["name", "iban", "bic", "owner_full_name"],
  "ACH": [
    "name", "number", "type", "bank_name", "routing_number",
    "owner_full_name", "owner_address_line_1", "owner_address_city",
    "owner_address_state_province", "owner_address_country", "owner_address_postal_code"
  ],
  "UK_DOMESTIC": ["name", "number", "sort_code", "owner_full_name"]
}
```

**Available field names:**
- `name` - Account name/label
- `iban` - International Bank Account Number
- `bic` - Bank Identifier Code / SWIFT code
- `number` - Account number
- `type` - Account type (checking/savings)
- `bank_name` - Name of the bank
- `routing_number` - Routing number (US)
- `sort_code` - Sort code (UK)
- `owner_full_name` - Account owner's full name
- `owner_address_line_1` - Address line 1
- `owner_address_line_2` - Address line 2
- `owner_address_city` - City
- `owner_address_state_province` - State or province
- `owner_address_country` - Country
- `owner_address_postal_code` - Postal/ZIP code

## Zone Default Currencies

Define which fiat currencies each payment zone supports.

**bank.zoneDefaultCurrencies** - Object mapping zone names to currency code arrays (object)

Example:
```json
{
  "SEPA": ["EUR"],
  "ACH": ["USD"],
  "UK_DOMESTIC": ["GBP"],
  "WIRE": ["USD"]
}
```

## Currency Support

Map your application currencies to supported payment zones. This is the core mapping that connects your app currencies (like stablecoins) to banking zones.

**bank.currencySupport** - Object mapping app currency codes to zone configurations (object)
- Each currency specifies which zones it supports

Example:
```json
{
  "USDC_SOL": {
    "zones": ["ACH"]
  },
  "EURC_SOL_BRIDGE": {
    "zones": ["SEPA"]
  }
}
```

## Action Overrides

Override configuration specifically for deposits or withdrawals. This allows different payment methods for deposits vs. withdrawals - a powerful feature for offering flexible payment options.

**bank.actionOverrides.deposit** - Deposit-specific overrides (object)

**bank.actionOverrides.withdraw** - Withdrawal-specific overrides (object)

**Overridable properties:**
- `currencySupport` - Different zones for deposits vs withdrawals
- `zoneDefaultCurrencies` - Different currencies per action

## Complete V2 Configuration Example

```json
{
  "settings": {
    "bank": {
      "version": 2,

      "bankingZones": {
        "SEPA": [
          "FI", "AL", "AD", "AT", "PT", "BE", "BG", "ES", "HR", "CY", "CZ", "DK", "EE",
          "FR", "GF", "DE", "GI", "GR", "GP", "GG", "GB", "HU", "IS", "IE", "IM", "IT",
          "JE", "LV", "LI", "LT", "LU", "MT", "MQ", "YT", "MD", "MC", "ME", "MK", "NL",
          "NO", "PL", "RE", "RO", "BL", "MF", "PM", "SM", "RS", "SK", "SI", "SE", "CH", "VA"
        ],
        "ACH": ["US"],
        "UK_DOMESTIC": ["GB"]
      },

      "zoneTemplates": {
        "SEPA": ["name", "iban", "bic", "owner_full_name"],
        "ACH": [
          "name", "number", "type", "bank_name", "routing_number",
          "owner_full_name", "owner_address_line_1", "owner_address_city",
          "owner_address_state_province", "owner_address_country", "owner_address_postal_code"
        ],
        "UK_DOMESTIC": ["name", "number", "sort_code", "owner_full_name"]
      },

      "zoneDefaultCurrencies": {
        "SEPA": ["EUR"],
        "ACH": ["USD"],
        "UK_DOMESTIC": ["GBP"]
      },

      "currencySupport": {
        "USDC_SOL": {
          "zones": ["ACH"]
        },
        "EURC_SOL_BRIDGE": {
          "zones": ["SEPA"]
        }
      },

      "actionOverrides": {
        "withdraw": {
          "currencySupport": {
            "USDC_SOL": {
              "zones": ["ACH", "WIRE"]
            }
          },
          "zoneDefaultCurrencies": {
            "WIRE": ["USD"]
          }
        },
        "deposit": {
          "currencySupport": {
            "EURC_SOL_BRIDGE": {
              "zones": ["SEPA", "SWIFT"]
            }
          }
        }
      }
    }
  }
}
```

## How Bank Configuration Works

### 1. Adding a Bank Account (Settings)

User flow through the bank account form:

1. User navigates to **Settings > Bank Accounts > Add Bank Account**
2. User selects app currency (e.g., USDC_SOL)
3. App looks up `currencySupport.USDC_SOL.zones` → `["ACH"]`
4. App looks up `bankingZones.ACH` → `["US"]`
5. Country dropdown shows only: **United States**
6. User selects United States
7. App looks up `zoneDefaultCurrencies.ACH` → `["USD"]`
8. Bank currency is automatically set to USD
9. Form displays fields from `zoneTemplates.ACH`
10. User fills in routing number, account number, address, etc.

### 2. Depositing Fiat to Crypto (Deposit Screen)

How deposits determine available currencies:

1. User navigates to **Accounts > USDC_SOL > Deposit**
2. App checks `currencySupport.USDC_SOL.zones` → `["ACH"]`
3. App checks `actionOverrides.deposit` (if configured for additional zones)
4. App determines available deposit currencies from `zoneDefaultCurrencies.ACH` → `["USD"]`
5. User sees they can deposit USD to receive USDC_SOL
6. If multiple zones are available, user can select payment method (e.g., ACH vs WIRE)

### 3. Withdrawing Crypto to Fiat (Withdraw Screen)

How withdrawals work with bank accounts:

1. User navigates to **Accounts > USDC_SOL > Withdraw**
2. User selects a previously added bank account (US bank with USD)
3. App determines zone: US + USD → ACH
4. App checks `actionOverrides.withdraw.currencySupport` → finds `["ACH", "WIRE"]` available
5. If multiple zones, user can select payment method:
   - Standard ACH (lower fees, 1-3 days)
   - Same-day WIRE (higher fees, same day)
6. App calculates appropriate fees based on selected zone
7. Transaction is created with appropriate subtype for backend processing

## Common Use Cases

### US-Only USDC Support

Simple configuration for US market only:

```json
{
  "settings": {
    "bank": {
      "version": 2,
      "bankingZones": {
        "ACH": ["US"]
      },
      "zoneTemplates": {
        "ACH": [
          "name", "number", "type", "bank_name", "routing_number",
          "owner_full_name", "owner_address_line_1", "owner_address_city",
          "owner_address_state_province", "owner_address_country", "owner_address_postal_code"
        ]
      },
      "zoneDefaultCurrencies": {
        "ACH": ["USD"]
      },
      "currencySupport": {
        "USDC_SOL": {
          "zones": ["ACH"]
        }
      }
    }
  }
}
```

**Result:**
- Users can only add US bank accounts
- Form shows ACH-specific fields (routing number, account number, address)
- Deposits: USD → USDC_SOL (ACH zone fees)
- Withdrawals: USDC_SOL → USD (ACH zone fees)

### European EURC Support

Configuration for SEPA region:

```json
{
  "settings": {
    "bank": {
      "version": 2,
      "bankingZones": {
        "SEPA": ["DE", "FR", "IT", "ES", "NL", "BE", "AT", "PT", "IE", "GR"]
      },
      "zoneTemplates": {
        "SEPA": ["name", "iban", "bic", "owner_full_name"]
      },
      "zoneDefaultCurrencies": {
        "SEPA": ["EUR"]
      },
      "currencySupport": {
        "EURC_SOL_BRIDGE": {
          "zones": ["SEPA"]
        }
      }
    }
  }
}
```

**Result:**
- Users can add bank accounts from listed European countries
- Form shows SEPA-specific fields (IBAN, BIC)
- Deposits: EUR → EURC_SOL_BRIDGE (SEPA zone fees)
- Withdrawals: EURC_SOL_BRIDGE → EUR (SEPA zone fees)

### Multi-Zone with Action Overrides

Different payment methods for deposits vs withdrawals:

```json
{
  "settings": {
    "bank": {
      "version": 2,
      "bankingZones": {
        "ACH": ["US"],
        "WIRE": ["US"]
      },
      "zoneTemplates": {
        "ACH": ["name", "number", "type", "bank_name", "routing_number", "owner_full_name"],
        "WIRE": ["name", "number", "type", "bank_name", "routing_number", "owner_full_name"]
      },
      "zoneDefaultCurrencies": {
        "ACH": ["USD"],
        "WIRE": ["USD"]
      },
      "currencySupport": {
        "USDC_SOL": {
          "zones": ["ACH"]
        }
      },
      "actionOverrides": {
        "withdraw": {
          "currencySupport": {
            "USDC_SOL": {
              "zones": ["ACH", "WIRE"]
            }
          }
        }
      }
    }
  }
}
```

**Result:**
- Deposits: Only ACH available (standard processing)
- Withdrawals: User can choose ACH or WIRE
  - ACH: Lower fees, 1-3 business days
  - WIRE: Higher fees, same-day processing
- Bank account form shows US fields (supports both zones)

### International Deposits, Local Withdrawals

Accept deposits from anywhere, restrict withdrawals:

```json
{
  "settings": {
    "bank": {
      "version": 2,
      "bankingZones": {
        "SEPA": ["DE", "FR", "IT", "ES", "NL", "BE", "AT"],
        "SWIFT": ["US", "GB", "CA", "AU", "JP", "SG"]
      },
      "zoneTemplates": {
        "SEPA": ["name", "iban", "bic", "owner_full_name"],
        "SWIFT": ["name", "iban", "bic", "swift", "owner_full_name"]
      },
      "zoneDefaultCurrencies": {
        "SEPA": ["EUR"],
        "SWIFT": ["EUR", "USD", "GBP"]
      },
      "currencySupport": {
        "EURC_SOL_BRIDGE": {
          "zones": ["SEPA"]
        }
      },
      "actionOverrides": {
        "deposit": {
          "currencySupport": {
            "EURC_SOL_BRIDGE": {
              "zones": ["SEPA", "SWIFT"]
            }
          }
        }
      }
    }
  }
}
```

**Result:**
- Deposits: Accept from SEPA countries OR international SWIFT transfers
- Withdrawals: Only to SEPA countries (more cost-effective)
- Allows receiving deposits from more countries while controlling withdrawal costs

## Legacy Bank Configuration (V1)

For backward compatibility, version 1 configuration is still supported:

```json
{
  "settings": {
    "bank": {
      "version": 1,
      "fields": ["name", "number", "routing_number"],
      "hideFields": ["swift", "bic"]
    }
  }
}
```

**V1 Properties:**
- **fields** - Array of bank account fields to show
- **hideFields** - Array of bank account fields to hide

**Note:** V1 configuration is deprecated. Use V2 for new implementations.

## Best Practices

1. **Use V2 bank configuration** - The zone-based system is more flexible and maintainable
2. **Test all supported countries** - Verify the correct form fields appear for each country
3. **Match zones to actual banking relationships** - Only enable zones where you have actual banking infrastructure
4. **Consider regulatory requirements** - Ensure you're collecting all required information for AML/KYC compliance
5. **Use action overrides strategically** - Offer premium withdrawal options (WIRE) while keeping deposits simple (ACH)
6. **Document your setup** - Keep internal documentation of which zones support which currencies
7. **Test fee calculations** - Verify that fee subtypes are correctly mapped to zones
8. **Plan for expansion** - Design your zone structure to accommodate future markets
9. **Consider user experience** - More zones = more choices = potentially more confusion
10. **Monitor costs** - Different zones have different processing costs (SEPA vs SWIFT, ACH vs WIRE)

