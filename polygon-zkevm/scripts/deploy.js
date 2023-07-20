const hre = require("hardhat");

async function main() {
  const CounterContractFactory = await hre.ethers.getContractFactory("OpenZeppeLinErc20");
  const counterContract = await CounterContractFactory.deploy("DisVeck","DV");

  // await counterContract.deployed();
   // 获取合约地址
   const ContractAddress = await counterContract.getAddress();

  console.log(
    `Counter contract deployed to https://explorer.public.zkevm-test.net/address/${ContractAddress}`
  );

  //mint token : 合约里在创建合约时已经初始化mint到deployer地址里了
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

