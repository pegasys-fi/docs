Any contract that calls IPegasysV3PoolActions#flash must implement this interface

## Functions

### pegasysV3FlashCallback

```solidity
  function pegasysV3FlashCallback(
    uint256 fee0,
    uint256 fee1,
    bytes data
  ) external
```

Called to `msg.sender` after transferring to the recipient from IPegasysV3Pool#flash.

In the implementation you must repay the pool the tokens sent by flash plus the computed fee amounts.
The caller of this method must be checked to be a PegasysV3Pool deployed by the canonical PegasysV3Factory.

#### Parameters:

| Name   | Type    | Description                                                                    |
| :----- | :------ | :----------------------------------------------------------------------------- |
| `fee0` | uint256 | The fee amount in token0 due to the pool by the end of the flash               |
| `fee1` | uint256 | The fee amount in token1 due to the pool by the end of the flash               |
| `data` | bytes   | Any data passed through by the caller via the IPegasysV3PoolActions#flash call |
