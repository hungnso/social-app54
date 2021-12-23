const router = require("express").Router();
const auth = require("../../middleware/auth");
const followCtrl = require("./followCtrl");


router.post("/create", followCtrl.createNewFollowUser);
router.get("/:userId", auth, followCtrl.getFollowId);
router.put("/following", auth, followCtrl.follow);
router.put("/unfollow", auth, followCtrl.unfollow);
// router.patch("/user/:id/unfollow", auth, followCtrl.unfollow);
// router.get("/suggestionsUser", auth, followCtrl.suggestionUser);

module.exports = router;
