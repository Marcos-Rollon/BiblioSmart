const getUserStatus = require.main.require('./services/GetUserStatusService')
const Joi = require("joi")

module.exports = [
    {
        method: 'GET',
        path:'/api/reservation/get/{userid}',
        options : {
            validate: {
                params:{
                    userid: Joi.string().min(3).required()
                }
            }
        },
        handler : async (req, h) =>{
            const userID = req.params.userid
            result = await getUserStatus(userID)
            if (result.success && result.reservation.length >= 1){
                return h.response({
                    success: true,
                    reservation : result.reservation
                })
            }else {
                return h.response({
                    success : false,
                    error : result.error
                }).code(404)
            }
        }
    }
]