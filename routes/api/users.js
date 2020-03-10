const router = require("express").Router();
const userCTRL = require("../../controllers/userCTRL");

// PATH: /api/users /...
router.route("/")
  .get(userCTRL.findAll)
  .post(userCTRL.updateOrCreate)

router.route("/:id")
  .get(userCTRL.findOne)
  .put(userCTRL.update)
  .delete(userCTRL.delete)

router.route("/filter/")
  .post(userCTRL.findAllWhere)

module.exports = router;