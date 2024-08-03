const purchase = require("./purchase.route");

const router = Router();
router.use("/purchase", purchase);

module.exports = router;
