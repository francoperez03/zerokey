// server/app.js

const fastify = require('fastify')({ logger: true });
const fastifyCors = require('@fastify/cors');
const proofsRoutes = require('./routes/proof.routes');
const verifyRoutes = require('./routes/verify.routes');
const purchaseRoutes = require('./routes/purchase.routes');

// Register CORS middleware
fastify.register(fastifyCors, { 
  origin: (origin, cb) => {
    const hostname = new URL(origin).hostname;
    if (hostname === "localhost") {
      cb(null, true);
      return;
    }
    cb(new Error("Not allowed"), false);
  }
});

// Register routes
fastify.register(proofsRoutes);
fastify.register(verifyRoutes);
fastify.register(purchaseRoutes);

// Start the server
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
