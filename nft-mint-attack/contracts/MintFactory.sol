//SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract TestNFT is ERC721{

     uint256 public limitCount;

     uint256 public perMintPrice;

     address public owner;

     uint256 public totalSupply;

     mapping(address => uint256) mintNums;

     modifier onlyOwner(){
          require(msg.sender == owner, "operation forbiden, not owner");
          _;
     }

     constructor(string memory _name, string memory _symbol) ERC721(_name, _symbol){
          
     }

     function setLimitCount(uint256 _count) public onlyOwner {
          limitCount = _count;
     }

     function setPerMintPrice(uint256 _price) public onlyOwner {
          perMintPrice = _price;
     }
     
     function mint(uint256 mintCount) public payable{
          uint256 mintNum = mintNums[msg.sender] + mintCount;
          require(mintNum <= limitCount, "exceed max mint number");
          uint256 needAmount = mintCount * perMintPrice;
          require(msg.value >= needAmount, "balance not enough");
          // uint256 startTokenId = totalSupply + 1;
          uint256 tokenId = totalSupply;
          for(uint256 i = 0; i < mintCount; i++){
               tokenId = i+1;
               _safeMint(msg.sender, tokenId);
          }
          totalSupply = tokenId;
          mintNums[msg.sender] = mintNum;
     }
}