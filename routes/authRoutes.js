const express = require("express");
const userLogin = require("../controllers/userControllers/userLogin");
const userRegister = require("../controllers/userControllers/userRegister");
const adminLogin = require("../controllers/adminControllers/adminLogin");
const adminRegister = require("../controllers/adminControllers/adminRegister");
const router = express.Router();

router.route("/user/login").post(userLogin);
router.route("/user/register").post(userRegister);
router.route("/admin/login").post(adminLogin);
router.route("/admin/register").post(adminRegister);

module.exports = router;
