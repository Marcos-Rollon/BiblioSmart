const Joi = require("joi")
const makeReservation = require.main.require('./services/MakeReservationService')

module.exports = [
    {
        method: 'POST',
        path:'/api/reservation/make',
        options : {
            validate: {
                payload: {
                    libraryID : Joi.string().min(3).required(),
                    tableID : Joi.string().min(3).required(),
                    chairID : Joi.string().min(3).required(),
                    userID : Joi.string().min(3).required()
                }
            }
        },
        handler : async (req, h) =>{
            const payload = req.payload
            const result = await makeReservation(payload.libraryID, payload.tableID, payload.chairID, payload.userID)
            if (result.success){
                return h.response(result.reservation)
            }else{
                console.log(result.error)
                return h.response(result.error).code(404)
            }  
        }
    }
]