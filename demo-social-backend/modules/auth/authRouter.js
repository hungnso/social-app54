const router = require("express").Router();
const authCtrl = require("./authCtrl");
const validateInput = require('../../middleware/validateInput')
const validation = require('./auth.validation');
const getUser = require("../../middleware/getUser");

router.post("/register", validateInput(validation.registerSchema, 'body'), authCtrl.register);
router.post("/login", validateInput(validation.loginSchema, 'body'), authCtrl.login);
router.get("/user", getUser, authCtrl.getUser);

module.exports = router;
