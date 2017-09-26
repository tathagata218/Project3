module.exports = function(sequelize, DataTypes){
    var Test = sequelize.define("Test",{
    userName  :  DataTypes.STRING,
    stockData : DataTypes.STRING,
        
    
    });
    return Test;
}