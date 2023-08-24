//SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";

contract PHToken is ERC20, ERC20Permit {
    constructor() ERC20("Sui Metaverse", "SM") ERC20Permit("SM") {
     _mint(msg.sender, 10 * (10 ** decimals()));
    }

    function mint(address _to, uint _amount) public  {
          _mint(_to, _amount);
     }
}