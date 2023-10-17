//SPDX-License-Identifier:MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Erc20GN is ERC20{

     constructor() ERC20("GEENO","GN") {
          _mint(msg.sender, 10 * (10 ** 9) * (10 ** decimals()));
     }

     function mint(address _to, uint _amount) public  {
          _mint(_to, _amount);
     }
}