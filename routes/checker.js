const express =  require('express')
const router = express.Router()
// file system module to perform file operations
const fs = require('fs');
router.get('/' , (req ,res)=>{
    res.redirect('/')
})

router.post('/' , (req, res , next)=>{
    console.log(req.header())
    res.send('got a post request')
})

module.exports = router