const express = require("express");
const mongoose = require('mongoose')
const app = express();
var bodyParser = require('body-parser')

app.use(bodyParser.json())

mongoose.connect('mongodb+srv://vanvu572:345712@cluster0.41n8n.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log('MONGOOSE CONNECTED!!')
})
.catch(error => {
    console.log('MONGOOSE CONNECTION ERROR')
    console.log(error)
})

  
app.post('/login',(req, res) => {
  const user = req.body
  res.json({ user })
});

app.get('/home', (req,res) => {
  res.json({user: 'Helloooo'})
})
  
const PORT = process.env.PORT || 8080;
  
app.listen(PORT, console.log(`Server started on port ${PORT}`));