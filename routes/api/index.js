const router = require("express").Router();

const artistRoutes = require("./artists");
const auditionRoutes = require("./auditions");
const classRoutes = require("./classes");
const collectiveRoutes = require("./collectives");
const performanceRoutes = require("./performances");
const spaceRoutes = require("./spaces");
const userRoutes = require("./users");

// PATH: /api /...
router.use("/artists", artistRoutes);
router.use("/auditions", auditionRoutes);
router.use("/classes", classRoutes);
router.use("/collectives", collectiveRoutes);
router.use("/performances", performanceRoutes);
router.use("/spaces", spaceRoutes);
router.use("/users", userRoutes);

module.exports = router;
