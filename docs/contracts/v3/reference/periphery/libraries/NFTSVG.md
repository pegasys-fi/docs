A library that provides a function for generating an SVG associated with a Pegasys NFT

The main function in this library is `generateSVG`, which is used to generate an SVG image based on the parameters provided. It takes an `SVGParams` memory parameter which contains the `quoteToken`, `baseToken`, `quoteTokenSymbol`, `baseTokenSymbol`, `feeTier`, `tickLower`, `tickUpper`, `tickSpacing`, `overRange`, and `tokenId`.

It then calls the `generateSVGDefs`, `generateSVGBorderText`, `generateSVGCardMantle`, `generageSvgCurve`, `generateSVGPositionDataAndLocationCurve`, and `generateSVGRareSparkle` functions with the specific parameters for that token, and each in turn formats and returns a string. Those are used to put together the SVG.


## Functions

### generateSVG

```solidity
  function generateSVG(
  ) internal returns (string svg)
```
### getCurve

```solidity
  function getCurve(
  ) internal returns (string curve)
```

### generateSVGCurveCircle

```solidity
  function generateSVGCurveCircle(
  ) internal returns (string svg)
```

### rangeLocation

```solidity
  function rangeLocation(
  ) internal returns (string, string)
```

### isRare

```solidity
  function isRare(
  ) internal returns (bool)
```
The rarity is determined by the most significant bit in the `tokenId`. Tokens with a larger `tokenId` have a lower threshold to be considered rare, because the divisor of `type(uint256).max` is larger, making the result of the division smaller. 
