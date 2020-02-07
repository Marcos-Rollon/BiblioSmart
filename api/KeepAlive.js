const Reservation = require.main.require("./models/ReservationModel")

async function keepAlive (userID){
    return new Promise((resolve, reject)=>{
        Reservation.updateOne({
            "userID": userID
        }, {
            "lastUpdated": Date()
        }, (err, result)=> {
            if(err){
                reject(err)
            }else {
                resolve(result)
            }
        })
    })
}

module.exports = keepAlive 