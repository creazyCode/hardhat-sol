/*
 * @@Description: TODO
 * @@Author: tx
 * @@Date: Do not edit
 */
// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

// import "./mynft.sol";
// import "./mynft_no_ownable.sol";
import "./MyNFT.sol";

/**
 * THIS IS AN EXAMPLE CONTRACT THAT USES HARDCODED VALUES FOR CLARITY.
 * THIS IS AN EXAMPLE CONTRACT THAT USES UN-AUDITED CODE.
 * DO NOT USE THIS CODE IN PRODUCTION.
 */

/// @title - A simple contract for receiving string data across chains.
contract Receiver1  {
    MyNFT nft;

    constructor(address nftAddr)  {
        nft = MyNFT(nftAddr);
    }

    /// handle a received message
    // function Receive(uint256 id)   public {
    function Receive()   public {
          //  nft.safeMint();
        // bytes memory functionCall = abi.encodeWithSignature("safeMint(address,uint256)", msg.sender,id);
         bytes memory functionCall = abi.encodeWithSignature("safeMint(address)", msg.sender);
        (bool success, ) = address(nft).call(functionCall);
        require(success);
    }


}