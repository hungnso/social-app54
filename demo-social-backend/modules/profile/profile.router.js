const router = require("express").Router();

const profileController = require("./profile.controller");

router.post("/", profileController.createProfile);
router.get("/:userId", profileController.getProfileByUserId);

module.exports = router;
