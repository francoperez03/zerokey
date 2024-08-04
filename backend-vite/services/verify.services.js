const circuit = require('../circuit/target/circuit.json');
const { BarretenbergBackend, BarretenbergVerifier: Verifier } = require('@noir-lang/backend_barretenberg');


function base64ToUint8Array(base64String) {
  const buffer = Buffer.from(base64String, 'base64');
  return new Uint8Array(buffer);
}


function base64ToObject(base64String) {
  const buffer = Buffer.from(base64String, 'base64');
  const jsonString = buffer.toString('utf-8');
  return JSON.parse(jsonString);
}

async function handleVerify({proof}) {
  try {

    const decodedProof = base64ToUint8Array(proof.proof);
    const decodedPublicInputs = base64ToObject(proof.publicInputs);

    const backend = new BarretenbergBackend(circuit);

    console.log('Verifying proof... ⌛');
    const isValid = await backend.verifyProof({proof: decodedProof, publicInputs: decodedPublicInputs});

    if (isValid) {
      console.log('Verifying proof... ✅');
      return { success: true, proof: proof.proof };
    } else {
      return { success: false, message: 'Proof verification failed.' };
    }
  } catch (err) {
    console.error(err);
    return { success: false, message: 'An error occurred while processing the purchase.' };
  }
}

module.exports = {
  handleVerify,
};