const getReservations = require("./GetReservationsService")
const cancelReservation = require("./CancelReservationService")
const MAX_RESERVATION_TIME_MINUTES = require.main.require("./constants").MAX_RESERVATION_TIME_MINUTES

async function cleanerService (){
    const reservationsResult = await getReservations()
    if (reservationsResult.success){
        const reservations = reservationsResult.reservations
        for (let i = 0 ; i < reservations.length ; i++){
            let now = new Date()
            let then = new Date(reservations[i].lastUpdated)
            let diffInMinutes = (now - then)/(1000 * 60)
            if (diffInMinutes > MAX_RESERVATION_TIME_MINUTES){
                const _ = await cancelReservation(reservations[i].userID)
            }
        }
    }
}

module.exports = cleanerService