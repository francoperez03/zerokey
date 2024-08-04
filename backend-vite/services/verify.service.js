async function handleVerify({proof}) {
  try {
    const bankKey = "4"
    console.log({bankKey})
    const backend = new BarretenbergBackend(circuit);

    console.log('Verifying proof... ⌛');
    const isValid = await backend.verifyProof(proof);

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