var EthAvatar = artifacts.require("./EthAvatar.sol");

module.exports = function(deployer) {
  deployer.deploy(EthAvatar);
};
