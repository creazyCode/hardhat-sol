/*
 * @@Description: TODO
 * @@Author: tx
 * @@Date: Do not edit
 */
/** @type import('hardhat/config').HardhatUserConfig */

//这里需要引入hardhat-toolbox包，否则会识别不了ethers这个关键字
require("@nomicfoundation/hardhat-toolbox");
module.exports = {
  defaultNetwork: "goerli",
  networks: {
    hardhat: {
    },
    goerli: {
      url: "https://rpc.ankr.com/eth_goerli",
      accounts: ["d19b310f285a525362552e15aea8d01ad78646ee05b7f92bb90dd77c9138b49a", "d19b310f285a525362552e15aea8d01ad78646ee05b7f92bb90dd77c9138b49a"]
    }
  },
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
};
