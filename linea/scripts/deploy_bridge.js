/*
 * @@Description: TODO
 * @@Author: tx
 * @@Date: Do not edit
 */
const hre = require("hardhat");

const { PRIVATE_KEY } = process.env;

async function main() {

  // 你的合约地址和ABI
  const contractAddress = "0x70BaD09280FD342D02fe64119779BC1f0791BAC2";
  const contractAbi = ["function sendMessage(address, uint256, bytes) public"];

  // 连接到以太坊并创建一个新的签名者
  const provider = hre.ethers.getDefaultProvider("https://rpc.ankr.com/eth_goerli"); // 这里为本地节点，如果是主网或测试网，替换成相应的RPC URL
  const wallet = new hre.ethers.Wallet(PRIVATE_KEY, provider);

  // 创建一个新的合约实例
  const contract = new hre.ethers.Contract(contractAddress, contractAbi, wallet);

   // 设置转账数量，这里以0.01个ETH为例
   const amount = hre.ethers.parseEther('0.01');

   // 准备需要传递的参数，这里你需要替换为你的实际参数
   const address = "0xfd16B08Fd907BA8E1aC9A63FEbA02e9A8e9F1b27";
   const uint256Value = 1000000000000000;
   const bytesValue = "0x";

  // sendMessage
  const tx = await contract.sendMessage(address, uint256Value, bytesValue, {value : amount});
  await tx.wait();
  console.log("Number set successful.");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });