const Hapi = require('hapi');
const routes = require('./routes')
const startDatabase = require('./api/mongodb/connection')
const cleanerService = require('./services/CleanerService')

// Change constants here
const PORT = 8000
const HOST = '0.0.0.0'
const CLEANER_SERVICE_INTERVAL_MINUTES = require("./constants").CLEANER_SERVICE_INTERVAL_MINUTES

const server = Hapi.server({
    port : PORT,
    host : HOST,
    app:{}
})

const startServer = async () =>{
    try{
        await server.route(routes)
        await startDatabase()
        await server.start()
        console.log("Sever started on port ", PORT)
        setInterval(cleanerService, CLEANER_SERVICE_INTERVAL_MINUTES * 1000 * 60)
    }catch (error){
        console.error("Error starting server")
        console.error(error)
    }
}

startServer();