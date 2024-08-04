const { Noir } = require('@noir-lang/noir_js');
const { BarretenbergBackend, BarretenbergVerifier: Verifier } = require('@noir-lang/backend_barretenberg');
const circuit = require('../../circuit/target/circuit.json');

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
  try {

    const backend = new BarretenbergBackend(circuit);

    console.log('Verifying proof locally... ⌛');
    console.log('------')
    const proofArray = base64ToUint8Array(proof.proof);
    const isValid = await backend.verifyProof({proof: proofArray, publicInputs: proof.publicInputs});

    if (isValid) {
      console.log('Local verification succeed ✅');

      console.log('Verifying proof using smart contract... ⌛');
      // const proofBytes = ethers.utils.arrayify(proof);
      // const publicInputsBytes = ethers.utils.arrayify(publicInputs);

      // const tx = await contract.verifyProof(proofBytes, publicInputsBytes);

      // console.log('Contract verified!:', receipt);
      // const receipt = await tx.wait();
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