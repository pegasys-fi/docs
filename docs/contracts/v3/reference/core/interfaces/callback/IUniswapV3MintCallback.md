Any contract that calls IUniswapV2PoolActions#mint must implement this interface

## Functions

### uniswapV2MintCallback

```solidity
  function uniswapV2MintCallback(
    uint256 amount0Owed,
    uint256 amount1Owed,
    bytes data
  ) external
```

Called to `msg.sender` after minting liquidity to a position from IUniswapV2Pool#mint.

In the implementation you must pay the pool tokens owed for the minted liquidity.
The caller of this method must be checked to be a UniswapV2Pool deployed by the canonical UniswapV2Factory.

#### Parameters:

| Name          | Type    | Description                                                                   |
| :------------ | :------ | :---------------------------------------------------------------------------- |
| `amount0Owed` | uint256 | The amount of token0 due to the pool for the minted liquidity                 |
| `amount1Owed` | uint256 | The amount of token1 due to the pool for the minted liquidity                 |
| `data`        | bytes   | Any data passed through by the caller via the IUniswapV2PoolActions#mint call |
