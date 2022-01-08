const router = require("express").Router();
const auth = require('../../middleware/auth')

const profileController = require("./profile.controller");

router.post("/", profileController.createProfile);
router.get("/:userId", auth, profileController.getProfileByUserId);
router.put("/", auth, profileController.updateProfile);

module.exports = router;
