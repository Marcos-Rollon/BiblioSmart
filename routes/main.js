module.exports = [
    {
        method: 'GET',
        path:'/api',
        handler : async (_, h) =>{
            return h.response("This is the BiblioSmart API root endpoint")
        }
    }
]