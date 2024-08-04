const { ethers } = require("ethers");

require('dotenv').config();


const privateKey = process.env.VITE_PRIVATE_KEY;
const contractAddress = process.env.VITE_CONTRACT_ADDRESS;
const provider = new ethers.JsonRpcProvider(`https://sepolia-rpc.scroll.io`);

const wallet = new ethers.Wallet(privateKey, provider);

const contractAbi = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "noirVeriferAddress",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [],
    "name": "publicInput",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes",
        "name": "_proof",
        "type": "bytes"
      },
      {
        "internalType": "bytes32[]",
        "name": "_publicInputs",
        "type": "bytes32[]"
      }
    ],
    "name": "sendProof",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

const contract = new ethers.Contract(contractAddress, contractAbi, wallet);

module.exports = { contract, wallet };
