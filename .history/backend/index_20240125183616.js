// server.js
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const server = express();
const port = 3000;

server.use(cors(), morgan("dev"), express.json());

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = server;
