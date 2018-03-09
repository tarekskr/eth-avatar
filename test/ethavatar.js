var EthAvatar = artifacts.require("./EthAvatar.sol");

contract('EthAvatar', function(accounts) {

  var hash = "QmYA2fn8cMbVWo4v95RwcwJVyQsNtnEwHerfWR8UNtEwoE";
  it("...should store the hash: " + hash, function() {
    return EthAvatar.deployed().then(function(instance) {
      ethAvatarInstance = instance;

      return ethAvatarInstance.setIPFSHash(hash, {from: accounts[0]});
    }).then(function() {
      return ethAvatarInstance.getIPFSHash.call(accounts[0]);
    }).then(function(storedHash) {
      assert.equal(storedHash, hash, "Stored hash does not equal: " + hash);
    });
  });

});
