# Signet Trade escrow-service Node SDK

<!-- [![NPM version](https://img.shields.io/npm/v/@signet-trade/escrow-service-sdk.svg)](https://www.npmjs.com/package/@signet-trade/escrow-service-sdk) -->
<!-- [![NPM downloads](https://img.shields.io/npm/dm/@signet-trade/escrow-service-sdk.svg)](https://www.npmjs.com/package/@signet-trade/escrow-service-sdk) -->
[![](https://dcbadge.vercel.app/api/server/7zzX3xGs6h?style=flat)](https://discord.gg/7zzX3xGs6h)

[![Build Status](https://github.com/signet-trade/escrow-service-sdk-js/actions/workflows/.github/workflows/main.yaml/badge.svg)](https://github.com/signet-trade//escrow-service-sdk-js/actions)
<!-- [![Coverage Status](https://codecov.io/gh/placeholder/branch/master/graph/badge.svg)](https://codecov.io/gh/placeholder) -->
<!-- [![Known Vulnerabilities](https://snyk.io/test/github/placeholder/badge.svg)](https://snyk.io/test/github/placeholder) -->

The Signet Trade escrow-service Node SDK provides your JavaScript & TypeScript applications access to the escrow-service API.

This library can be used by NodeJS applications, tools, and other automations to access and manage cryptocurrency coins, tokens, and wallets.

## Installation
You can install the SDK using npm/yarn/pnpm
```
npm install @signet-trade/escrow-service-sdk
```
```
pnpm install @signet-trade/escrow-service-sdk
```
```
yarn add @signet-trade/escrow-service-sdk
```

## Usage
#### Creating an API client
```typescript
import { EscrowServiceV1 } from '@signet-trade/escrow-service-sdk';

// Create new client with your private access tokens
const escrowService = new EscrowServiceV1({
	SIGNET_ACCESS_KEY: '<my-public-key>',
	SIGNET_ACCESS_SECRET: '<my-private-key>',
});
```
