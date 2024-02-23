import "@nomicfoundation/hardhat-toolbox";

require("dotenv").config({path: ".env"});

const MUMBAI_RPC_URL = process.env.MUMBAI_RPC_URL;
const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL;
const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY_1;

module.exports = {
    solidity: "0.8.24",
    networks: {
        mumbai: {
            url: MUMBAI_RPC_URL,
            accounts: [PRIVATE_KEY]
        },
        sepolia: {
            url: SEPOLIA_RPC_URL,
            accounts: [PRIVATE_KEY]
        },
        goerli: {
            url: GOERLI_RPC_URL,
            accounts: [PRIVATE_KEY]
        },
    },
    etherscan: {
        apiKey: ETHERSCAN_API_KEY,
    },
    sourcify: {
        enabled: true,
    },
}
