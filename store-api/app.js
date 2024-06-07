require('dotenv').config();
const connectDB = require('./db/connect')
const productsRouter = require('./routes/products')
const express = require('express');
const app = express(); 

const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')

// errorHandlerMiddleware
app.use(express.json())

// rootes

app.get('/' , (req,res)=> {
    res.send('<h1>Store Api</h1><a href="/api/v1/products" >Products route</a>')
})

app.use('/api/v1/products',productsRouter)

app.use(notFoundMiddleware)
app.use(errorMiddleware)


const port = process.env.PORT || 3000
const MONGO_URI = process.env.MONGO_URI

const start = async () =>{
    try {
        connectDB(MONGO_URI)
        app.listen(port, (req,res)=>{
            console.log(`Server is listening on port ${port}...`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()

 