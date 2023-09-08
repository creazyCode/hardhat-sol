//SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;



contract MintContract{

     constructor(address _erc721, address owner, uint256 _mintNum){
          IERC721(_erc721).mint(_mintNum);
     }
}