const hre = require("hardhat");

async function main() {
const provider = new hre.ethers.getDefaultProvider('http://10.24.16.168:10001');

const ACLInterface = ["function setAdmin(address)","function setEnabled(address)"]; 

const contractDeployerAlowListAddress = '0x0454B08980d36511C47d463b3Aad0E9da1672A66';
const contractDeployerAllowList = new hre.ethers.Contract(contractDeployerAlowListAddress, ACLInterface, provider);


// Transactions Allow List
const transactionsAllowListAddress = '0x0454B08980d36511C47d463b3Aad0E9da1672A66';
const transactionsAllowList = new hre.ethers.Contract(transactionsAllowListAddress, ACLInterface, provider);

const addrAlice = '0x454b08980d36511c47d463b3aad0e9da1672a665';
const allowlistContractDeployerTx1 = await contractDeployerAllowList.setAdmin(addrAlice);
await allowlistContractDeployerTx1.wait();

  console.log(
    `Counter contract deployed to https://mumbai.polygonscan.com/address/${ContractAddress}`
  );

  //mint token : 合约里在创建合约时已经初始化mint到deployer地址里了
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

