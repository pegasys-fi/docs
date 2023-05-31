---
id: quick-start
title: SDK Quick start
---

The Pegasys SDK exists to help developers build on top of Pegasys. It's designed to run in any environment that can execute JavaScript (think websites, node scripts, etc.). While simple enough to use in a hackathon project, it's also robust enough to power production applications.

# Installation

The easiest way to consume the SDK is via [npm](https://github.com/Pegasys-fi/v1-sdk). To install it in your project, simply run `yarn add @pegasys-fi/v2-sdk` (or `npm install @pegasys-fi/v2-sdk`).

# Usage

To run code from the SDK in your application, use an `import` or `require` statement, depending on which your environment supports. Note that the guides following this page will use ES6 syntax.

## ES6 (import)

```typescript
import { ChainId } from '@pegasys-fi/v2-sdk'
console.log(`The chainId of mainnet is ${ChainId.MAINNET}.`)
```

## CommonJS (require)

```typescript
const PEGASYS = require('@pegasys-fi/v2-sdk')
console.log(`The chainId of mainnet is ${PEGASYS.ChainId.MAINNET}.`)
```

# Reference

Comprehensive reference material for the SDK is publicly available on the [Pegasys Labs Github](https://github.com/Pegasys).
