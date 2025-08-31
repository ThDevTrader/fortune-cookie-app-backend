const {
  generateLuckyNumbers,
  getFortune,
} = require("../services/fortuneCookieService");

const getLuckyNumbers = (_req, res, _next) => {
  try {
    const numbers = generateLuckyNumbers();
    res.json({ numbers });
  } catch (error) {
    res.status(500).json({ error: "Error generating lucky numbers" });
  }
};

const getRandomFortune = (_req, res, _next) => {
  try {
    const fortune = getFortune();
    res.json({ fortune });
  } catch (error) {
    res.status(500).json({ error: "Error searching for fortune phrase" });
  }
};

module.exports = {
  getLuckyNumbers,
  getRandomFortune,
};
