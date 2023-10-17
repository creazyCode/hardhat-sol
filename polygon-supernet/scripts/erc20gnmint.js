/*
 * @@Description: TODO
 * @@Author: tx
 * @@Date: Do not edit
 */
const hre = require("hardhat");

async function main() {
  // 你的合约地址和ABI
  console.log("11111.");
  const contractAddress = "0xC13ef131CA2d16d86fF3Ce1eb300DAc0f31fd375";
  const CounterContractFactory = await hre.ethers.getContractFactory("Erc20GN");
  // 创建一个新的合约实例
  const contract = CounterContractFactory.attach(contractAddress);

  const addr = "0xf0f63Bf5D51fbbD067CA2595EaC9e61333b153FB";
  const mintAmount = hre.ethers.parseEther('333');
  console.log("2222.");
  const tx = await contract.mint(addr, mintAmount);
  console.log("3333.");
  await tx.wait();
  const hash = tx.hash;
  console.log("4444.");
  console.log("successful. tx hash : ", hash);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
