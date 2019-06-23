const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello world juan");
});

app.get("/api/courses/", (req, res) => {
  res.send([1, 2, 3]);
});

//port
port = process.env.PORT || 3000;
app.listen(port, () => console.log("listening to port ${port} juan"));
