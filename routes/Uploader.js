const express = require('express')
const router = express.Router()
const manager = require('../Data/Manager')
// const json = require(json)

router.get('/', (req, res) => {
    res.send('You cant use this endpoint')
    res.redirect('/')
})
// this is devloper request endpoint
router.post('/', (req, res, next) => {
    var data = req.body
    res.send(manager('./Data/rawData.txt' , data , "query"))
})


module.exports = router
// update , restore , expand , checker , verified