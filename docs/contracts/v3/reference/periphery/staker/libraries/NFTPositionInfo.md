Encapsulates the logic for getting info about a NFT token ID

## Functions

### getPositionInfo

```solidity
  function getPositionInfo(
    contract IPegasysV3Factory factory,
    contract INonfungiblePositionManager nonfungiblePositionManager,
    uint256 tokenId
  ) internal view returns (contract IPegasysV3Pool pool, int24 tickLower, int24 tickUpper, uint128 liquidity)
```

#### Parameters:

| Name                         | Type                                 | Description                                                              |
| :--------------------------- | :----------------------------------- | :----------------------------------------------------------------------- |
| `factory`                    | contract IPegasysV3Factory           | The address of the Pegasys V3 Factory used in computing the pool address |
| `nonfungiblePositionManager` | contract INonfungiblePositionManager | The address of the nonfungible position manager to query                 |
| `tokenId`                    | uint256                              | The unique identifier of an Pegasys V3 LP token                          |

#### Return Values:

| Name        | Type           | Description                               |
| :---------- | :------------- | :---------------------------------------- |
| `pool`      | IPegasysV3Pool | The address of the Pegasys V3 pool        |
| `tickLower` | int24          | The lower tick of the Pegasys V3 position |
| `tickUpper` | int24          | The upper tick of the Pegasys V3 position |
| `liquidity` | uint128        | The amount of liquidity staked            |
