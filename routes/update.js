const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    // res.send('get request')
    res.redirect('/')
})
// this is devloper request endpoint
router.post('/', (req, res,) => {
    var data = req.body
    console.log(data)
    res.send()
})


module.exports = router
// update , restore , expand , checker , verified