'use strict';

const express = require('express')();
const http = require('http').Server(express);
const io = require('socket.io')(http);
const config = require('./config');
const chatHandler = require('./chat/handler')();

start();

function start() {
  chatHandler.init(io, express);
  http.listen(process.env.PORT || config.port, '0.0.0.0', function() {
    console.log('listening on', process.env.PORT || config.port);
  });
}
