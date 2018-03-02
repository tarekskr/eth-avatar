module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/");
      },
      network_id: '4',
      from: "0x627306090abab3a6e1400e9345bc60c78a8bef57",
      gas: 4612388 // Gas limit used for deploys
    }
  }
};
