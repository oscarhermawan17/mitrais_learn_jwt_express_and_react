const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken');

// get token
router.get('/', function (req, res) {
    token = jwt.sign({username:"Oscar" }, process.env.RAHASIA, { expiresIn: 3600*1 })
    res.send({status:"success", message_response:"Berhasil", token })
})


//decoded token
router.post('/', (req,res) => {
    jwt.verify(req.body.token, process.env.RAHASIA, (err, decoded) =>
        // console.log('token = ', decoded)
        res.send(decoded)
    );
})

module.exports = router