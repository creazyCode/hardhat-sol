/*
 * @@Description: TODO
 * @@Author: tx
 * @@Date: Do not edit
 */
const {ethers} = require("hardhat");

async function main(){
     //这里getSigners返回的是数组，需要[] 否则deployer.address显示 undefined
     const [deployer] = await ethers.getSigners();
     console.log("deployer : ", deployer.address)

     //合约名称不能带下划线否则会找不到
     const factory = await ethers.getContractFactory("Token");
     const tokenContract = await factory.deploy();
     await tokenContract.waitForDeployment();
     console.log("contract addr : ", tokenContract.getAddress())
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });