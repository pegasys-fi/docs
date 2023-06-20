Provides validation for callbacks from Pegasys V3 Pools

## Functions

### verifyCallback

```solidity
  function verifyCallback(
    address factory,
    address tokenA,
    address tokenB,
    uint24 fee
  ) internal returns (contract IPegasysV3Pool pool)
```

Returns the address of a valid Pegasys V3 Pool

#### Parameters:

| Name      | Type    | Description                                                                       |
| :-------- | :------ | :-------------------------------------------------------------------------------- |
| `factory` | address | The contract address of the Pegasys V3 factory                                    |
| `tokenA`  | address | The contract address of either token0 or token1                                   |
| `tokenB`  | address | The contract address of the other token                                           |
| `fee`     | uint24  | The fee collected upon every swap in the pool, denominated in hundredths of a bip |

#### Return Values:

| Name   | Type           | Description                  |
| :----- | :------------- | :--------------------------- |
| `pool` | IPegasysV3Pool | The V3 pool contract address |

### verifyCallback

```solidity
  function verifyCallback(
    address factory,
    struct PoolAddress.PoolKey poolKey
  ) internal returns (contract IPegasysV3Pool pool)
```

Returns the address of a valid Pegasys V3 Pool

#### Parameters:

| Name      | Type                       | Description                                    |
| :-------- | :------------------------- | :--------------------------------------------- |
| `factory` | address                    | The contract address of the Pegasys V3 factory |
| `poolKey` | struct PoolAddress.PoolKey | The identifying key of the V3 pool             |

#### Return Values:

| Name   | Type           | Description                  |
| :----- | :------------- | :--------------------------- |
| `pool` | IPegasysV3Pool | The V3 pool contract address |
