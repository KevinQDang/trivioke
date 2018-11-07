const mongoose = require('mongoose');
const { mLab } = require('../config');

mongoose.connect(mLab, { useNewUrlParser: true });
