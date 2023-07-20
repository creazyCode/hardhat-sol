//SPDX-License-Identifier:MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Erc20TX is ERC20{

     constructor() ERC20("TiXi","TX") {
          _mint(msg.sender, 10 * (10 ** decimals()));
     }

     function mint(address _to, uint _amount) public  {
          _mint(_to, _amount);
     }
}