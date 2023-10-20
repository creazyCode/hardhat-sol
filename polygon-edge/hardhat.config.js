/** @type import('hardhat/config').HardhatUserConfig */
require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks: {
    mubai: {
      url: `https://rpc-mumbai.maticvigil.com`,
      accounts: [process.env.ACCOUNT_PRIVATE_KEY],
    },
    supernet: {
      url: `http://10.24.16.168:10001/`,
      accounts: [process.env.ACCOUNT_PRIVATE_KEY],
    },
  },
};