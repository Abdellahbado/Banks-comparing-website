const express = require("express");
const router = express.Router();
const adminController = require("../../controller/adminController");

router.route("/").get(adminController.getBanques);
router
  .route("/prestations/:id")
  .get(adminController.getPrestations)
  .post(adminController.ajouterPrestation)
  .put(adminController.ModifierPrestations);
router
  .route("/prestation/:id1/:id2")
  .delete(adminController.supprimerPrestation);

router
  .route("/bank/:id")
  .post(adminController.ajouterBanque)
  .put(adminController.modifierBanque)
  .delete(adminController.supprimerBanque);

router.route("/news/titres").get(adminController.newsTitles);

router.route("/news/:id")
  .post(adminController.AjouterNews)
  .delete(adminController.supprimerNews);

module.exports = router;
