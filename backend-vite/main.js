const fastify = require('fastify')({ logger: true });
const circuit = require('../hello_world/target/hello_world.json');
const { BarretenbergBackend, BarretenbergVerifier: Verifier } = require('@noir-lang/backend_barretenberg');
const { Noir } = require('@noir-lang/noir_js');

// Función para manejar la generación y verificación de pruebas
async function handlePurchase(x) {
  try {
    const input = { x, y: 2 };
    const backend = new BarretenbergBackend(circuit);
    const noir = new Noir(circuit);

    // Generar prueba
    console.log('Generating proof... ⌛');
    const { witness } = await noir.execute(input);
    const proof = await backend.generateProof(witness);
    console.log('Generating proof... ✅');
    console.log('Proof:', proof.proof);

    // Verificar prueba
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

// Definir endpoint /purchase
fastify.post('/purchase', async (request, reply) => {
  const { x } = request.body;
  if (typeof x !== 'number') {
    return reply.status(400).send({ success: false, message: 'Invalid input. Please provide a number.' });
  }

  const result = await handlePurchase(x);
  reply.send(result);
});

// Iniciar servidor
const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
    console.log('Server is running on http://localhost:3000');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
