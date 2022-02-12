const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.sendFile("/users/pedro/programing/xss/files/index.html", (err) => {
    console.log("error for send file", err);
  });
});

app.get("/response", (req, res) => {
  res.send(req.query.search);
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`sever init in ${process.env.PORT || PORT} port`);
});
