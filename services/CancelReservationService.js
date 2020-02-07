const cancelReservation = require.main.require("./api").cancelReservation

async function cancelReservationService(userID){
    try{
        const result = await cancelReservation(userID)
        if (result.deletedCount > 1){
            return Promise.resolve({
                success : true
            })
        }else {
            return Promise.resolve({
                success : false
            })
        }
    }catch(error){
        return Promise.resolve({
            success : false,
            error : error
        })
    }
}

module.exports = cancelReservationService