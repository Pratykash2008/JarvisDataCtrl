const express =  require('express')
const router = express.Router()
key = 'E~7@)`g!$fNga!cKq-aa'
// file system module to perform file operations
const fs = require('fs');

router.get('/' , (req ,res)=>{
    var content

    bool = req.query.id == key
    if (bool){
        var text = fs.readFileSync('./Data/rawData.txt','utf8')
        console.log(text)
        res.send(text)
    }
    else{
        res.redirect('/')
    }
})

router.post('/' , (req, res , next)=>{
    res.send('will be availble soon')
    // res.redirect('/')
})

module.exports = router