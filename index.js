const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// main admin page for 
app.use('/' , require('./routes/Admin.js'))

// Only for devloper
app.use('/Checker' , require('./routes/checker.js'))

// send data or group query to devlop system of jarvis
app.use('/upload' , require('./routes/Uploader'))
app.listen(port, () => {
  console.log(`Jarvis data manager listening on port ${port}`)
})