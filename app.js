const express = require("express");
const app = express();

/**
 * Mounting globbal middleware to process every request.
 */
app.use(express.json());
/**
 * Bootstraping API routes
 */
require("./routes")(app);

module.exports = app;