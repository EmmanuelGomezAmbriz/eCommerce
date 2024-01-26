require("dotenv").config();
// server.js
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const server = express();

// custom server middleware
server.use(cors(), morgan("dev"), express.json());

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT || 5001}`);
});

module.exports = server;
