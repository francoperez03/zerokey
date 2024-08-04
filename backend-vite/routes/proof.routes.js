
const { generateProof, handleSave, listProofs } = require('../services/proof.services');

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
    const { email } = request.query;
    try {
      const proofs = await listProofs({ email });
      reply.send(proofs);
    } catch (error) {
      reply.status(404).send({ success: false, message: 'Proof not found' });
    }
  });
}

module.exports = routes;
