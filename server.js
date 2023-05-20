const { join } = require("path");
const express = require("express"),
  app = express();

// Database connection
require("./config/connectDatabse")("mongodb://127.0.0.1:27017/NewLetter");

//Middlewares
app.use(express.static(join(__dirname, "client")));
app.use(express.urlencoded({ extended: false }));

// view engine setup
app.set("views", join(__dirname, "views"));
app.set("view engine", "ejs");

//Route middlewares
app.get("/", (_req, res) => res.render("index"));