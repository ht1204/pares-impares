const express = require("express");
const app = express();

const PORT = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const num = "Soy ";
  res.render("index", { num });
});

app.listen(PORT, () => {
  console.log("Server started on port 3000");
});

