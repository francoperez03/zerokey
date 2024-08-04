
const { generateProof, handleSave, getProof } = require('../services/proof.services');

async function routes(fastify, options) {
  fastify.post('/proofs', async (request, reply) => {
    const { cvv, pan, expiryDate, email, name, ttl } = request.body;
    try {
      const proofResult = await generateProof({ cvv, pan, expiryDate, ttl });
      const result = await handleSave({ email, proof: proofResult, name });
      reply.send(result);
    } catch (error) {
      reply.status(500).send({ success: false, message: 'Error generating proof' });
    }
  });

  fastify.get('/proofs', async (request, reply) => {
    const { email, name } = request.query;
    try {

      const proof = await getProof({ email, name });
      console.log({proof})
      reply.send(proof);
    } catch (error) {
      reply.status(404).send({ success: false, message: 'Proof not found' });
    }
  });
}

module.exports = routes;
