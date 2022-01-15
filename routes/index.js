const { getReversibleNumbers } = require("../controllers");

module.exports = function (app) {
  app.get("/api", getReversibleNumbers);

  app.use(function (req, res) {
    res.status(404).send("Resource not found!");
  });
};
