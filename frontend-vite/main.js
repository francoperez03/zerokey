import circuit from '../hello_world/target/hello_world.json';
import { BarretenbergBackend, BarretenbergVerifier as Verifier } from '@noir-lang/backend_barretenberg';
import { Noir } from '@noir-lang/noir_js';

function display(container, msg) {
  const c = document.getElementById(container);
  const p = document.createElement('p');
  p.textContent = msg;
  c.appendChild(p);
}



document.getElementById('submitGuess').addEventListener('click', async () => {
  try {
    const x = parseInt(document.getElementById('guessInput').value);
    const input = { x, y: 2 };
    const backend = new BarretenbergBackend(circuit);
    const noir = new Noir(circuit);
    

    display('logs', 'Generating proof... ⌛');
    const { witness } = await noir.execute(input);
    let {publicInputs, proof} = await backend.generateProof(witness);
    publicInputs = {...publicInputs, bankKey:123}
    console.log({publicInputs})
    display('logs', 'Generating proof... ✅');
    display('results', proof.proof);
    
    display('logs', 'Verifying proof... ⌛');
    const isValid = await backend.verifyProof({publicInputs, proof});
    
    if (isValid) display('logs', 'Verifying proof... ✅');
  } catch (err) {
    console.log(err);
    display('logs', 'Oh 💔 Wrong guess');
  }
});