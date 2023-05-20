require("dotenv").config({ path: "./config/config.env" });
const port = parseInt(process.env.PORT) || 3000;
const mongoose = require("mongoose");
const { listen } = require("express")();

module.exports = function (uri) {
  mongoose
    .connect(uri)
    .then(() => {
      console.log("\nConnected to database", uri);
      listen(port, () =>
        console.log(
          "Listening on port " + port + "\nOpen app at http://localhost:" + port
        )
      );
    })
    .catch((err) => console.error("Error connecting to database", err));
};
