const express = require("express");
const path = require("path");
const bodyparser = require("body-parser");
const db = require("./config/db");
const cors = require("cors");
const Router = require("./router/router");

const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(express.json());
app.use(cors());
db;
app.use("/api", Router);
app.listen(process.env.PORT, () => {
  console.log(`http://expensetracker:5000`);
});
