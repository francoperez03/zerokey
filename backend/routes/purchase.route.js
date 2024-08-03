async function routes(server) {
  server.get('/purchase', {
      handler: async (request, reply) => {
          const { proof } = request.query;
          console.log({ proof });
          // const bestQuote = await quoteService.getBestQuote(amount, fromChainInt, toChainInt, tokenCode)
          reply.send({proof});
      }
  });
}

module.exports = routes;
