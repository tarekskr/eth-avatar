# Eth Avatar - Gravatar for Ethereum addresses

***Eth Avatar*** associates an avatar of your choice with an Ethereum address that you own. The avatar image is stored on [IPFS](https://ipfs.io) and is bound to your address via an Ethereum [smart contract](https://etherscan.io/address/0x5d5194e9aa451d36ec4faa62609d18e1ed6765a4#code).

## Possible Use Cases
* **Visual Verification:** When sending ether to an exchange for instance, instead of being paranoid if you've pasted the correct address, wallets that support Eth Avatar will be able to fetch the exchange logo as a forms of visual verification. The same also works the other way around when transferring from the exchange to your own wallet.
* **Token Branding:** Tokens and contracts will be able to associate branding artwork to their addresses, allowing it to be possibly visible on EtherScan and exchanges once they support Eth Avatar.
* **Personal Use** It's fun to associate avatars with your personal addresses and be able to visually differentiate between them in your wallets.

## Current Deployments
* Dapp: https://ethavatar.com (make sure you visit using an Ethereum browser)
* Smart Contract: https://etherscan.io/address/0x5d5194e9aa451d36ec4faa62609d18e1ed6765a4#code

## Deploying the smart contract and web dapp locally

**Before you start, make sure you have both [npm](https://www.npmjs.com/) & [Node.js](https://nodejs.org) installed**

1. Install Truffle.

    `$ npm install -g truffle`

2. Download and launch [Ganache](http://truffleframework.com/ganache/). Make sure Ganache is running on port `7545`.

3. Clone the repository to a folder of your choice.

    `$ git clone https://github.com/gitcoinco/ethavatar.git`

4. Fetch all required packages.

    ```
    $ cd ethavatar
    $ npm install
    ```

5. Deploy the smart contract to Ganache.

    `$ truffle migrate`

6. Launch the Dapp

    `$ npm run start`
