const mongoose = require("mongoose")

const ReservationModel = mongoose.model('reservation', {
    libraryID: String,
    tableID: String,
    chairID: String,
    reservedAt : Date,
    lastUpdated : Date,
    userID : String
})

module.exports = ReservationModel