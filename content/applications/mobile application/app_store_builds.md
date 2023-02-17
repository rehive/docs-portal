---
date: 2022-03-04T15:21:22+02:00
title: App Store Builds and Submissions
description: Mobile App Store Builds and Submissions
weight: 2
---

As of January 2022, Rehive no longer provides managed iOS and Android App Store submissions, however you can use this guide to get started managing your own builds and submissions for the iOS App Store and the Android Play Store.

## Requirements
 - Enrollment into the Apple Developer Program as an Orginization (not an Individual). Visit this [link](https://developer.apple.com/programs/enroll/) to view the requirements and start the process
 - A [Google Play Developer](https://play.google.com/console/about/) account registered under your business name (not an individual account).
 - An [Expo Account](https://expo.dev/) which will be used build the app bundles
 - The Rehive Mobile App source code which can be downloaded from the [App Extension section in the Rehive Dashboard](https://dashboard.rehive.com/#/extensions/app/codebase). For codebase access a Rehive Premium or Enterprise subscription is required.
 - [A Firebase account](https://firebase.google.com/) for setting up push notifications on Android.
- App icon in PNG format 1024 x 1024px
- App splash screen in PNG format 1242 x 2436px
- General branding info required by the app stores like App name and description

## Initial setup 
1. Log in to your Apple Developer account, navigate to the [Certificates, Identifiers & Profiles](https://developer.apple.com/account/resources/identifiers/bundleId/add/bundle) section and create a new unique bundle identifier for your app. Apple recommends  using a reverse-domain name style string (i.e., com.domainname.app).
2. Go to the [Apps Section](https://appstoreconnect.apple.com/apps) in Apple Developer account and create a new app. Choose the bundle identifier you created in step one and you can use a unique string that identifies your app as the SKU. Note down the bundle identifier.
3. Navigate to the [Google Play Console](https://play.google.com/console/u/0/developers) and create your App.
4. On the [All Projects](https://expo.dev/accounts/rehive/projects) page in Expo, create a new project. Note down the EAS project ID and the app slug.
5. Download the Mobile app source code from the [App Extension section in the Rehive Dashboard](https://dashboard.rehive.com/#/extensions/app/codebase)
6. Create a `.env.production` file with your app details. You can use .env.example in the root project directory as a template. We actually recommend creating two files, `.env.staging` and `.env.production`. For the staging app you can create separate apps for testing which will be useful down the line. Note that this means you'll need to repeat steps 2 to 4 above for your staging app. You can use the example file below as a template. The `appUpdatesUrl` should include your EAS project ID in the format shown in our example below.
7. Create an eas.json file in the root directory. This is required for EAS builds. You can use the eas.json.example file in the root project directory as a template. Note that many of the values are duplicated accross your `.env` files and the `eas.json` file. Unfortunately due to the way EAS was designed there is currently no way around this.  
8. Replace the `/asset/icons/icon.png` and the `/assets/icons/splash.png` files with your own app icon and splash screen.


## Android push notification setup (optional)
1. To create a Firebase project, go to the [Firebase console](https://console.firebase.google.com/) and click on Add project.
2. In the console, click the setting icon next to **Project overview** and open **Project settings**. Then, under **Your apps**, click the Android icon to open **Add Firebase to your Android app** and follow the steps. **Make sure that the Android package name you enter is the same as the value of `android.package` from your app config.**
3. After registering the app, download the google-services.json file and place it in your project's root directory.

## Sentry setup for error reporting (optional)
1. [Sign up for Sentry](https://sentry.io/signup/) and create a project in your Dashboard. Take note of your organization name, project name, and DSN. The organization name is available in your Organization settings tab, the project name is available in your project's Settings > Projects tab (find it in the list) and the DSN is available in your project's Settings > Projects > Project name > Client Keys (DSN) tab.
3. Add the `sentryOrg`, `sentryDSN` and `sentryProject` values to your `.env` file.
4. Go to the Sentry API section, and create an auth token. The token requires the scopes: `org:read`, `project:releases`, and `project:write`. Save this for a step in the next setup.

## Initial build environment setup
1. Using the terminal, navigate to the project directory.
2. Use nvm or  similar node version manager to switch to node v16. i.e. `nvm install` and  `nvm use v16`.
3. Run `yarn global add expo-cli@6.1.0` to install exp globally.
4. Run `yarn install` to install the project dependancies.
5. Authenticate your expo account by running `expo login` and following the prompts.
5. If you configured your Firebase and Sentry credentials, upload them as Expo secrets:
```bash
eas secret:create --name SENTRY_AUTH_TOKEN --scope=account --type=string --value=<auth key from sentry>  
eas secret:create --scope project --name GOOGLE_SERVICES_JSON --type file --value ./google-services.json
```
6. [Install direnv](https://direnv.net/docs/installation.html) or similar library for managing environmental variables.

## Building the app
1. Load the app config from environmental variables: 
```bash
cp .env.production .env && direnv allow .
```
2. Update the version number in version.json. The android build number always needs to be higher than that of previous builds to be accepted by the Play Store.
3.Build the app bundles using Expo's EAS build:
```bash
eas build -e production -p all
```
4. Download the android and iOS bundles using the links outputted by the previous step or by logging or from the [Expo dashboard](https://expo.dev/).
5. For submission to the iOS App Store, you will need to download and install the [Transporter App](https://apps.apple.com/us/app/transporter/id1450874784?mt=12) and for the Android submission, you can create a release and upload the bundle directly in the [Google Play Console](https://play.google.com/console/accept-terms).

## Over-the-air updates
Expo offers OTA updates for applying changes to apps without going through the build process. Read more [here](https://docs.expo.dev/eas-update/introduction/). Follow these steps to publish and apply an OTA update.
1. Publish the changes to a branch by running: `eas update --branch v4.0.11 --message v4.0.11` (replace v4.0.11 with the correct version tag matching your version.json).
2. Apply the update to production (or staging) by running `eas channel:edit production --branch v4.0.11`





