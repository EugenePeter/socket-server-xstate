const express = require("express");
const http = require("http");
const cors = require('cors');
require('dotenv').config()

const app = express()
const server = http.createServer(app)
app.use(cors())

const io = require('socket.io')(server)
require("./sockets")(io)

server.listen(process.env.PORT || 3030, () => console.log(`Server started at port: ${process.env.PORT}`))