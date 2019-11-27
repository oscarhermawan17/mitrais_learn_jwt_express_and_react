
const express = require('express')
const app = express()
var jwt = require('jsonwebtoken');
const router = express.Router()
const token = require('./token')
const cors  = require('cors');
const bodyParser = require('body-parser'); // for body post, convert to JSON
require('dotenv').config();  // for secure credential ip or something string "SPECIAL" 
app.use(cors()); // for allow differentorigin http

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/login', token)

app.get('/', function (req, res) {
    res.send('Birds home page')
})

app.listen(3001)