---
date: 2018-09-17T15:21:22+02:00
title: Multi-Sig Signer
description: Multi-sig signer setup and usage.
weight: 5
---

In order to utilise the Hot Wallet functionality on a production company it needs to be setup and configured in combination with Rehive's multi-sig signer(MSS) tool. The MSS is a service deployed
within your own infrastructure and holds the private key for your Hot Wallet.

Once setup any outgoing sends initiated by users within your company will trigger the Stellar Extension to call your setup MSS for a transaction signature before broadcasting a Stellar transaction to the network.

The Github repo can be found here: https://github.com/rehive/multisig-stellar-signer. It includes instructions for setting up a production deploy as well as running it locally.
