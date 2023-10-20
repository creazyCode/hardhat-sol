/*
 * @@Description: TODO
 * @@Author: tx
 * @@Date: Do not edit
 */
const hre = require("hardhat");

async function main() {
  // NFT
  // const CounterContractFactory = await hre.ethers.getContractFactory("MyNFT");
  // const counterContract = await CounterContractFactory.deploy();

  // // await counterContract.deployed();
  //  // 获取合约地址
  //  const ContractAddress = await counterContract.getAddress();

  // console.log(
  //   `Counter contract1 addr ${ContractAddress}`
  // );
  
  // balance
  // const toAddress = "0x454b08980d36511c47d463b3aad0e9da1672a665";
  // const nft = CounterContractFactory.attach(ContractAddress);
  // const balance = await nft.balanceOf(toAddress);
  // await balance.wait();
  // console.log(
  //   `addr balance ${balance}`
  // );

  // recevier1
  // const recevier1 = await hre.ethers.getContractFactory("Receiver1");
  
  // const recevier1Contract = await recevier1.deploy(ContractAddress);



  // 获取合约地址
  const recevier1 = await hre.ethers.getContractFactory("Receiver1");
  const ContractAddress2 = "0x2bbF6C77Bcc3d6Ea9F2Be9114d578715A18d9F00";
  // const recevierContract = await recevier1.attach(ContractAddress2);
  
  
  
  //set role
  // const contractAddress = "ContractAddress2";
  // const contractAbi = ["function sendMessage(address, uint256, bytes) public"];

  //mint
  const contractOnline = recevier1.attach(ContractAddress2);
  const aa = await contractOnline.Receive();
  
  await aa.wait();
  // const hash = tx.hash;
  // console.log("tx hash." + hash);

  //balance2
  const toAddress = "0x454b08980d36511c47d463b3aad0e9da1672a665";
  const nftContractAddr = "0xb97A3fc6b724B3316eDeE4eb48e74641a177DAa6";
  const CounterContractFactory = await hre.ethers.getContractFactory("MyNFT");
  const nftContract = CounterContractFactory.attach(nftContractAddr);

  const balance2 = await nftContract.balanceOf(toAddress);
  // 这里是调用合约查询，不需要await
  // await balance2.wait();
  console.log(
    `addr balance2 ${balance2}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

