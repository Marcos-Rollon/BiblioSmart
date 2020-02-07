const ReservationModel = require.main.require("./models/ReservationModel")

async function makeReservation (libraryID, tableID, chairID, userID){
    try{
        const model = {
            "libraryID": libraryID,
            "tableID": tableID,
            "chairID": chairID,
            "userID": userID,
            "reservedAt": Date(),
            "lastUpdated": Date()
        }
        const reservation = new ReservationModel(model)
        const result = await reservation.save()
        return Promise.resolve({
            success : true,
            result : result
        })
    }catch(error){
        return Promise.reject('MongoDB error '+ error)
    }
}

module.exports = makeReservation