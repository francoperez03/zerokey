async function handlePurchase({ email, proof }) {
  try {

    return { success: true, message: 'Proof saved successfully.' };
  } catch (err) {
    console.error(err);
    return { success: false, message: 'An error occurred while saving the proof.' };
  }
}

module.exports = {
  handlePurchase
};