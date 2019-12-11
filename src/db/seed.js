const DatabaseConnection = require('./connection.js');
//change your model down here
const User = require('../models/User.js');
const mongoose = require('mongoose');


DatabaseConnection()

const data = [
  {
    //your data here
  },
  
];

//change your model const down here from 'User' to the desired model
User.create(data, (err) => {
  if (err) {
    throw (err);
  }
  console.log(`Created ${data.length} records`);
  mongoose.connection.close();
});
