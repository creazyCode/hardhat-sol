
import * as ethers from "ethers";
import { Provider, Wallet, utils } from "zksync-web3";
import type { PriorityOpResponse } from "zksync-web3/build/src/types";

import dotenv from "dotenv";
dotenv.config();

// HTTPS RPC endpoint
const L1_RPC_ENDPOINT = "https://eth-goerli.api.onfinality.io/public";

const L2_RPC_ENDPOINT = "https://testnet.era.zksync.dev";

// Amount in ETH
const AMOUNT = "0.01";

const WALLET_PRIV_KEY = process.env.WALLET_PRIV_KEY || "";

const to = "0xfd16B08Fd907BA8E1aC9A63FEbA02e9A8e9F1b27";

async function main() {
  
  const L1Provider = new ethers.providers.JsonRpcProvider(L1_RPC_ENDPOINT);

  const L2Provider = new Provider(L2_RPC_ENDPOINT);

  const wallet = new Wallet(
    WALLET_PRIV_KEY,
    L2Provider,
    L1Provider
  );

  // await checkBalance(wallet.address, results.amount, L1Provider);
  
  const depositHandle: PriorityOpResponse = await wallet.deposit({
    to: to,
    token: utils.ETH_ADDRESS,
    amount: ethers.utils.parseEther(AMOUNT),
  });

  console.log(
    `Hash : ${depositHandle.hash}`
  );
  await depositHandle.wait();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
