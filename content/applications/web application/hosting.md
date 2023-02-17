---
date: 2022-03-04T15:21:22+02:00
title: Hosting
description: Hosting the web app
weight: 2
---
We recommend using Rehive Hosting. You can use the [App Extension in the Rehive Dashboard](https://dashboard.rehive.com/#/extensions/app/) to customize your app and set your custom domain. 

However, if you need to customize the app beyond what is supported by the Rehive App Extension, you will need to download the codebase and make changes to the code. **Note that when you make changes to the code, it is no longer possible to make use of Rehive hosting and you will need to host the app yoursel.** 

When you opt for self-hosting, you will also be responsible for applying updates. Be sure to follow the [recommended workflow](/applications/get-started/self-hosting/) for downloading the codebase and applying updates. 

The Rehive App is a standard React app and so the process for hosting it should not be too complicated and you can use your own server or one of many providers. Here's an example of the process to follow to get your app hosted on Vercel:

## Example: Hosting using Vercel
1. Follow the steps in the "Configuration" section of our readme in the web app code repository to allow hosting on a custom domain.
2. Create an account a [Vercel account](https://vercel.com/). Once logged in, link the repository via github.
3. Set `yarn build` as the build command and `yarn install` as the install command.
4. Vercel will deploy automatically ad automatically update the deployment when changes are committed to the main branch on Github.
