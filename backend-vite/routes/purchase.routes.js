const { handlePurchase } = require('../services/purchase.services');
const { getProof } = require('../services/proof.services');

async function routes(fastify, options) {
  fastify.post('/purchase', async (request, reply) => {
    const { email, name } = request.body;
    try {
      const proof = await getProof({ email, name });
      const result = await handlePurchase({ proof });
      reply.send(result);
    } catch (error) {
      reply.status(500).send({ success: false, message: 'Error processing purchase' });
    }
  });
}

module.exports = routes;
