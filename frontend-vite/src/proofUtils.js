import circuit from '../../hello_world/target/hello_world.json';
import { BarretenbergBackend} from '@noir-lang/backend_barretenberg';
import { Noir } from '@noir-lang/noir_js';

export async function generateAndVerifyProof({ pan, expiryDate, cvv}) {
  try {
    const backend = new BarretenbergBackend(circuit);
    const noir = new Noir(circuit);

    console.log('Generating proof... ⌛');
    const { witness } = await noir.execute({ pan, expiryDate, cvv, bankKey:"4"});
    const proofWithPublicInputs = await backend.generateProof(witness);

    console.log('Generating proof... ✅');
    console.log('Proof:', proofWithPublicInputs.proof);
    return proofWithPublicInputs
  } catch (err) {
    console.error(err);
    return { success: false, message: 'An error occurred while processing the proof.' };
  }
}
