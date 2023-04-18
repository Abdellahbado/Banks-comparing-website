const express = require("express");
const router = express.Router();
const aceuilController = require("../../controller/aceuilController");

// GET ROUTER FOR GIVINNG THE BANKS DATA TO HOME PAGE
router.route("/")
        .get(aceuilController.getBanques);
        
router.route("/:id")
        .get(aceuilController.getBnquesByID);
router.route("/filtrer")
        .get(aceuilController.filtrerById);
router.route("/tri/:id")
        .get(aceuilController.triByPres);
                    
module.exports = router;