require('dotenv').config();

const express = require('express');
const app = express(); 

const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')

// errorHandlerMiddleware
app.use(express.json())

// rootes

app.get('/' , (res,req)=> {
    res.send()
})

console.log("This is a test")