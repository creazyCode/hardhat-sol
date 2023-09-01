/*
 * @@Description: TODO
 * @@Author: tx
 * @@Date: Do not edit
 */
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
const { PRIVATE_KEY } = process.env;

module.exports = {
  solidity: {
    version: '0.8.17',
    version: '0.8.18',
  },
  networks: {
    linea_testnet: {
      url: `https://rpc.goerli.linea.build/`,
      accounts: [PRIVATE_KEY],
    },
    linea_mainnet: {
      url: `https://rpc.linea.build/`,
      accounts: [PRIVATE_KEY],
    },
  },
};