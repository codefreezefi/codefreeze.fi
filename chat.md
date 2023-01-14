---
layout: page
title: Chat
description: From 2023 on we use the open and distributed communication protocol Matrix for our chat.
---

# {{page.title}}

From 2023 on we use the open and distributed communication protocol [Matrix](https://matrix.org/) for our chat.

All chat channels are hosted in our own homeserver: `matrix.codefreeze.fi`.

Joining the communication on Matrix is **highly recommended** in order to keep up to date before and during the event, because it is the only real-time communication medium we use.

## 1. Create a Matrix account

> If you already have an account, you can skip this step.

First, you need a Matrix account. You get an account by signing up on one of the many [public homeservers](https://joinmatrix.org/servers/), for example [matrix.im](https://matrix.im). Visit the homeserver and register a new account.

In order to keep the costs down we do not allow to register new accounts on the Codefreeze homeserver `matrix.codefreeze.fi`, because if these accounts are used to join channels on other Matrix homeservers, incoming federation traffic will be significantly increased.

## 2. Join the Codefreeze info channel

Join the general channel for information about Codefreeze (called `#info`) using [this link](https://matrix.to/#/#info:matrix.codefreeze.fi).

## 3. Join the channel for the year

Every year has its own channel. You should join the channel for the year that you plan to attend:

- [`#2023`](https://matrix.to/#/#2023:matrix.codefreeze.fi)
- [`#2024`](https://matrix.to/#/#2024:matrix.codefreeze.fi)

## 4. Optional: Install mobile applications

You can use a browser-based client from your mobile phone (like for example [FluffyChat](https://fluffychat.im/web/#/home)) or install a native app, for example [Element](https://app.element.io/mobile_guide/) which has apps for Android and iOS and a [web-based client](https://app.element.io/).

## Other relevant channels

You might want to join other channels that are relevant for Codefreeze:

- [`#attending-with-children`](https://matrix.to/#/#kids:matrix.codefreeze.fi) for people joining Codefreeze with children
- [`#meta`](https://matrix.to/#/#meta:matrix.codefreeze.fi) for Meta discussion about the use of Matrix

## Requesting additional channels

You may at any time request additional public or private channels, just reach out to one of Codefreeze Matrix homeserver admins:

- [`@coderbyheart:matrix.im`](https://matrix.to/#/@coderbyheart:matrix.im) (Markus Tacker)
- [`@aurora:codefreeze.fi`](https://matrix.to/#/@aurora:codefreeze.fi) (Administrative backup account)

## Infrastructure

`matrix.codefreeze.fi` runs on an _small_ [AWS Lightsail](https://aws.amazon.com/lightsail/) instance (2 GB RAM, 2 vCPUs, 60 GB SSD) which costs USD$ 10 / month and is hosted in the `eu-north` (Stockholm) region.
