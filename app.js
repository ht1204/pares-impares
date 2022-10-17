const express = require("express");
const { htmlGenerator } = require("./utils");
const app = express();

const PORT = 3000;


app.get("/", (req, res) => {
    const index = htmlGenerator();
    res.status(202).send(index);
});

app.listen(PORT, () => {
  console.log("Server started on port 3000");
});

