Enables migration of liqudity from Uniswap v1-compatible pairs into Uniswap v2 pools

## Functions

### migrate

```solidity
  function migrate(
    struct IV2Migrator.MigrateParams params
  ) external
```

Migrates liquidity to v2 by burning v1 liquidity and minting a new position for v2

Slippage protection is enforced via `amount{0,1}Min`, which should be a discount of the expected values of
the maximum amount of v2 liquidity that the v1 liquidity can get. For the special case of migrating to an
out-of-range position, `amount{0,1}Min` may be set to 0, enforcing that the position remains out of range

#### Parameters:

| Name     | Type                             | Description                                                                          |
| :------- | :------------------------------- | :----------------------------------------------------------------------------------- |
| `params` | struct IV2Migrator.MigrateParams | The params necessary to migrate v1 liquidity, encoded as `MigrateParams` in calldata |
