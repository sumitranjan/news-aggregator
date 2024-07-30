const express = require("express");
const { validateUser } = require("../middlewares/validateUser.middleware");
const { getNews } = require("../controllers/news.controller");
const router = express.Router();

router.get("/news", validateUser, getNews);

module.exports = router;
