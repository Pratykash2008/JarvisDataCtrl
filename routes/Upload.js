const express = require('express')
const router = express.Router()
const manager = require('../Data/Manager')
// const json = require(json)

router.get('/', (req, res) => {
    res.send('You cant use this endpoint')
    res.redirect('/')
})
// this is devloper request endpoint
router.post('/', (req, res,) => {
    var data = req.body
    console.log(data)
    res.send(manager('./Data/rawData.txt' , data , "query"))
})


module.exports = router
// update , restore , expand , checker , verified