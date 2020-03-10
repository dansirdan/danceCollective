const router = require("express").Router();
const artistCTRL = require("../../controllers/artistCTRL");

// PATH: /api/artists /...
router.route("/")
  .get(artistCTRL.findAll)
  .post(artistCTRL.updateOrCreate)

router.route("/:id")
  .get(artistCTRL.findOne)
  .put(artistCTRL.update)
  .delete(artistCTRL.delete)

router.route("/filter/")
  .post(artistCTRL.findAllWhere)

module.exports = router;