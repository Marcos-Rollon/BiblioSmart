const express = require('express')
const app = express();
const port = 8000

const bodyParser = require('body-parser')

app.use(bodyParser.json()) //Bodies codificados con json
app.use(bodyParser.urlencoded({extended: true}))

//In memory object to mock the database
let tables = {
    "table1": {
        occuped: true
    },
    "table2": {
        occuped : false
    },
    "table3":{
        occuped : true
    }
}

//Get the state of a given table
app.get('/state/get/:idtable', function (req, res){
    let boolParam   = tables[req.params.idtable].occuped
    res.send({"state" : boolParam})
})

//Set the state of a given table
app.get("/state/set/:idtable/:state", function(req, res){
    let boolParam = null
    //Evaluate the parameters first
    if (req.params.state === "true"){
        boolParam = true
    }else if (req.params.state === "false"){
        boolParam = false
    }
    tables[req.params.idtable].occuped = boolParam
    res.send({success : boolParam == null ? false : true})
})

//Make the server
const server = app.listen(port, function(){
    console.log("Server is running on port ", port)
})









