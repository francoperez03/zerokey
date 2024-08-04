const { handleVerify, handleSave } = require('../services/proof.services');

async function routes(fastify, options) {
  fastify.post('/verify', async (request, reply) => {
    const { proof } = request.body;
    try {
      const proofResult = await handleVerify({ proof });
      const result = await handleSave({ proof: proofResult });
      reply.send(result);
    } catch (error) {
      reply.status(500).send({ success: false, message: 'Error verifying proof' });
    }
  });
}

module.exports = routes;
