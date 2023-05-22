---
id: overview
sidebar_position: 1
title: Overview
---

# The Pegasys Subgraph

Pegasys uses multiple [subgraphs](https://thegraph.com/docs/about/introduction#what-the-graph-is) for indexing and organizing data from the Pegasys smart contracts.
These subgraphs are hosted on The Graph hosted service and can be used to query Pegasys data.

## Versions and Production Endpoints

Each version of Pegasys has its own dedicated subgraph, and governance contracts have a dedicated subgraph as well.

Each subgraph has a dedicated endpoint for querying data, as well as a page on [The Graph explorer](https://thegraph.com/explorer/) the exposes the schema and available fields to query.

##### V2

- Explorer Page: https://thegraph.com/explorer/subgraph/pegasys-fi/v2
- Graphql Endpoint: https://api.thegraph.com/subgraphs/name/pegasys-fi/v2
- Code: https://github.com/Pegasys-fi/v2-subgraph

##### Governance

- Explorer Page: https://thegraph.com/explorer/subgraph/ianlapham/governance-tracking
- Graphql Endpoint: https://api.thegraph.com/subgraphs/name/ianlapham/governance-tracking
- Code: https://github.com/ianlapham/uniswap-governance-subgraph

##### V1

- Explorer Page: https://thegraph.com/explorer/subgraph/ianlapham/uniswapv1
- Graphql Endpoint: https://api.thegraph.com/subgraphs/name/ianlapham/uniswapv1
- Code: https://github.com/Pegasys-fi/v1-subgraph
