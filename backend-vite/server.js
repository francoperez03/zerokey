const fastify = require('fastify')({ logger: true });
const fastifyCors = require('@fastify/cors');
const circuit = require('../hello_world/target/hello_world.json');
const { BarretenbergBackend, BarretenbergVerifier: Verifier } = require('@noir-lang/backend_barretenberg');
const { Noir } = require('@noir-lang/noir_js');
const proofs = {}
fastify.register(fastifyCors, { 
  origin: (origin, cb) => {
    const hostname = new URL(origin).hostname
    if(hostname === "localhost"){
      cb(null, true)
      return
    }
    cb(new Error("Not allowed"), false)
  }
})

// Función para manejar la generación y verificación de pruebas
async function handlePurchase({proof}) {
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


export async function generateProof({ pan, expiryDate, cvv}) {
  try {
    const backend = new BarretenbergBackend(circuit);
    const noir = new Noir(circuit);

    console.log('Generating proof... ⌛');
    const { witness } = await noir.execute({ pan, expiryDate, cvv, bankKey:"4"});
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

export async function handleSave({ email, proof }) {
  try {
    console.log('Proof:', proof);
    if (!proofs[email]) {
      proofs[email] = [];
    }
    proofs[email].push(proof);

    return { success: true, message: 'Proof saved successfully.' };
  } catch (err) {
    console.error(err);
    return { success: false, message: 'An error occurred while saving the proof.' };
  }
}


fastify.post('/purchase', async (request, reply) => {
  const { proof } = request.body;
  const result = await handlePurchase({proof});
  reply.send(result);
});

fastify.post('/proofs', async (request, reply) => {
  const { cvv, pan, expirtyDate } = request.body;
  const proofResult = await generateProof({ cvv, pan, expirtyDate })
  const result = await handleSave({proof: proofResult});
  reply.send(result);
});

fastify.get('/proofs', async (request, reply) => {
  const { cvv, pan, expirtyDate } = request.body;
  const proofResult = await generateProof({ cvv, pan, expirtyDate })
  const result = await handleSave({proof: proofResult});
  reply.send(result);
});

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
