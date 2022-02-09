const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const fs = require('fs')
app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// main admin page for 
app.use('/' , require('./routes/Admin.js'))


app.use('/about' , require('./routes/about'))
// Only for devloper
app.use('/checker' , require('./routes/checker.js'))

// send data or group query to devlop system of jarvis
app.use('/upload' , require('./routes/Upload'))


app.use('/download', require('./routes/Download'))


app.use('/update' , require('./routes/update'))
app.listen(port, () => {
  console.log(`Jarvis data manager listening on port ${port}`)
})