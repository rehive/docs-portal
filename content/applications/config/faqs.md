---
date: 2018-09-17T15:21:22+02:00
title: FAQs
description: Frequently asked questions configuration
weight: 7
---

Config key: `faqs`

## Overview

The FAQs configuration controls the help section content displayed in your application. The system supports two formats: a legacy simple Q&A format and a new categorized format with multiple answers per question.

## Legacy Format

The original FAQ format uses a simple question-and-answer structure with language support.

### Properties

- **description** - Helper text displayed above FAQ content (string)
  - Default: `""`

- **questions** - Array of question objects (array)
  - Each question contains language-specific content

### Legacy Format Example

```json
{
  "faqs": {
    "description": "Find answers to common questions below",
    "questions": [
      {
        "en": {
          "question": "How do I reset my password?",
          "answer": "Click on 'Forgot Password' on the login page and follow the instructions."
        }
      },
      {
        "en": {
          "question": "What are the transaction limits?",
          "answer": "Transaction limits depend on your verification level. Basic users: $100/day, Verified users: $5000/day."
        }
      }
    ]
  }
}
```

## New Format (Categorized)

The new format organizes FAQs into categories with support for multiple answers per question and better organization.

### Properties

- **description** - Helper text displayed above FAQ content (string)
- **[language_code].categories** - Array of FAQ categories per language (array)
  - Common language codes: `en`, `es`, `fr`, `de`, etc.

### Category Structure

Each category contains:
- **index** - Sort order for the category (integer)
- **name** - Category display name (string)
- **questions** - Array of question objects (array)

### Question Structure

Each question contains:
- **index** - Sort order within category (integer)
- **title** - Question text (string)
- **answers** - Array of answer objects (array)

### Answer Structure

Each answer contains:
- **title** - Answer section heading (string)
- **text** - Answer content (string)

### New Format Example

```json
{
  "faqs": {
    "description": "Browse our help topics below",
    "en": {
      "categories": [
        {
          "index": 1,
          "name": "Account & Security",
          "questions": [
            {
              "index": 1,
              "title": "How do I reset my password?",
              "answers": [
                {
                  "title": "Via Email",
                  "text": "Click 'Forgot Password' on the login page and enter your email address."
                },
                {
                  "title": "Via Mobile",
                  "text": "Select 'Reset via SMS' and enter your registered phone number."
                }
              ]
            },
            {
              "index": 2,
              "title": "How do I enable 2FA?",
              "answers": [
                {
                  "title": "Setup Process",
                  "text": "Go to Settings > Security > Two-Factor Authentication and follow the setup wizard."
                }
              ]
            }
          ]
        },
        {
          "index": 2,
          "name": "Payments & Transactions",
          "questions": [
            {
              "index": 1,
              "title": "What are the transaction fees?",
              "answers": [
                {
                  "title": "Domestic Transfers",
                  "text": "Free for transfers between wallet users. $2.50 for bank transfers."
                },
                {
                  "title": "International Transfers",
                  "text": "1.5% of transaction amount with a minimum of $5."
                }
              ]
            }
          ]
        }
      ]
    },
    "es": {
      "categories": [
        {
          "index": 1,
          "name": "Cuenta y Seguridad",
          "questions": [
            {
              "index": 1,
              "title": "¿Cómo restablezco mi contraseña?",
              "answers": [
                {
                  "title": "Por correo electrónico",
                  "text": "Haga clic en 'Olvidé mi contraseña' en la página de inicio de sesión."
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
```

## Multi-Language Support

Both formats support multiple languages. Use standard ISO language codes as keys:

- `en` - English
- `es` - Spanish
- `fr` - French
- `de` - German
- `pt` - Portuguese
- `zh` - Chinese
- `ja` - Japanese

## Format Detection

The application automatically detects which format you're using:

- **Legacy Format**: Configuration has `questions` array at root level
- **New Format**: Configuration has language code keys (`en`, `es`, etc.) containing `categories`

## Common Use Cases

### Simple FAQ (Legacy)

```json
{
  "faqs": {
    "description": "Frequently Asked Questions",
    "questions": [
      {
        "en": {
          "question": "How do I deposit funds?",
          "answer": "Navigate to Accounts, select a currency, and click Deposit."
        }
      }
    ]
  }
}
```

### Categorized Multi-Language FAQ

```json
{
  "faqs": {
    "description": "Help Center",
    "en": {
      "categories": [
        {
          "index": 1,
          "name": "Getting Started",
          "questions": [
            {
              "index": 1,
              "title": "How do I create an account?",
              "answers": [
                {
                  "title": "Registration Steps",
                  "text": "Click Register, enter your details, and verify your email."
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
```

## Best Practices

1. **Use new format for complex FAQs** - Categories and multiple answers provide better organization
2. **Keep answers concise** - Break long answers into multiple answer objects
3. **Use consistent indexing** - Number categories and questions sequentially
4. **Provide translations** - Add FAQ content for all languages your app supports
5. **Update regularly** - Keep FAQ content current with application changes
6. **Test rendering** - Verify FAQ display in both desktop and mobile views
