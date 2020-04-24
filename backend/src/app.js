const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

const server = require('http').createServer(app);
const io = require('socket.io')(server);

module.exports = [ server, io ];