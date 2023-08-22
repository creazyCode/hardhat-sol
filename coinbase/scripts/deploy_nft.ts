import { ethers } from "hardhat";

async function main() {
  const nft = await ethers.deployContract('NFT'); //这里的NFT是代码里类的名称，而不是文件名
  await nft.waitForDeployment();
  console.log('NFT deployed at : ' + nft.target);
  await nft.mint("0xbfC99F161B83f591a14E1fc13D12d7c086542774");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
