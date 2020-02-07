const getUserStatus = require.main.require("./api").getUserStatus

async function getUserStatusService(userID){
    try{
        const result = await getUserStatus(userID)
        return Promise.resolve({
            success : true,
            reservation : result
        })
        
    }catch(error){
        return Promise.resolve({
            success : false,
            error : error
        })
    }
}

module.exports = getUserStatusService