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
    await setup(); // let's squeeze our wasm inits here

    display('logs', 'Generating proof... ⌛');
    const { witness } = await noir.execute(input);
    const proof = await backend.generateProof(witness);
    display('logs', 'Generating proof... ✅');
    display('results', proof.proof);
  } catch (err) {
    display('logs', 'Oh 💔 Wrong guess');
  }
});