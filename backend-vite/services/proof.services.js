const { Noir } = require('@noir-lang/noir_js');
const { BarretenbergBackend, BarretenbergVerifier: Verifier } = require('@noir-lang/backend_barretenberg');
const circuit = require('../../circuit/target/circuit.json');
const { ethers } = require("ethers");

const { contract, wallet } = require('../providers/ethers.providers')
let proofs = {};

// function uint8ArrayToBase64(uint8Array) {
//   const buffer = Buffer.from(uint8Array);
//   return buffer.toString('base64');
// }

// function toBase64(obj) {
//   const jsonString = JSON.stringify(obj);
//   const buffer = Buffer.from(jsonString, 'utf-8');
//   return buffer.toString('base64');
// }

function base64ToUint8Array(base64) {
  const binaryString = Buffer.from(base64, 'base64').toString('binary');
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}


async function generateProof({ pan, expiryDate, cvv, ttl}) {
  try {
    const bankKey = '4'
    const backend = new BarretenbergBackend(circuit);
    const noir = new Noir(circuit);
    console.log({ pan, expiryDate, cvv, bankKey, ttl})
    console.log('Generating proof... ⌛');
    const { witness } = await noir.execute({ pan, expiryDate, cvv, bankKey, ttl});
    const proof = await backend.generateProof(witness);

    console.log('Generating proof... ✅');
    console.log('Proof:', proof);
    return proof;
  } catch (err) {
    console.error(err);
    return 'An error occurred while processing the proof.';
  }
}


async function handleSave({ email, proof, name }) {
  try {
    const previous_proofs = proofs[email];
    proofs[email] = {...previous_proofs, [name]: proof};
    return { success: true, message: 'Proof saved successfully.' };
  } catch (err) {
    console.error(err);
    return { success: false, message: 'An error occurred while saving the proof.' };
  }
}

async function handleVerify({ proof }) {
  const proofArray = base64ToUint8Array(proof.proof);
  try {
    const proofRestored = {
      proof: proofArray,
      publicInputs: proof.publicInputs
    }
    const backend = new BarretenbergBackend(circuit);

    console.log('Verifying proof locally... ⌛');

    const isValid = await backend.verifyProof(proofRestored);

    if (isValid) {
      console.log('Local verification succeed ✅');

      console.log('Verifying proof using smart contract... ⌛');
      console.log(proof.proof.toString('base64'))
      console.log( '????:', proof.publicInputs)
      const tx = await contract.sendProof(proofArray, proof.publicInputs);

      console.log('Contract verified!:', receipt);
      const receipt = await tx.wait();
      return { success: true, proof: proof.proof };
    } else {
      return { success: false, message: 'Proof verification failed locally.' };
    }
  } catch (err) {
    console.error(err);
    return { success: false, message: 'An error occurred while processing the proof.' };
  }
}

async function getProof({ email, name }) {
  const mid = proofs[email];
  const proof = mid[name];
  return proof
}

async function listProofs({ email, name }) {
  const proofs = proofs[email];
  return proofs
}

module.exports = {
  generateProof,
  handleSave,
  getProof,
  listProofs,
  handleVerify
};