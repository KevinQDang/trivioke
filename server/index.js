/* eslint-disable linebreak-style */
const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const session = require('express-session');
const http = require('http').Server(app);
const io = require('socket.io')(http);
const util = require('./helpers.js');
const video = require('../videos').data;


const saltRounds = 10;


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

// app.get('/songs', (req, res) => {
//   db.connection.query('select * from songs', (err, results) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.send(results);
//     }
//   });
// });

app.post('/songs', (req, res) => {
  util.getSongs(req, res);
  res.sendStatus(200);
});

app.post('/signup', (req, res) => {
  util.createUser(req, res, saltRounds);
});

app.get('/login', (req, res) => {
  util.checkPassword(req, res);
});

io.on('connection', (socket) => {
  console.log(socket.id, socket.name);
  socket.on('login', (user) => {
    console.log(user);
  });

  socket.on('room', (room) => {
    const clientsInRoom = io.nsps['/'].adapter.rooms[room];
    const numClients = clientsInRoom === undefined ? 0 : Object.keys(clientsInRoom.sockets).length;

    // max threey clients
    if (numClients > 3) {
      socket.emit('full', room);
    } else {
      socket.join(room);
      console.log('user joined', room);
      socket.id = socket.adapter.rooms[room].length;
      console.log('this socket is player', socket.id);
    }
  });
});

http.listen(8080, () => {
  console.log('listening on localHost:8080');
});
