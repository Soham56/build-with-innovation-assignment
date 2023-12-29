const express = require("express");
const deleteUsers = require("../controllers/adminControllers/deleteUsers");
const updateUsers = require("../controllers/adminControllers/updateUsers");
const getAllUsers = require("../controllers/adminControllers/getAllUser");

const router = express.Router();

router.route("/updateUsers").patch(updateUsers);
router.route("/deleteUsers").delete(deleteUsers);
router.route("/getAllUsers").get(getAllUsers);

module.exports = router;
