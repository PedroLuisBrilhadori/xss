const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

console.log();

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/files/index.html`, (err) => {
    console.log("error for send file", err);
  });
});

app.get("/response", (req, res) => {
  res.send("response: " + req.query.search);
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`sever init in ${process.env.PORT || PORT} port`);
});
