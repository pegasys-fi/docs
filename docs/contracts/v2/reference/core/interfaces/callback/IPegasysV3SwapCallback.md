Any contract that calls IPegasysV3PoolActions#swap must implement this interface

## Functions

### pegasysV3SwapCallback

```solidity
  function pegasysV3SwapCallback(
    int256 amount0Delta,
    int256 amount1Delta,
    bytes data
  ) external
```

Called to `msg.sender` after executing a swap via IPegasysV3Pool#swap.

In the implementation you must pay the pool tokens owed for the swap.
The caller of this method must be checked to be a PegasysV3Pool deployed by the canonical PegasysV3Factory.
amount0Delta and amount1Delta can both be 0 if no tokens were swapped.

#### Parameters:

| Name           | Type   | Description                                                                                                                                                                             |
| :------------- | :----- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `amount0Delta` | int256 | The amount of token0 that was sent (negative) or must be received (positive) by the pool by the end of the swap. If positive, the callback must send that amount of token0 to the pool. |
| `amount1Delta` | int256 | The amount of token1 that was sent (negative) or must be received (positive) by the pool by the end of the swap. If positive, the callback must send that amount of token1 to the pool. |
| `data`         | bytes  | Any data passed through by the caller via the IPegasysV3PoolActions#swap call.                                                                                                          |
