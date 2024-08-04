const circuit = require('../circuit/target/circuit.json');
const { BarretenbergBackend, BarretenbergVerifier: Verifier } = require('@noir-lang/backend_barretenberg');
const { contract, wallet } = require('../providers/ethers.providers')

function base64ToUint8Array(base64String) {
  const buffer = Buffer.from(base64String, 'base64');
  return new Uint8Array(buffer);
}


function base64ToObject(base64String) {
  const buffer = Buffer.from(base64String, 'base64');
  const jsonString = buffer.toString('utf-8');
  return JSON.parse(jsonString);
}
async function handleVerify({ proof, publicInputs }) {
  try {

    const backend = new BarretenbergBackend(circuit);

    console.log('Verifying proof locally... ⌛');
    const isValid = await backend.verifyProof(proof);

    if (isValid) {
      console.log('Local verification succeed ✅');

      const proofBytes = ethers.utils.arrayify(proof);
      const publicInputsBytes = ethers.utils.arrayify(publicInputs);
      console.log('Verifying proof using smart contract... ⌛');

      const tx = await contract.verifyProof(proofBytes, publicInputsBytes);

      const receipt = await tx.wait();
      console.log('Contract verified!:', receipt);
      return { success: true, proof: proof.proof };
    } else {
      return { success: false, message: 'Proof verification failed locally.' };
    }
  } catch (err) {
    console.error(err);
    return { success: false, message: 'An error occurred while processing the proof.' };
  }
}


module.exports = {
  handleVerify,
};