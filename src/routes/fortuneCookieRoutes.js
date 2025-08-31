const express = require("express");
const {
  getLuckyNumbers,
  getRandomFortune,
} = require("../controllers/fortuneCookieController");

const router = express.Router();

router.get("/lucky-numbers", getLuckyNumbers);
router.get("/fortune", getRandomFortune);

module.exports = router;
