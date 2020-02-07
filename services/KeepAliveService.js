const keepAlive = require.main.require("./api").keepAlive

async function keepAliveService(userID){
    try{
        const result = await keepAlive(userID)
        if (result.nModified >= 1){
            return Promise.resolve({
                success: true,
                lastUpdated : Date()
            })
        }else {
            return Promise.resolve({
                success : false,
                error : "No matching document"
            })
        }
    }catch(error){
        return Promise.resolve({
            success : false,
            error : error
        })
    }
}

module.exports = keepAliveService