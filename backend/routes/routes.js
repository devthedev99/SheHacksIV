const express = require('express'); 
var router = express.Router(); 
const jwt = require('jsonwebtoken'); 

const Doctor = require('../models/doctors'); 

