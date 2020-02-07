const fs = require('fs')

let routes = []

// Add all the routes in this directory
fs.readdirSync(__dirname)
    .filter(file => file != 'index.js')
    .forEach(file =>{
        routes = routes.concat(require(`./${file}`))
    });
module.exports = routes;