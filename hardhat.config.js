/*
 09:06:35 --- 09:10:51 --> Intaracting with contract in hardhat & custom hardhat tasks
require("@nomiclabs/hardhat-waffle")
require("./tasks/block-number")
require("@nomiclabs/hardhat-etherscan")
require("dotenv").config()

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more
/**
 * @type import('hardhat/config').HardhatUserConfig
 */

// const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL
// const PRIVATE_KEY = process.env.PRIVATE_KEY
// const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY 

// module.exports = {
//   defaultNetwork: "hardhat",
//   networks: {
//     hardhat: {},
//     sepolia: {
//       url: SEPOLIA_RPC_URL,
//       accounts: [PRIVATE_KEY],
//       chainId: 11155111,
//     },
//   },
//   solidity: "0.8.8",
//   etherscan: {
//     apiKey: ETHERSCAN_API_KEY,
//   },
// }

// */


/*
// 09:18:12 --> Hardhat Localhost Node

require("@nomiclabs/hardhat-waffle")
require("./tasks/block-number")
require("@nomiclabs/hardhat-etherscan")
require("dotenv").config()

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more
/**
 * @type import('hardhat/config').HardhatUserConfig
 */

// const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL
// const PRIVATE_KEY = process.env.PRIVATE_KEY
// const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY 

// module.exports = {
//   defaultNetwork: "hardhat",
//   networks: {
//     hardhat: {},
//     sepolia: {
//       url: SEPOLIA_RPC_URL,
//       accounts: [PRIVATE_KEY],
//       chainId: 11155111,
//     },
//     localhost: {
//       url: "http://0.0.0.0:8545/",
//       chainId: 31337
//     }
//   },
//   solidity: "0.8.8",
//   etherscan: {
//     apiKey: ETHERSCAN_API_KEY,
//   },
// }

// */


/*
//   09:38:11 --> Hardhat Gas Reporter

require("@nomiclabs/hardhat-waffle")
require("./tasks/block-number")
require("@nomiclabs/hardhat-etherscan")
require("dotenv").config()
require("hardhat-gas-reporter")

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more
/**
 * @type import('hardhat/config').HardhatUserConfig
 */

// const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL || ""
// const PRIVATE_KEY = process.env.PRIVATE_KEY || ""
// const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || ""
// const COINMARKET_API_KEY = process.env.COINMARKET_API_KEY || ""

// module.exports = {
//   defaultNetwork: "hardhat",
//   networks: {
//     hardhat: {},
//     sepolia: {
//       url: SEPOLIA_RPC_URL,
//       accounts: [PRIVATE_KEY],
//       chainId: 11155111,
//     },
//     localhost: {
//       url: "http://0.0.0.0:8545/",
//       chainId: 31337
//     }
//   },
//   solidity: "0.8.8",
//   etherscan: {
//     apiKey: ETHERSCAN_API_KEY,
//   },
//   gasReporter: {
//     enabled: false, // we can turn it to false when we dont want to work with the gas report
//     outputFile: "gas-report.txt", // We added another features to output the report to a file called gas-report.txt
//     noColors: true,
//     currency: "USD",
//     coinmarketcap: COINMARKET_API_KEY
//   }
// }

// */


//   09:44:40 --> Solidity Coverage

require("@nomiclabs/hardhat-waffle")
require("./tasks/block-number")
require("@nomiclabs/hardhat-etherscan")
require("dotenv").config()
require("hardhat-gas-reporter")
require("solidity-coverage")

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more
/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL || ""
const PRIVATE_KEY = process.env.PRIVATE_KEY || ""
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || ""
const COINMARKET_API_KEY = process.env.COINMARKET_API_KEY || ""

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {},
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 11155111,
    },
    localhost: {
      url: "http://0.0.0.0:8545/",
      chainId: 31337
    }
  },
  solidity: "0.8.8",
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  gasReporter: {
    enabled: false, 
    outputFile: "gas-report.txt", 
    noColors: true,
    currency: "USD",
    coinmarketcap: COINMARKET_API_KEY
  }
}