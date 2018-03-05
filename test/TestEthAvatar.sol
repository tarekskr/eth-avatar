pragma solidity ^0.4.19;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/EthAvatar.sol";

contract TestEthAvatar {

  // Not doing hash storage tests here since our hash is a 'string' and Solidity doesn't currently support passing strings between contracts. Identical tests have been implemented in ethavtar.js instead.

}
