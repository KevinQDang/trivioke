/* eslint-disable linebreak-style */
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const session = require('express-session');
const socket = require('socket.io');
const video = require('../videos.js').data;
const db = require('../db/mysql.js');
const util = require('./helpers.js');

const saltRounds = 10;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../dist')));
app.use(express.static(path.join(__dirname, '../images')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: 'supersecret',
  resave: false,
  saveUninitialized: true,
}));

app.get('/songs', (req, res) => {
  res.send(video);
});

// app.post('/songs', (req, res) => {
//   util.getSongs(req, res);
//   res.sendStatus(200);
// });

app.post('/signup', (req, res) => {
  util.createUser(req, res, saltRounds);
});

app.get('/login', (req, res) => {
  util.checkPassword(req, res);
});

const port = 8080;

const server = app.listen(process.env.PORT || port, () => {
  console.log(`listening on port ${process.env.PORT || port}`);
});

const io = socket(server);
// has rooms property

io.on('connection', (socket) => {
  // condition for which user is emitting data
  socket.name = 'connie';
  console.log(socket.id, socket.name);
});
