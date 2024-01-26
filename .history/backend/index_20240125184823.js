require("dotenv").config();
// server.js
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const server = express();

// custom server middleware
server.use(cors(), morgan("dev"), express.json());

server.get("/", (req, res) => {
  res.send("Hello, Express!");
});

const port = process.env.PORT || 5001;

server.listen(port, () => {
  console.log(`
  =*=*=* SERVER LIVE ON $PORT : ${port} *=*=*=`);
});

module.exports = server;
