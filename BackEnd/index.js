require("dotenv").config();
// server.js
const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const server = express();

// server routers
const authRouter = require("./routers/authRouter");

// custom server middleware
server.use(cors(), logger("combined"), express.json());

// server routers config
server.use("/api/auth", authRouter);

// server listening...
const port = process.env.PORT || 5001;

server.get('/', (req, res)=>{

  res.status(200).json({ message: req.headers["user-agent"]})
})

server.listen(port, () => {
  console.log(`
  =*=*=* SERVER LIVE ON $PORT : ${port} *=*=*=
  `);
});

module.exports = server;
