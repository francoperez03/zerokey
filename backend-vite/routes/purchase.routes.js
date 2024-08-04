const { handlePurchase } = require('../services/purchase.services');

async function routes(fastify, options) {
  fastify.post('/purchase', async (request, reply) => {
    const { proof } = request.body;
    try {
      const result = await handlePurchase({ proof });
      reply.send(result);
    } catch (error) {
      reply.status(500).send({ success: false, message: 'Error processing purchase' });
    }
  });
}

module.exports = routes;
