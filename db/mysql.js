const mongoose = require('mongoose');
const { mLab } = require('../config');

mongoose.connect(mLab, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => { console.log('connection successful'); });
