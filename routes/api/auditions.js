const router = require("express").Router();
const auditionCTRL = require("../../controllers/auditionCTRL");

// PATH: /api/auditions /...
router.route("/")
  .get(auditionCTRL.findAll)
  .post(auditionCTRL.updateOrCreate)

router.route("/:id")
  .get(auditionCTRL.findOne)
  .put(auditionCTRL.update)
  .delete(auditionCTRL.delete)

router.route("/filter/")
  .post(auditionCTRL.findAllWhere)

module.exports = router;