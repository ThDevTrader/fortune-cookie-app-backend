const express = require("express");
const { getLuckyNumbers } = require("../controllers/fortuneCookieController");

const router = express.Router();

router.get("/lucky-numbers", getLuckyNumbers);

module.exports = router;
