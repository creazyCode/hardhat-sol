/*
 * @@Description: TODO
 * @@Author: tx
 * @@Date: Do not edit
 */
/** @type import('hardhat/config').HardhatUserConfig */

//这里需要引入hardhat-toolbox包，否则会识别不了ethers这个关键字
require("@nomicfoundation/hardhat-toolbox");
module.exports = {
  solidity: "0.8.9",
};
