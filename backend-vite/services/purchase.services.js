
const axios = require('axios');


async function handlePurchase({ email, proof }) {
  try {
    const payload = {
      proof: proof,
      email: email,
    };

    const response = await axios.post('http://localhost:3000/verify', payload);

    if (response.data.success) {
      return { success: true, message: 'Proof verified and purchase processed successfully.' };
    } else {
      return { success: false, message: 'Proof verification failed.' };
    }
  } catch (err) {
    console.error('Error during purchase process:', err);
    return { success: false, message: 'An error occurred while processing the purchase.' };
  }
}

module.exports = {
  handlePurchase
};
