import { ethers } from "hardhat";

async function main() {
  const ERC20 = await ethers.getContractFactory("PHToken");
  const ERC20_TX = await ERC20.deploy();
  const mintToken = await ERC20_TX.mint("0xDF010C965A70b76E5a57CB2E3A786831174c99c3", 1000000000);
  
  const ContractAddress = await ERC20_TX.getAddress();

  console.log(
    `Counter contract deployed to https://explorer.public.zkevm-test.net/address/${ContractAddress}`
  );

  //mint token : 合约里在创建合约时已经初始化mint到deployer地址里了
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
