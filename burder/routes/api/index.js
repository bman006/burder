const router = require("express").Router();
const storyRoutes = require("./story");
const userRoutes = require("./user");

// Routes
router.use("/story", storyRoutes);
router.use("/user", userRoutes);

module.exports = router;
