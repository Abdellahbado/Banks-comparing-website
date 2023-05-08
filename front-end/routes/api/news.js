const express = require("../../../back-end/node_modules/express");
const router = express.Router();
const newsController = require("../../controller/newsController");

router.route("/")
        .get(newsController.getNews);
router.route("/:id")
        .get(newsController.getNewsById);

module.exports = router;
