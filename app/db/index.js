'use strict';

const config = require('../config');
const Mongoose = require('mongoose')
  .connect(config.dbURI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(
    () => {
      console.log('Mongoose Connected');
    },
    error => {
      console.log('MongoDB Error', error);
    }
  );

module.exports = {
  Mongoose
};
