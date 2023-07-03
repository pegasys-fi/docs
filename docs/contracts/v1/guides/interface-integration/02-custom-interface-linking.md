---
id: custom-interface-linking
title: Custom Linking
---

# Query Parameters

The Pegasys front-end supports URL query parameters to allow for custom linking to the Pegasys frontend. Users and developers can use these query parameters to link to the Pegasys frontend with custom prefilled settings.

Each Page has specific available URL parameters that can be set. Global parameters can be used on all pages.

A parameter used on an incorrect page will have no effect on frontend settings. Parameters not set with a URL parameter will be set to standard frontend defaults.

## Global

| Parameter | Type     | Description                      |
| :-------- | :------- | :------------------------------- |
| theme     | `String` | Sets them to dark or light mode. |

### Theme Options

Theme can be set as `light` or `dark`.

### Example Usage

`https://app.pegasys.fi/#/swap?theme=dark`

## Swap Page

| Parameter      | Type             | Description                                                            |
| :------------- | :--------------- | :--------------------------------------------------------------------- |
| inputCurrency  | `address`        | Input currency that will be swapped for output currency.               |
| outputCurrency | `address or ETH` | Output currency that input currency will be swapped for.               |
| exactAmount    | `number`         | The custom token amount to buy or sell.                                |
| exactField     | `string`         | The field to set custom token amount for. Must be `input` or `output`. |

### Defaults

ETH defaults as the input currency. When a different token is selected for either input or output ETH will default as the opposite selected currency.

### Constraints

Addresses must be valid ERC20 addresses. Slippage and amount values must be valid numbers accepted by the frontend \(or error will prevent from swapping\). Slippage can 0, or within the range 10-&gt;9999 bips \(which converts to 0%, 0.01%-&gt;99%\)

When selecting ETH as the output currency a user must also choose an inputCurrency that is not ETH \(to prevent ETH being populated in both fields\)

### Setting Amounts

Two parameters, exactField and exactAmount can be used to set specific token amounts to be sold or bought. Both fields must be set in the URL or there will be no effect on the settings.

### Example Usage

`https://app.pegasys.fi/#/swap?exactField=input&exactAmount=10&inputCurrency=0x368433CaC2A0B8D76E64681a9835502a1f2A8A30`

## Pool Page

The Pool page is made up of 2 subroutes: `add`, `remove`.

### Add Liquidity

| Parameter | Type      | Description                                                                          |
| :-------- | :-------- | :----------------------------------------------------------------------------------- |
| Token0    | `address` | Pool to withdraw liquidity from. \(Must be an ERC20 address with an existing token\) |
| Token1    | `address` | Pool to withdraw liquidity from. \(Must be an ERC20 address with an existing token\) |

### Example Usage

`https://app.pegasys.fi/#/add/v1/0x5B0aC6194499621630ddebb30c4aBE37037b30Ec/0x48023b16c3e81AA7F6eFFbdEB35Bb83f4f31a8fd`

## Remove Liquidity

| Parameter | Type      | Description                                                                          |
| :-------- | :-------- | :----------------------------------------------------------------------------------- |
| Token0    | `address` | Pool to withdraw liquidity from. \(Must be an ERC20 address with an existing token\) |
| Token1    | `address` | Pool to withdraw liquidity from. \(Must be an ERC20 address with an existing token\) |

### Example Usage

`https://app.pegasys.fi/#/remove/0x5B0aC6194499621630ddebb30c4aBE37037b30Ec-0xaA1c53AFd099E415208F47FCFA2C880f659E6904`
