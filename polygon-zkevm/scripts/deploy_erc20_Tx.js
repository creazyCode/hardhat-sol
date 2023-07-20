const hre = require("hardhat");

async function main() {
  const ERC20 = await hre.ethers.getContractFactory("Erc20TX");
  const ERC20_TX = await ERC20.deploy();
  const mintToken = await ERC20_TX.mint("0xbfC99F161B83f591a14E1fc13D12d7c086542774", 1000000000);
  
  const ContractAddress = await ERC20_TX.getAddress();

  console.log(
    `Counter contract deployed to https://explorer.public.zkevm-test.net/address/${ContractAddress}`
  );

  //mint token : 合约里在创建合约时已经初始化mint到deployer地址里了
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

