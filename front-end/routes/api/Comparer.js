const express = require("../../../back-end/node_modules/express");
const router = express.Router();
const comparerController = require("../../controller/comparerController");


router.route("/:id1/:id2")
        .get(comparerController.getComparerPres);


module.exports = router;