const crypto = require("crypto");

const generateLuckyNumbers = () => {
  const luckyNumbers = [];

  for (let count = 0; count < 6; count++) {
    const newNumber = crypto.randomInt(1, 61); // 1 to 60

    if (!luckyNumbers.includes(newNumber)) {
      luckyNumbers.push(newNumber);
    } else {
      count--;
    }
  }

  return luckyNumbers.sort((a, b) => a - b);
};

module.exports = { generateLuckyNumbers };
