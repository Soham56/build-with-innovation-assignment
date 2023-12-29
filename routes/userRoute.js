const express = require("express");
const router = express.Router();

const userUpdate = require("../controllers/userControllers/userUpdate");
const userDelete = require("../controllers/userControllers/userDelete");

router.route("/:id").patch(userUpdate).delete(userDelete);

module.exports = router;
