const { ethers } = require("ethers");

if (typeof import.meta === 'undefined' || !import.meta.env) {
  require('dotenv').config();
}

const privateKey = typeof import.meta !== 'undefined' && import.meta.env ? import.meta.env.VITE_PRIVATE_KEY : process.env.VITE_PRIVATE_KEY;
const contractAddress = typeof import.meta !== 'undefined' && import.meta.env ? import.meta.env.VITE_CONTRACT_ADDRESS : process.env.VITE_CONTRACT_ADDRESS;

const provider = new ethers.JsonRpcProvider(`https://sepolia-rpc.scroll.io`);

const wallet = new ethers.Wallet(privateKey, provider);

const contractAbi = [
  "function verifyProof(bytes memory proof, bytes memory publicInputs) public returns (bool)"
];

const contract = new ethers.Contract(contractAddress, contractAbi, wallet);

module.exports = { contract, wallet };
