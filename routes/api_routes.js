var db = require("../models");

module.exports = function(app){
    app.post("/userIntData",function(req,res){
        console.log(req.body);

        db.users.create({
            userName  : req.body.userName,
            firstName : req.body.firstName,
            lastName  : req.body.lastName,
            password  : req.body.password 
        }).then(function(outData){
            res.json(outData);
        })
    });
}