const { generateLuckyNumbers } = require("../services/fortuneCookieService");

const getLuckyNumbers = (_req, res, _next) => {
  try {
    const luckyNumbers = generateLuckyNumbers();
    res.json({ luckyNumbers });
  } catch (error) {
    res.status(500).json({ error: "Error generating lucky numbers" });
  }
};

module.exports = { getLuckyNumbers };
