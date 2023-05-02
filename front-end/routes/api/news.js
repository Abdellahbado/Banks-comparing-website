const express = require("../../../back-end/node_modules/express");
const router = express.Route();
const newsController = require("../../controller/newsController");

router.Route("/")
        .get(newsController.getNews);
