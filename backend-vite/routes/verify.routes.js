const { handleVerify } = require('../services/proof.services');

async function routes(fastify, options) {
  fastify.post('/verify', async (request, reply) => {
    const {proof} = request.body;
    try {
      console.log('----')
      console.log(proof)
      const result = await handleVerify({ proof });

      reply.send(result);
    } catch (error) {
      reply.status(500).send({ success: false, message: 'Error verifying proof' });
    }
  });
}

module.exports = routes;
