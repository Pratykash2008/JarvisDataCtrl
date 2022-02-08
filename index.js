const express = require('express')
const app = express()
const port = process.env.PORT || 3000
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

// main admin page for 
app.use('/' , require('./routes/Admin.js'))

// Only for devloper
app.use('/checker' , require('./routes/checker.js'))

// send data or group query to devlop system of jarvis
app.use('/upload' , require('./routes/Upload'))
app.listen(port, () => {
  console.log(`Jarvis data manager listening on port ${port}`)
})