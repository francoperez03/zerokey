
async function generateProof({ pan, expiryDate, cvv}) {
  try {
    const backend = new BarretenbergBackend(circuit);
    const noir = new Noir(circuit);

    console.log('Generating proof... ⌛');
    const { witness } = await noir.execute({ pan, expiryDate, cvv, bankKey:"4"});
    const proof = await backend.generateProof(witness);

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

async function handleSave({ email, proof }) {
  try {
    console.log('Proof:', proof);
    if (!proofs[email]) {
      proofs[email] = [];
    }
    proofs[email].push(proof);

    return { success: true, message: 'Proof saved successfully.' };
  } catch (err) {
    console.error(err);
    return { success: false, message: 'An error occurred while saving the proof.' };
  }
}

module.exports = {
  generateProof,
  handleSave
};