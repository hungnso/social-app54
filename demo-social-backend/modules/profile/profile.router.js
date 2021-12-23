const router = require("express").Router();

const profileController = require("./profile.controller");

router.post("/", profileController.createProfile);

module.exports = router;
