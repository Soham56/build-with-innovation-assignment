const express = require("express");
const deleteUsers = require("../controllers/adminControllers/deleteUsers");
const updateUsers = require("../controllers/adminControllers/updateUsers");
const router = express.Router();

router.route("/:id").delete(deleteUsers).patch(updateUsers);

module.exports = router;
