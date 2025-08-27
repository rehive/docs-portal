---
date: 2022-03-04T15:21:22+02:00
title: Push notifications
description: Mobile application push notifications.
weight: 3
---

Push notifications in the Rehive apps are facilitated by the Expo framework on which the mobile react native app is built. The Rehive white-label mobile app already has all the necessary push notification code integrated - you just need to configure the services.

## Setup

The white-label app comes with push notification functionality pre-built. To enable push notifications:

**1. Setup Firebase for Android:**
- Go to the [Firebase console](https://console.firebase.google.com/) and create a new project
- In the console, click the setting icon next to **Project overview** and open **Project settings**
- Under **Your apps**, click the Android icon to add Firebase to your Android app
- Make sure the Android package name matches the value of `android.package` from your app config
- Download the `google-services.json` file and place it in your project's root directory
- Follow the "Uploading Server Credentials" section of [Expo's FCM guide](https://docs.expo.dev/push-notifications/using-fcm/)

**2. Request activation from Rehive:**
- Contact Rehive support to activate push notifications on the Notification extension for your company
- Provide them with your app ID

**3. Configure notifications in the dashboard:**
- Once activated, go to the Notification extension in your Rehive Dashboard
- Configure the notification templates and settings for different events
- Set up which events should trigger push notifications

**Note:** The white-label app already includes the code to:
- Request push notification permissions from users
- Register devices and tokens with Rehive
- Handle incoming push notifications
- Display notifications to users

This functionality is automatically triggered during user registration and can be managed in the app's settings.

## How this works

- The notification service receives the event and if a push notification is configured for it, it tries to process it.
- If the user has /user/devices/ on the platform, then service will fetch all expo tokens from each device's list of apps.
- Using these tokens, the service will create a push notification on expo.
- Expo will hand these notifications over to FCM and APN (Apple Push Notification Service) and these will be sent to the device.

## Further reading / links

- General notes on sending notifications with expo: https://docs.expo.dev/push-notifications/sending-notifications/
- Expo push notification tool (for testing): https://expo.dev/notifications
- `expo-notifications` package full documentation: https://docs.expo.dev/versions/latest/sdk/notifications/
