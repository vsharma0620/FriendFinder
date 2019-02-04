var express = require("express");

var app = express();

var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTER Files
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Listener that starts server

app.listen(PORT, function() {
console.log("Running app locally on port" + PORT);
});
