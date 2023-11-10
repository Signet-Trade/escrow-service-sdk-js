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
You can install the SDK using npm or yarn
```
npm install @signet-trade/escrow-service-sdk
```
```
yarn add @signet-trade/escrow-service-sdk
```

## Usage
#### Creating an API client
```typescript
import { EscrowServiceV0 } from '@signet-trade/escrow-service-sdk';

// Create new client with your private access tokens
const escrowService = new EscrowServiceV0({
	SIGNET_ACCESS_KEY: '<my-public-key>',
	SIGNET_ACCESS_SECRET: '<my-private-key>',
});
```

#### Validate Wallet Address
```typescript
const responseData = await escrowService.direct.validateWallet({
	cryptoName: 'noso',
	walletAddress: '1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX'
});
```

#### Create Condition
```typescript
const responseData = escrowService.escrow.createEscrow({
	condition: 'payment_processor',
	endpoint: 'https://example.com', // OPTIONAL Status Notification
	params: {
		amount: '100',
		cryptoName: 'noso',
		walletAddress: '1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX',
	},
});
```

#### Get Status
```typescript
const responseData = escrowService.escrow.getStatus({
	escrowId: 'da93bbdf-14c7-4a4c-a24f-6501143dc84a',
});
```
