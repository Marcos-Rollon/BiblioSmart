const Reservation = require.main.require('./models/ReservationModel')

async function getReservations (){
    return new Promise((resolve, reject)=>{
        Reservation.find((error, results)=>{
            if (error){
                reject({
                    error : error
                })
            }else {
                resolve(results)
            }
        })
    })
}

module.exports = getReservations 