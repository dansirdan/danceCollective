const router = require("express").Router();
const classCTRL = require("../../controllers/classCTRL");

// PATH: /api/classes /...
router.route("/")
  .get(classCTRL.findAll)
  .post(classCTRL.updateOrCreate)

router.route("/:id")
  .get(classCTRL.findOne)
  .put(classCTRL.update)
  .delete(classCTRL.delete)

router.route("/filter/")
  .post(classCTRL.findAllWhere)

module.exports = router;