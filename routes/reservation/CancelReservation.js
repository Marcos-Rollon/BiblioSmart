const cancelReservation = require.main.require("./services/CancelReservationService")

module.exports = [

    {
        method: 'POST',
        path:'/api/reservation/cancel',
        handler : async (req, h) =>{
            const payload = req.payload
            console.log("CANCEL ROUTE FOR USERID : ", payload.userID)
            const result = await cancelReservation()
            if (result.success){
                return h.response({success: true})
            }else {
                return h.response({success: false}).code(404)
            }
        }
    }
]

