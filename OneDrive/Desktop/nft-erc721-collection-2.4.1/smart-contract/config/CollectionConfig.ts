import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'Cpsc329Nft',
  tokenName: '329 Posters',
  tokenSymbol: 'CPT',
  hiddenMetadataUri: 'ipfs://__CID__/hidden.json',
  maxSupply: 20,
  whitelistSale: {
    price: 0.02,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.02,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.02,
    maxMintAmountPerTx: 5,
  },
  contractAddress: "0x25C84b8b0e35CCc9fc62A59fB19687E73bB530C3",
  marketplaceIdentifier: '329-posters',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
