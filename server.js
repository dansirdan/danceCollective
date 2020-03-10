const express = require("express");
const session = require("express-session");
const passport = require("./config/passport");
const routes = require("./routes");
require("dotenv").config();

// Are these needed?
// const path = require("path");
// const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  session({ secret: "keyboard cat", resave: false, saveUninitialized: false })
);
app.use(passport.initialize());
app.use(passport.session());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

// define Sequelize Sync Options
const syncOptions = {
  force: true
};

// Start the API server
db.sequelize.sync(syncOptions).then(function () {
  app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
});