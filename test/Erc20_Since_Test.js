/*
 * @@Description: TODO
 * @@Author: tx
 * @@Date: Do not edit
 */

const {ethers} = require("hardhat");
const {expect} = require("chai");


describe("Erc20 Since Contract", function(){
     it("aaa", async function(){
          const [owner] = await ethers.getSigners();
          const hardhatToken = await ethers.deployContract("Token");
          await hardhatToken.waitForDeployment();
          console.log("token addr :", hardhatToken.getAddress());
          const ownerBalance = await hardhatToken.balanceOf(owner.address);
          expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
     })
});