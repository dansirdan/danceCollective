const router = require("express").Router();
const performanceCTRL = require("../../controllers/performanceCTRL");

// PATH: /api/performances /...
router.route("/")
  .get(performanceCTRL.findAll)
  .post(performanceCTRL.updateOrCreate)

router.route("/:id")
  .get(performanceCTRL.findOne)
  .put(performanceCTRL.update)
  .delete(performanceCTRL.delete)

router.route("/filter/")
  .post(performanceCTRL.findAllWhere)

module.exports = router;