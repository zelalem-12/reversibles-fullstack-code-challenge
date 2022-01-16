const { reversibleNumbers } = require("../utils");

const getReversibleNumbers = (req, res) => {
  const number = parseInt(req.query.number);
  if (!number) {
    return res.status(400).send({ message: "Ivalid integer number" });
  }
  const result = reversibleNumbers(number);
  res.status(200).send(result);
};

module.exports = {
  getReversibleNumbers,
};
