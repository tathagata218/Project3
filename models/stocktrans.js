module.exports = function(sequelize, DataTypes){
    var stock_trans = sequelize.define("stock_trans",{
        transTime : {
            type : DataTypes.DATE,
            allowNull: true,
            defaultValue: DataTypes.NOW
        },
        numOfShares : {type : DataTypes.INTEGER,
            allowNull: true},
    
        companyName : {type : DataTypes.STRING,
                        allowNull:true,
                        isUppercase: true},
        
    });
    return stock_trans;
};