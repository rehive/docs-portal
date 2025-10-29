---
date: 2018-09-17T15:21:22+02:00
title: Introduction
description: App extension configuration overview
weight: 0
---

## Overview

The app extension configuration system allows you to customize every aspect of your Rehive wallet application through a JSON configuration object. This system provides extensive control over authentication flows, user interface elements, business features, and user workflows.

## Managing Configuration

Configuration is managed through the **Rehive Dashboard**:

1. Navigate to **Extensions** in your Rehive Dashboard
2. Select the **App Extension**
3. Edit the JSON configuration in the configuration editor
4. Save your changes to apply them to your application

Changes to the configuration are immediately available to your application through the app extension API.

## Configuration Structure

The configuration is organized into multiple sections, each controlling different aspects of your application:

- **actions** - Transaction actions and their visibility (controlled by subtypes)
- **auth** - Registration and login flows
- **menu** - Navigation menu items
- **accounts** - Account display and behavior
- **design/colors/themes** - Visual appearance and branding
- **business** - Business-specific features (invoices, payouts, products)
- **checkout** - Payment checkout experience
- **onboarding** - User onboarding flow and verification
- **profile** - User profile fields and documents
- **settings** - Application settings and bank account configuration
- **faqs** - Help section content
- **pin** - PIN verification requirements
- **verification** - Document verification requirements
- **cards** - Informational cards on home screen
- **sliders** - Onboarding slider content
- **screens** - Screen-specific configurations
- **product** - Product and point-of-sale features
- **developers** - Developer tools and documentation

## Configuration API

The wallet application fetches configuration from two endpoints:

- **Company Config**: `https://app.services.rehive.com/public/company/?company_id={id}`
- **User Config**: `https://app.services.rehive.com/user/`

Configuration values follow this hierarchy (highest to lowest priority):

1. **User-specific configuration** - Individual user overrides
2. **Company configuration** - Company-wide settings
3. **Default configuration** - Built-in fallback values

## Important Notes

- You only need to include configuration values you want to override from the defaults
- Configuration changes are applied immediately without requiring application redeployment
- Invalid JSON structure will prevent configuration from loading
- Some features are controlled by Platform API settings (like subtypes) rather than app configuration

Each section of the configuration is described in detail in the following pages, including the JSON structure and available options.
