const Reservation = require.main.require('./models/ReservationModel')

async function getUserStatus (userID){
    return new Promise((resolve, reject)=>{
        Reservation.find({
           "userID" : userID
        }, (error, results)=>{
            if(error){
                reject(error)
            }else {
                resolve(results)
            }
        })
    })
}

module.exports = getUserStatus