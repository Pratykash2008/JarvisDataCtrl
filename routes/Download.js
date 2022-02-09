const server = require('express')
const router = server.Router()
const path = require('path')

router.get('/' , function(req , res){
    res.sendFile(path.join(__dirname , '../public/download.html'))
})
router.get('/Logo' , function(req , res){
    res.sendFile(path.join(__dirname , '../public/favicon.png'))
})
router.get('/side' , function(req , res){
    res.sendFile(path.join(__dirname , '../Data/SideImg.jpg'))
})
router.get('/kacha', function(req, res){
    filename = 'KachaBadam.mp4'
    var file = (path.join(__dirname , `../Download/${filename}`));
    res.download(file); // Set disposition and send it.
    // res.redirect('/')
  });

module.exports = router