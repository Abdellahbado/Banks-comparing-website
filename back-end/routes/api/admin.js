

const express = require("express");
const router = express.Router();
const adminController = require("../../controller/adminController");

router.route("/")
            .get(adminController.getBanques)
            .post(adminController.ajouterBanque)
            .put(adminController.modifierBanque)
            .delete(adminController.supprimerBanque);
router.route("/prestation")
            .post(adminController.ajouterPrestation)
            .put(adminController.ModifierPrestations)
            .delete(adminController.supprimerPrestation);    
router.route("/prestation/:id_pres/:id_bank")
             .get(adminController.getPrestation) ;

module.exports = router;