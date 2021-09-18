const express = require('express')
const m = require('mongoose')
const app = express()
const route = require('./hi/scoreAPI')
const cors = require('cors')
const port = 4900


const url = "mongodb+srv://score:12345@cluster0.do3z0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
app.use(cors())
m.connect(url)
.then(function () {
    console.log("connected sucsesfully")
}).catch(function (error) {console.log(error)})

app.use(express.json())
app.use('/api' ,route)


app.listen(process.env.PORT || port,function(){
    console.log("server is now listening at port 4900")
})