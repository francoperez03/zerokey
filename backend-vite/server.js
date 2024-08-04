const fastify = require('fastify')({ logger: true });
const fastifyCors = require('@fastify/cors');
const circuit = require('../circuit/target/circuit.json');
const { BarretenbergBackend, BarretenbergVerifier: Verifier } = require('@noir-lang/backend_barretenberg');
const { Noir } = require('@noir-lang/noir_js');
let proofs = {};

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
async function handleVerify({proof}) {
  try {

    const decodedProof = base64ToUint8Array(proof.proof);
    const decodedPublicInputs = base64ToObject(proof.publicInputs);

    const backend = new BarretenbergBackend(circuit);

    console.log('Verifying proof... ⌛');
    const isValid = await backend.verifyProof({proof: decodedProof, publicInputs: decodedPublicInputs});

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
  // Crear un Buffer a partir de la cadena base64
  const buffer = Buffer.from(base64String, 'base64');
  // Convertir el Buffer a Uint8Array
  return new Uint8Array(buffer);
}


function base64ToObject(base64String) {
  // Crear un Buffer a partir de la cadena base64
  const buffer = Buffer.from(base64String, 'base64');
  // Convertir el Buffer a una cadena JSON
  const jsonString = buffer.toString('utf-8');
  // Parsear la cadena JSON a un objeto JavaScript
  return JSON.parse(jsonString);
}


function uint8ArrayToBase64(uint8Array) {
  const buffer = Buffer.from(uint8Array);
  return buffer.toString('base64');
}

function toBase64(obj) {
  const jsonString = JSON.stringify(obj);
  const buffer = Buffer.from(jsonString, 'utf-8');
  return buffer.toString('base64');
}


async function generateProof({ pan, expiryDate, cvv, ttl}) {
  try {
    const backend = new BarretenbergBackend(circuit);
    const noir = new Noir(circuit);

    console.log('Generating proof... ⌛');
    const { witness } = await noir.execute({ pan, expiryDate, cvv, bankKey: "2", ttl});
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

async function handleSave({ email, proof, name }) {
  try {
    console.log('Proof:', proof);
    const previous_proofs = proofs[email];
    proofs[email] = {...previous_proofs, [name]: proof};
    return { success: true, message: 'Proof saved successfully.' };
  } catch (err) {
    console.error(err);
    return { success: false, message: 'An error occurred while saving the proof.' };
  }
}


fastify.post('/purchase', async (request, reply) => {
  const { proof } = request.body;
  const result = await handleVerify({proof});
  reply.send(result);
});

fastify.post('/proofs', async (request, reply) => {
  const { cvv, pan, expiryDate, email, name, ttl } = request.body;
  const proofResult = await generateProof({ cvv, pan, expiryDate, ttl })
  const result = await handleSave({email, proof: proofResult, name});
  reply.send(result);
});

fastify.get('/proofs', async (request, reply) => {
  const { email, name } = request.query;
  const mid = proofs[email];
  const proof = mid[name];
  reply.send(proof);
});

fastify.post('/verify', async (request, reply ) => {
  const { proof } = request.body;
  const proofResult = await handleVerify({ proof })
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
