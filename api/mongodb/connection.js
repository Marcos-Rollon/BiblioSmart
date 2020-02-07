const mongoose = require('mongoose')
// command on mac : brew services start mongodb-community
// Conection to the free MongoDB atlas online.
//const uri = "mongodb+srv://root:bibliosmart@umabibliosmart-c3u83.mongodb.net/test?retryWrites=true&w=majority";
const uri = "mongodb://127.0.0.1"

async function startDatabase(){
    return new Promise((resolve, reject)=>{
        mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
        const db = mongoose.connection
        db.on('error', (error)=>{
            console.error("Connection error ", error)
            reject(error)
        })
        db.on('open', ()=>{
            console.log("MongoDB connected")
            resolve()
        })
    })
}

module.exports = startDatabase