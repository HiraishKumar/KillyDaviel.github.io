require ('dotenv').config()
const express = require ('express')
const router = require('./router/router')
const app = express()
const connectDB = require('./DB/connect')


const port = 3000
// middleware
app.use(express.static("./public"))

// app.use(express.json)

app.use(express.json())

// router
app.use("/api/v1/tasks",router)

const start = async () => {
    try {
        await connectDB(process.env.CON_STR);
        app.listen(port,()=>{
            console.log(`listening on port ${port}...`)
        });
    } catch (error) {
        console.log(`failed to connect to DB ${error}`);
    };
};

start();