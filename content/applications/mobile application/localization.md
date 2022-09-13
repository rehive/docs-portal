---
date: 2022-03-09T15:21:22+02:00
title: Localization
description: Mobile application localization.
weight: 3
---

## Multi-language

The rehive app uses i18n standard json language files along with i18next to manage translations in the app. These language files are divided into the following different namespaces:

- Common
- Accounts
- Auth
- Onboarding
- PoS
- Products
- Profile
- Rewards
- Settings

The full list of `json` files can be found [here](https://github.com/rehive/rehive-javascript/tree/locales/locales).

### Usage

The base translations are hardcoded on the app. However each one of these can be overwritten ~~using the locales section of the app service in the dashboard (forthcoming) or~~ using the [App service directly](#app-service) as covered below.

#### Setting default app language

The default app language is the one that is used for the auth flows of your app as well as the default for when new users register an account with your app id. The is set in the app config, under `auth/language`.

#### Variables

Variables can be included in the translation strings using `{{variable_name}}` and this supports nested fields (e.g. `{{object.variable}}`). The list of available resources in each namespace will be added soon, but for now every translation has access to the following rehive resources:

- [`user`](https://docs.rehive.com/platform/core-resources/users/)
- [`company`](https://docs.rehive.com/platform/core-resources/companies/)

#### Formatting

The following formatting identifiers are available:

- `**text**` for Bold

#### Config

Above the fixed content in the app, there is also client generated app content such as home screen prompts/alerts, group names/descriptions, fee names, etc. These can also be localized by providing a key as the text/label field in the dashboard and then adding the related translations to the app service.

### Language files

#### Codebase

The locale files are currently located in the base `config` folder and each individual screen's `config` folder in a folder named `locales` (see structure in image in step 1 below).

##### Adding a language

Steps to add a new language to the app's codebase:

1. Create a new json file in each config folder following this naming convention: `<common/namespace>.<language_id>.json`

![image](https://user-images.githubusercontent.com/35782774/157740092-95a0aede-4447-417a-b47e-9abc118718cb.png)

2. Import this file into the `index.js` file of each folder and add it to the export object

```js
import en from './home.en';
import af from './home.af';

export default { en, af };
```

3. Add the language to the `resources` object in the `utility/i18n/locales.js` file by adding the language id as a top level field and spreading the namespace language objects into the `common` namespace as seen in the `en` example (this is temporary until proper namespace distinction in the app is implemented).

#### App service

Currently translations have to be added through the application service API/swagger (while the dashboard UI for managing locales is being completed). This can be accessed at https://app.services.rehive.io/swagger/ (base URL: app.services.rehive.io/api). Note: remember to authorize by adding `Token <admin_token>` by clicking the green Authorize button top right of the screen.

##### Adding a new language/overriding translations

This is done by making a new POST request to `/admin/locales/` with the following information:

```json
{
  "id": "string",
  "translation": {},
  "name": "string"
}
```

where `id` is the language code (i.e. `en-US`), `name` is the language name (English (US)) and `translation` is a nested json object of each locale file for example:

```json
{
  "translation": {
    "accounts": { ... },
    "auth": { ... },
    "common": { ... },
    ...
  },
}
```

##### Updating translations

This is done by making a PUT/PATCH request to `/admin/locales/{locales_id}/` where `locales_id` is the `id` / language code used above (i.e. `en-US`). When updating the locales please ensure to include the entire new translations object.

#### Localize

To be added
