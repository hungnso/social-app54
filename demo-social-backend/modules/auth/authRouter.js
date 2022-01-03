const router = require("express").Router();
const authCtrl = require("./authCtrl");
const validateInput = require('../../middleware/validateInput')
const validation = require('./auth.validation');
const getUser = require("../../middleware/getUser");
const auth = require('../../middleware/auth');

router.post("/register", validateInput(validation.registerSchema, 'body'), authCtrl.register);
router.post("/login", validateInput(validation.loginSchema, 'body'), authCtrl.login);
router.get("/user", getUser, authCtrl.getUser);
router.put("/update",auth, authCtrl.updateUser);
router.get("/",auth, authCtrl.getMe);
router.put("/update/password",auth, authCtrl.updatePassword);


module.exports = router;
