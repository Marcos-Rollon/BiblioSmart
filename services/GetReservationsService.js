const getReservations = require.main.require('./api').getReservations

async function getReservationsService(){
    try {
        const result = await getReservations()
        
        return Promise.resolve({
            success : true,
            reservations : result
        })
    }catch(error){
        return Promise.resolve({
            success: false,
            error : error
        })
    }
}

module.exports = getReservationsService