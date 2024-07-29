const express = require("express");
const dotenv = require("dotenv");
const app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dotenv.config();

const usersRoute = require("./src/routes/users.routes");

app.use("/users", usersRoute);

app.listen(port, (err) => {
  if (err) {
    return console.log("Something bad happened", err);
  }
  console.log(`Server is listening on ${port}`);
});

module.exports = app;
