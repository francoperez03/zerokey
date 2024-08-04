const { ethers } = require("ethers");

require('dotenv').config();


const privateKey = process.env.VITE_PRIVATE_KEY;
const contractAddress = process.env.VITE_CONTRACT_ADDRESS;
console.log({privateKey})
const provider = new ethers.JsonRpcProvider(`https://sepolia-rpc.scroll.io`);

const wallet = new ethers.Wallet(privateKey, provider);

const contractAbi = [
  "function verifyProof(bytes memory proof, bytes memory publicInputs) public returns (bool)"
];

const contract = new ethers.Contract(contractAddress, contractAbi, wallet);

module.exports = { contract, wallet };
