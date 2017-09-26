var db = require("../models");

module.exports = function(app){
    app.post("/data",function(req,res){
        console.log(req.body);

        db.Test.create({
            userName : req.body.userName,
            stockData : req.body.userTicker
        }).then(function(outData){
            res.json(outData);
        })
    });
}