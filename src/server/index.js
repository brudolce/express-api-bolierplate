require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const DatabaseConnection = require('./../db/connection.js');
require('../../configs/passport.js');

// Start Express
const app = express();

// Database Connection
DatabaseConnection();

// Server Init
const HTTP_SERVER = process.env.PORT;
app.listen(HTTP_SERVER, () => {
  console.log(`server listening on port ${HTTP_SERVER}!`);
});

// Session
app.use(session({
  secret: 'some secret goes here',
  resave: true,
  saveUninitialized: true,
  cookie: { maxAge: 3600000 }
}));

// Passport
app.use(passport.initialize());
app.use(passport.session());

CORS
app.use(cors({
  credentials: true,
  // put your origin url here
  //origin: ['http://localhost:3000']
}));

// Routes Response Listener
app.use(morgan('combined'));


// Body Parser Init
app.use(bodyParser.json());


//test script on home page
app.get('/', (req,res)=>{
  res.send('I am working!')
})

// Requiring Endpoints
const users = require('../endpoints/users.js');

app.use('/auth', users);

//front end routes
app.use((req, res) => {
  res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});


module.exports = app;
