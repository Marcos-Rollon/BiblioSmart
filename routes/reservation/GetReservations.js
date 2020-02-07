const Joi = require("joi")
const getReservations = require.main.require('./services/GetReservationsService')

module.exports = [
    {
        method: 'GET',
        path:'/api/reservation/get',
        handler : async (_, h) =>{
            const result = await getReservations()
            if (result.success){
                return h.response(
                    {
                        success: true, 
                        reservations : result.reservations
                    })
            }else{
                return h.response({
                    success : false, 
                    errors : result.error
                }).code(404)
            }  
        }
    }
]