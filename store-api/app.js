require('dotenv').config();

const express = require('express');
const app = express(); 

const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')

// errorHandlerMiddleware
app.use(express.json())
app.use(notFoundMiddleware)
app.use(errorMiddleware)

// rootes

app.get('/' , (res,req)=> {
    res.send('<h1>Store Api</h1><a  href="/api/v1/products" >Products route</a>')
})

const port = process.env.PORT || 3000

const start = async () =>{
    try {
        // connect to DB
        app.listen(port, (req,res)=>{
            console.log(`Server is listening on port ${port}...`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()

console.log("This is a test")