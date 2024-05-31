const mongoose = require('mongoose')

const connectDB = (url)=> {
    return mongoose
    .connect(url)
    .then(()=>{console.log('CONNECTED TO DATABASE SUCCESS')})
    .catch((err)=> {console.log(`ERROR IN CONNCECTION ${err}`)})
}

module.exports = connectDB