const { sumERC4626VaultsExport } = require('../helper/erc4626');
const sdk = require('@defillama/sdk');

const config = {
  ethereum: {
    lvTokens: {
      totalAssets: [
        "0x07ed467acD4ffd13023046968b0859781cb90D9B", // 9Summits Flagship ETH
        "0x03D1eC0D01b659b89a87eAbb56e4AF5Cb6e14BFc", // 9Summits Flagship USDC
        "0xB09F761Cb13baCa8eC087Ac476647361b6314F98", // 9Summits & Tulipa Capital cbBTC 
      ],
    },
  },
};



const totalAssetsVaults = config.ethereum.lvTokens.totalAssets;

const tvl = sdk.util.sumChainTvls([
  sumERC4626VaultsExport({
    vaults: totalAssetsVaults,
    tokenAbi: 'asset',
    balanceAbi: 'totalAssets',
  }),
]);
module.exports['ethereum'] = { tvl };
