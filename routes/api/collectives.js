const router = require("express").Router();
const collectiveCTRL = require("../../controllers/collectiveCTRL");

// PATH: /api/collectives /...
router.route("/")
  .get(collectiveCTRL.findAll)
  .post(collectiveCTRL.updateOrCreate)

router.route("/:id")
  .get(collectiveCTRL.findOne)
  .put(collectiveCTRL.update)
  .delete(collectiveCTRL.delete)

router.route("/filter/")
  .post(collectiveCTRL.findAllWhere)

module.exports = router;