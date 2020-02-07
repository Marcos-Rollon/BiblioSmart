const Reservation = require.main.require('./models/ReservationModel')

async function cancelReservation (userID){
    return new Promise((resolve, reject)=> {
        Reservation.deleteMany({
            "userID" : userID
        }).then((docs)=>{
            resolve(docs)
        }).catch((err)=>{
            reject(err)
        })
    })
}

module.exports = cancelReservation