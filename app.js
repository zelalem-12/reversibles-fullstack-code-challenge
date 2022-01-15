const express = require("express");
const app = express();

// Allowing CORS policy

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

/**
 * Mounting globbal middleware to process every request.
 */
app.use(express.json());
/**
 * Bootstraping API routes
 */
require("./routes")(app);

module.exports = app;
