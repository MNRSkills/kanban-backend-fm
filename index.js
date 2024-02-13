const express = require("express");

const app = express();

const PORT = 8080;

app.get("/", (req, res) => {
  res.send("TESTING THIS SERVER");
});

app.listen(PORT, () => {
  console.log("THIS IS MY SERVER WORKING", `http://localhost:${PORT}`);
});
