Any contract that calls IPegasysV2PoolActions#flash must implement this interface

## Functions

### pegasysV2FlashCallback

```solidity
  function pegasysV2FlashCallback(
    uint256 fee0,
    uint256 fee1,
    bytes data
  ) external
```

Called to `msg.sender` after transferring to the recipient from IPegasysV2Pool#flash.

In the implementation you must repay the pool the tokens sent by flash plus the computed fee amounts.
The caller of this method must be checked to be a PegasysV2Pool deployed by the canonical PegasysV2Factory.

#### Parameters:

| Name   | Type    | Description                                                                    |
| :----- | :------ | :----------------------------------------------------------------------------- |
| `fee0` | uint256 | The fee amount in token0 due to the pool by the end of the flash               |
| `fee1` | uint256 | The fee amount in token1 due to the pool by the end of the flash               |
| `data` | bytes   | Any data passed through by the caller via the IPegasysV2PoolActions#flash call |
