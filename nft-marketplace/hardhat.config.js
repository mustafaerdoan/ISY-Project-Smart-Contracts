require("@nomiclabs/hardhat-waffle");

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
//  unused configuration commented out for now
mumbai: {
    url: "https://rpc-mumbai.maticvigil.com",
    accounts: process.env.689af8efa8c651a91ad287602527f3af2fe9f6501a7ac4b061667b5a93e037fd

  }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}