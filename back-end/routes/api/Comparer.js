const express = require("express");
const router = express.Router();
const comparerController = require("../../../front-end/controller/comparerController");


router.route("/:id")
    .get(comparerController.getBanque);


module.exports = router;