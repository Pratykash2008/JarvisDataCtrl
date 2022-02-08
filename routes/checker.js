const express =  require('express')
const router = express.Router()
key = 'E~7@)`g!$fNga!cKq-aa'
// file system module to perform file operations
const fs = require('fs');

router.get('/' , (req ,res)=>{
    bool = req.query.id == key
    if (bool){
        main = req.query.word
        if (main){
            if (main == 'clear'){
                fs.writeFile('./Data/rawData.txt', 'query that people search : \n', function (err) {
                    if (err) throw err;
                    console.log('cleared');
                  });
                res.send('cleared data')
            }
        }
        var text = fs.readFileSync('./Data/rawData.txt','utf8')
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