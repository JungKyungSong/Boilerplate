const express = require('express')
const res = require('express/lib/response')
const app = express()
const port = 4000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://JungKyungSong:GdsTqxlc2Bd8UlVV@boilerplate.woyxb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(()=> console.log('MongoDB connected..'))
  .catch(err=> console.log(err))



app.get('/', (req,res) => res.send('Hello World'))

app.listen(port, () => console.log('Example app listening on port!'))