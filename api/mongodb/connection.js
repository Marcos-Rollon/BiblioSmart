const mongoose = require('mongoose')
// command on mac : brew services start mongodb-community

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