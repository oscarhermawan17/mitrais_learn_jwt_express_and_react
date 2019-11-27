
const express = require('express')
const app = express()
var jwt = require('jsonwebtoken');
const router = express.Router()
const token = require('./token')
const cors  = require('cors');
const bodyParser = require('body-parser');
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/login', token)

app.get('/', function (req, res) {
    res.send('Birds home page')
})

app.listen(3001)