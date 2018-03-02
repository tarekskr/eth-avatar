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
      from: "0x40f09c2272e7e1928874f0463bedcecde8bc0cb2",
      gas: 4612388 // Gas limit used for deploys
    }
  }
};
