const makeReservation = require.main.require("./api").makeReservation

async function makeReservationService(libraryID, tableID, chairID, userID){
    try{
        const result = await makeReservation(libraryID, tableID, chairID, userID)
        return Promise.resolve({
            "success" : true,
            "reservation" : result
        })
        
    }catch(error){
        return Promise.resolve({
            success : false,
            error : error
        })
    }
}

module.exports = makeReservationService