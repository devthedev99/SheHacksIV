require('./config/config');
require('./models/db');
require('./config/passportConfig');
const users = require('./controllers/user.controller');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport'); 
const rtsIndex = require('./routes/index.router');
const route = require('./routes/routes'); 

var app = express();

// middleware
app.use(passport.initialize());
app.use(bodyParser.json());
app.use(cors());
app.use('/api', route);
app.use('/api', rtsIndex);

// start server
app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));