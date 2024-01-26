// app.js
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.use(morgan("short"));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
