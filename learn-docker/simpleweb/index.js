const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("How are you? Hacker");
});

app.listen(8080, () => {
  console.log("Listen on 8080");
});
