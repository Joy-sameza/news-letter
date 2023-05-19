const port = parseInt(process.env.PORT) || 3000;
const { join } = require("path");
const express = require("express"),
  app = express();

//Middlewares
app.use(express.static(join(__dirname, "client")));
app.use(express.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    res.end("static/index.html");
});

app.listen(port, () => console.log("Listening on port " + port));
