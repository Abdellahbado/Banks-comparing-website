const express = require("../../../back-end/node_modules/express");
const router = express.Router();
const aceuilController = require("../../controller/aceuilController");

// GET ROUTER FOR GIVINNG THE BANKS DATA TO HOME PAGE
router.route("/")
        .get(aceuilController.getBanques);
        
router.route("/banque/:id")
        .get(aceuilController.getBnquesByID);
router.route("/filtrer/:presId/:min/:max")
        .get(aceuilController.filtrerById);
router.route("/tri/:id")
        .get(aceuilController.triByPres);
router.route("/pres")
        .get(aceuilController.getPresNom);

                    
module.exports = router;