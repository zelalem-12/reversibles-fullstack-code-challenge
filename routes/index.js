const { getReversibleNumbers } = require('../controllers')

module.exports = function (app) {
  app.get("/", getReversibleNumbers);

  app.use(function (req, res) {
    res.status(404).send("Resource not found!");
  });
};