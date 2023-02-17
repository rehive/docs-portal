---
date: 2022-03-04T15:21:22+02:00
title: Self-hosting
description: Self-hosting for the mobile and web apps
weight: 1
---

For the web app, you can make use of Rehive Hosting in the [App Extension in the Rehive Dashboard](https://dashboard.rehive.com/#/extensions/app/), which means there is no need to manage the codebase yourself, unless you choose to. For the mobile app, you will need to manage the codebase yourself in order to perform app store builds and submissions.

## Codebase access
The codebase for the web and mobile apps can be downloaded from the [App Extension section in the Rehive Dashboard](https://dashboard.rehive.com/#/extensions/app/codebase). For web app codebase access a Rehive Standard Subscription or higher is required and for mobile app codebase access, a Rehive Premium Subscription or higher is required.

Updates together with the a link to the changelog for each version release can be found in the dashboard. We don't currently send out notifications on every release and so you will need to periodically check the dashboard for updates.

## Recommended workflow for updates
In order to easily merge Rehive updates with your own, we recommend downloading the codebase and then following a workflow similar to the one below:
1. Download the codebase and commit it as-is to a Git repository called `rehive-wallet-react` (or `rehive-wallet-react-native` for the mobile wallet). We'll call this repository the Rehive Reference Repository.
2. Download the codebase and commit it as-is to a Git repository with a name chosen for your app, e.g. `demo-wallet-react`. We'll call this the Client Repository. When you make changes to the app, commit them to this repository.
3. Whenever you download a zip file codebase update from the Rehive Dashboard, delete all the files in the Rehive Reference Repository except for the `.git` folder which holds the repository information and then copy in the files from the update zip file. Commit and push the changes.
4. Pull the changes from the Rehive Reference Repository into the Client Repository (e.g. by running `git pull git@github.com:demo-org/demo-wallet-react.git` from whithin the Client Repository Directory). Git will prompt you to resolve any merge conflicts.  
  
You can follow the workflow above for both the web and the mobile wallet updates.

## Hosting and app store submissions
- [Web App hosting](/applications/web-application/hosting/)
- [Mobile App builds and app store submissions](/applications/mobile-application/app_store_builds/)


