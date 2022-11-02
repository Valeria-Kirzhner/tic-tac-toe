const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const io = require("socket.io");
const PORT = 8000;
server.listen(PORT, () => console.log(`server running on port ${PORT}`));
