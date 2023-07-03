---
id: deployments
title: Deployment Addresses
---

# Pegasys Contract Deployments

The latest version of `@pegasys-fi/v3-core`, `@pegasys-fi/v3-periphery`, `@pegasys-fi/swap-router-contracts`, and `@pegasys-fi/v3-staker` are deployed at the addresses listed below. Integrators should **no longer assume that they are deployed to the same addresses across chains** and be extremely careful to confirm mappings below.


| Contract | Address |
| -------- | ------- | 
| [PegasysV3Factory](https://github.com/Pegasys-fi/v3-core/contracts/PegasysV3Factory.sol) | `0xeAa20BEA58979386A7d37BAeb4C1522892c74640`           | 
| Multicall2 | `0xc9E6E07CB460F36A6D5826f70647eff7e1823899`|
| [ProxyAdmin](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v2.4.1-solc-0.7-2/contracts/proxy/ProxyAdmin.sol) | `0x7fC89F7B58737aC833630DDB42e1BA8CE486eABA`| 
| [TickLens](https://github.com/Pegasys-fi/v3-periphery/contracts/lens/TickLens.sol)  | `0xbfd8137f7d1516D3ea5cA83523914859ec47F573`| 
| [NFTDescriptor](https://github.com/Pegasys-fi/v3-periphery/contracts/libraries/NFTDescriptor.sol) | `0x116EEfffB6D8A902294E74CcFf12C6DE6b4A2dC6` |
| [NonfungibleTokenPositionDescriptor](https://github.com/Pegasys-fi/v3-periphery/contracts/NonfungibleTokenPositionDescriptor.sol) | `0xFAF4968F8DA756ddB6CbF2AFBBA40e5c73465fEF` | 
| [NonfungiblePositionManager](https://github.com/Pegasys-fi/v3-periphery/contracts/NonfungiblePositionManager.sol) | `0x4dB158Eec5c5d63F9A09535882b835f36d3fd012` | 
| [V3Migrator](https://github.com/Pegasys-fi/v3-periphery/contracts/V3Migrator.sol) | `0x2b75Ee991F4E5572451E186E5cd2148Ba4B286e5`  | 
| [QuoterV2](https://github.com/Pegasys-fi/v3-periphery/blob/main/contracts/lens/QuoterV2.sol) | `0x4aa7D3a3D8025e653886EbD5f2e9416a7b4ADe22`  | 
| [SwapRouter02](https://github.com/Pegasys-fi/swap-router-contracts/blob/main/contracts/SwapRouter02.sol) | `0xd93c60A8E0F53361524698Cce1BBb65E080b8976`| 
| [Permit2](https://github.com/Pegasys-fi/permit2)  | `0x000000000022d473030f116ddee9f6b43ac78ba3` | 
| [UniversalRouter](https://github.com/Pegasys-fi/universal-router/blob/main/contracts/UniversalRouter.sol) | `0x0d476148769E4CF5AFFB59e5552cAC8a30D13669` |

These addresses are final and were deployed from these npm package versions:

- [`@pegasys-fi/v3-core@1.0.0`](https://github.com/Pegasys-fi/v3-core/tree/v1.0.0)
- [`@pegasys-fi/v3-periphery@1.0.0`](https://github.com/Pegasys-fi/v3-periphery/tree/v1.0.0)
- [`@pegasys-fi/swap-router-contracts@1.1.0`](https://github.com/Pegasys-fi/swap-router-contracts/tree/v1.1.0)
- [`@pegasys-fi/v3-staker@1.0.2`](https://github.com/Pegasys-fi/v3-staker/tree/v1.0.2)

# Pegasys Pool Deployments

Every Pegasys pool is a unique instance of the `PegasysV3Pool` contract and is deployed at its own unique address. The contract source code of the pool will be auto-verified on etherscan. For example, here is the [ETH/USDC 0.3% pool](https://explorer.rollux.com/address/0x391bca3c3c5a71e369d284b0cd81a7fe8c097e20) on Ethereum mainnet.

You can look up the address of an existing pool on [Pegasys Info](https://info.pegasys.fi/#/) or by calling the [`getPool`](../reference/core/interfaces/IPegasysV3Factory.md#getpool) function on the `PegasysV3Factory` contract.

```solidity
getPool("0x368433CaC2A0B8D76E64681a9835502a1f2A8A30", "0x4200000000000000000000000000000000000006", 3000)
```

# Wrapped Native Token Addresses

The Pegasys Protocol supports trading of ERC20 tokens. In order to swap a native asset like ETH, the Pegasys protocol wraps these assets in an ERC20 wrapped native token contract.

| Network          | ChainId  | Wrapped Native Token | Address                                      |
| ---------------- | -------- | --------------------- | -------------------------------------------- |
| Rollux           | `570`    | WSYS                  | `0x4200000000000000000000000000000000000006` |
| Rollux           | `570`    | WETH                  | `0xaA1c53AFd099E415208F47FCFA2C880f659E6904` |
| Rollux           | `570`    | WBTC                  | `0x2A4DC2e946b92AB4a1f7D62844EB237788F9056c` |
