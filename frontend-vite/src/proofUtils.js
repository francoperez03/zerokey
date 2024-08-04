import circuit from '../../hello_world/target/circuit.json';
import { BarretenbergBackend} from '@noir-lang/backend_barretenberg';
import { Noir } from '@noir-lang/noir_js';


function uint8ArrayToBase64(uint8Array) {
  let binaryString = '';
  for (let i = 0; i < uint8Array.length; i++) {
    binaryString += String.fromCharCode(uint8Array[i]);
  }
  return window.btoa(binaryString);
}

function toBase64(obj) {
  const jsonString = JSON.stringify(obj);
  return window.btoa(unescape(encodeURIComponent(jsonString)));
}



export async function generateProof({ pan, expiryDate, cvv}) {
  try {
    const backend = new BarretenbergBackend(circuit);
    const noir = new Noir(circuit);

    console.log('Generating proof... ⌛');
    const { witness } = await noir.execute({ pan, expiryDate, cvv, bankKey: "4"});
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
