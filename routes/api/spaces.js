const router = require("express").Router();
const spaceCTRL = require("../../controllers/spaceCTRL");

// PATH: /api/spaces /...
router.route("/")
  .get(spaceCTRL.findAll)
  .post(spaceCTRL.updateOrCreate)

router.route("/:id")
  .get(spaceCTRL.findOne)
  .put(spaceCTRL.update)
  .delete(spaceCTRL.delete)

router.route("/filter/")
  .post(spaceCTRL.findAllWhere)

module.exports = router;