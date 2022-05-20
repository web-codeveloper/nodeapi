const dotenv = require('dotenv')
dotenv.config({path:`.env`})
require('./configs/db.connection')

const express = require('express')
const path = require('path')
const logger = require("morgan")
const cors = require("cors")
const helmet = require('helmet')
const app = express()
const mainRouter = require('./routers/main.router')
const port = process.env.PORT || 3311

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(logger('dev'))
app.use(helmet({
    crossOriginResourcePolicy: false,
  }));
app.locals.baseurl = "http://localhost:" + port + "/";
app.use(express.static(path.join(__dirname + '/public')))
app.use('/api',mainRouter)

app.listen(port,() => {console.log(`Server is running on ${port}`)})