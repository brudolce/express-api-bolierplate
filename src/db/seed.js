const DatabaseConnection = require('./connection.js');
const Diensleister = require('../models/Dienstleister.js');
const mongoose = require('mongoose');


DatabaseConnection()

const data = [
  {
    //your model here
  },
  
];

Diensleister.create(data, (err) => {
  if (err) {
    throw (err);
  }
  console.log(`Created ${data.length} records`);
  mongoose.connection.close();
});
