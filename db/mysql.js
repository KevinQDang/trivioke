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
const videosSchema = mongoose.Schema({
    
  _id: {
    kind: String,
    videoId: String,
  },
  snippet: {
    title: String,
    description: String,
    thumbnails: {
      default: {
        url: String,
      },
    },
  },
});
const Video = mongoose.model('Video', videosSchema);
const getAllSongs = (cb) => {
  Video.find((err, res) => {
    if (err) {
      console.log(err);
      return cb(err, null);
    }
    return cb(null, [res]);
  });
};

module.exports = {
  checkPassword,
  createUser,
  getAllSongs,
};
