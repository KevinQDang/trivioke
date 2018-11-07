const mongoose = require('mongoose');
const { mLab } = require('../config');

mongoose.connect(mLab, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => { console.log('connection successful'); });

const userSchema = mongoose.Schema({
  username: {
    type: String,
    unquire: true,
    require: true,
  },
  password: {
    type: String,
    unquire: true,
    require: true,
  },
});
const User = mongoose.model('User', userSchema);

const checkPassword = (dataObj, cb) => {
  const { username } = dataObj;
  User.findOne({ username }, (err, data) => {
    if (err) {
      console.log(err, 'data');
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
};

const createUser = (obj, cb) => {
  const newUser = new User({
    username: obj.username,
    password: obj.password,
  });
  newUser.save((err) => {
    if (err) {
      console.error('database', err);
      cb(err);
    }
  });
};
const getAllSongs = (cb) => {
  db.collection('videos').find().toArray((err, data) => {
    if (err) {
      console.log(err);
    }
    console.log(data);
    return cb(data);
  });
};
module.exports = {
  checkPassword,
  createUser,
  getAllSongs,
};
