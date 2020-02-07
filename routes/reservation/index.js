const fs = require('fs')

let files = []

// Add all the routes in this directory
fs.readdirSync(__dirname)
    .filter(file => file != 'index.js')
    .forEach(file =>{
        files = files.concat(require(`./${file}`))
    });
module.exports = files;