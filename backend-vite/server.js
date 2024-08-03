const fastify = require('fastify')({ logger: true });
const fastifyCors = require('@fastify/cors');
const circuit = require('../hello_world/target/hello_world.json');
const { BarretenbergBackend, BarretenbergVerifier: Verifier } = require('@noir-lang/backend_barretenberg');
const { Noir } = require('@noir-lang/noir_js');

fastify.register(fastifyCors, { 
  origin: (origin, cb) => {
    const hostname = new URL(origin).hostname
    if(hostname === "localhost"){
      //  Request from localhost will pass
      cb(null, true)
      return
    }
    // Generate an error on other origins, disabling access
    cb(new Error("Not allowed"), false)
  }
})

// Función para manejar la generación y verificación de pruebas
async function handlePurchase(proof) {
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

function base64ToUint8Array(base64String) {
  const buffer = Buffer.from(base64String, 'base64');
  return new Uint8Array(buffer);
}

function base64ToObject(base64String) {
  const jsonString = Buffer.from(base64String, 'base64').toString('utf-8');
  return JSON.parse(jsonString);
}


// Definir endpoint /purchase
fastify.post('/purchase', async (request, reply) => {
  const { proof, publicInputs } = request.body;

  const decodedProof = base64ToUint8Array(proof);
  const decodedPublicInputs = base64ToObject(publicInputs);
  console.log(decodedProof);
  const result = await handlePurchase({proof: decodedProof, publicInputs: decodedPublicInputs});
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