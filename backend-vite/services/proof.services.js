const { Noir } = require('@noir-lang/noir_js');
const { BarretenbergBackend, BarretenbergVerifier: Verifier } = require('@noir-lang/backend_barretenberg');
const circuit = require('../../circuit/target/circuit.json');


let proofs = {};

function uint8ArrayToBase64(uint8Array) {
  const buffer = Buffer.from(uint8Array);
  return buffer.toString('base64');
}

function toBase64(obj) {
  const jsonString = JSON.stringify(obj);
  const buffer = Buffer.from(jsonString, 'utf-8');
  return buffer.toString('base64');
}


async function generateProof({ pan, expiryDate, cvv, ttl}) {
  try {
    const backend = new BarretenbergBackend(circuit);
    const noir = new Noir(circuit);

    console.log('Generating proof... ⌛');
    const { witness } = await noir.execute({ pan, expiryDate, cvv, bankKey: "2", ttl});
    const { publicInputs, proof } = await backend.generateProof(witness);

    console.log('Generating proof... ✅');
    console.log('Proof:', proof);

    const base64Proof = uint8ArrayToBase64(proof);
    const base64PublicInputs = toBase64(publicInputs);

    return { success: true, proof: base64Proof, publicInputs: base64PublicInputs };
  } catch (err) {
    console.error(err);
    return { success: false, message: 'An error occurred while processing the proof.' };
  }
}


async function handleSave({ email, proof, name }) {
  try {
    console.log('Proof:', proof);
    const previous_proofs = proofs[email];
    proofs[email] = {...previous_proofs, [name]: proof};
    return { success: true, message: 'Proof saved successfully.' };
  } catch (err) {
    console.error(err);
    return { success: false, message: 'An error occurred while saving the proof.' };
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
  listProofs
};