module.exports = function(sequelize, DataTypes){
    const product = sequelize.define('Product', {
        name : {
            type: DataTypes.STRING(20),
            allowNull : false,
        },
        price : {
            type : DataTypes.INTEGER(10),
            allowNull: false
        },
        seller : {
            type: DataTypes.STRING(33),
            allowNull : false
        },desc : {
            type: DataTypes.STRING(300),
            allowNull : false
        }, 
        imageUrl : {
            type : DataTypes.STRING(300),
            allowNull : true
        }

    })
    return product;
};