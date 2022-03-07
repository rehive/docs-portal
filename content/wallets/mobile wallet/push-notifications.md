---
date: 2022-03-04T15:21:22+02:00
title: Push notifications
description: Mobile wallet push notifications.
weight: 2
---

Push notifications in the Rehive apps are facilitated by the Expo framework on which the mobile react native app is built and therefore only available in apps also built on Expo. This guide summarizes how to get push notifications working in your app.

## Setup

1. Setup FCM for android on your Firebase account: follow the steps provided in both the "Client Setup" and "Uploading Server Credentials" sections of this guide https://docs.expo.dev/push-notifications/using-fcm/
2. Request Rehive to enable push notifications for your app id on the service
3. Get the users push notification token by following this guide / using this code: https://docs.expo.dev/push-notifications/push-notifications-setup/
4. Add user device/IMEI to platform via the `/devices/` and `/devices/{id}/apps/` endpoints. We usually do this along with step 3 during the registration process and/or in settings.

```javascript
async function handleAddDevice() {
  // Get user push notification token using guide from step 3
  const token = await registerForPushNotificationsAsync();
  if (token) {
    // Add IMEI about the device using 'expo-constants' and the device name from 'expo-device' (this name could also be an input from the user)
    // (optional) Add some metadata about the device using 'expo-device'
    const dataDevice = {
      imei: Constants.deviceId,
      name: Device.deviceName,
      metadata: {
        brand: Device.brand,
        modelName: Device.modelName,
        osName: Device.osName,
        osVersion: Device.osVersion,
      },
    };
    // Add device to rehive using a POST to `/user/devices/`
    const respDevice = await addDevice(dataDevice);

    if (respDevice.status === 'success') {
      const dataApp = {
        name: 'Wallet',
        type: 'expo',
        token,
      };
      const deviceId = respDevice?.data?.id;
      // Add app details with expo token to `/devices/{id}/apps/`
      const respApp = await addDeviceApp(deviceId, dataApp);
      if (respApp.status === 'success') {
        // handle successful device add
        showToast({
          text: 'Device ' + Device.deviceName + ' successfully added',
          variant: 'success',
        });
      } else {
        setError(respApp.message ? respApp.message : 'Unable to add device');
      }
    } else {
      setError(
        respDevice.message ? respDevice.message : 'Unable to add device',
      );
      showToast({
        text: 'Unable to add device',
        variant: 'error',
      });
    }
  }
}
```

## How this works?

- The notification service receives the event and if a push notification is configured for it, it tries to process it.
- If the user has /user/devices/ on the platform, then service will fetch all expo tokens from each device's list of apps.
- Using these tokens, the service will create a push notification on expo.
- Expo will hand these notifications over to FCM and APN (Apple Push Notification Service) and these will be sent to the device.

## Further reading / links

- General notes on sending notifications with expo: https://docs.expo.dev/push-notifications/sending-notifications/
- Expo push notification tool (for testing): https://expo.dev/notifications
- `expo-notifications` package full documentation: https://docs.expo.dev/versions/latest/sdk/notifications/
