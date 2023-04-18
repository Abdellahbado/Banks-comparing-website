const express = require("express");
const router = express.Router();
const comparerController = require("../../controller/comparerController");


router.route("/:id")
    .get(comparerController.getBanque);


module.exports = router;