require('dotenv').config({path : '../backend/.env'})
let connectMongo = require('./crucial/db')
const express = require('express')
const cors = require('cors')
connectMongo()
    // .then(()=>{console.log('Connected To Mongo')})
    .catch((e)=>{console.log('Connection Error ' + e)})
const app = express()

app.use(cors())

app.use(cors())
//For Using Post Request
// app.use(express.urlencoded())
//For Using The JSON Request
app.use(express.json())
// All Available Routes
app.get('/', (request, response) => {response.status(400).json({'error' : {'type' : "Bad Request"}})})
app.use('/api/auth',require("./routes/auth"));
app.use('/api/notes',require("./routes/notes"));
app.get("*",(request,response)=>{response.status(400).json({'error' : {'type' : "Bad Request"}})})
app.post("*",(request,response)=>{response.status(400).json({'error' : {'type' : "Bad Request"}})})
app.listen(process.env.PORT)
