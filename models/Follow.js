const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Follow extends Model {}

Follow.init(
    {
        id: {
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true,

        },
        follower: {
            type:DataTypes.INTEGER,
            references: {
                model:'user',
                key:'id'
            }
        },
        following: {
            type:DataTypes.INTEGER,
            references: {
                model:'user',
                key:'id'
            }
        }

    },
    {
        sequelize,
        timestamps:false,
        freezeTableName: true,
        underscored:true,
        modelName: 'follow'
    }
  
)

module.exports = Follow;