const keepAlive = require.main.require('./services/KeepAliveService')
const Joi = require("joi")

module.exports = [
    {
        method: 'POST',
        path: '/api/keepalive',
        options : {
            validate: {
                payload: {
                    userID : Joi.string().min(3).required()
                }
            }
        },
        handler: async (req, h) => {
            const payload = req.payload
            const userID = payload.userID
            const result = await keepAlive(userID)
            if (result.success){
                return h.response({
                    success: true,
                    lastUpdated : result.lastUpdated
                }) 
            }else {
                return h.response({
                    success: false
                }).code(404)
            }
            
        }
    }
]