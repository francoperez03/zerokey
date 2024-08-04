
const axios = require('axios');

function uint8ArrayToBase64(uint8Array) {
  const buffer = Buffer.from(uint8Array);
  return buffer.toString('base64');
}

async function handlePurchase({ email, proof }) {
  try {
    const base64Proof = uint8ArrayToBase64(proof.proof);
    const response = await axios.post('http://localhost:3000/verify', { proof: { proof: base64Proof, publicInputs: proof.publicInputs}});

    if (response.data.success) {
      return { success: true, message: 'Proof verified and purchase processed successfully.' };
    } else {
      return { success: false, message: 'Proof verification failed.' };
    }
  } catch (err) {
    return { success: false, message: 'An error occurred while processing the purchase.' };
  }
}

module.exports = {
  handlePurchase
};
