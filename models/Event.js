const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Event extends Model {}

Event.init(
  {
    id : {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING
    },
    location: {
      type: DataTypes.JSON
    },
    data: {
      type: DataTypes.JSON
    },
    tag: {
      type: DataTypes.STRING
    },
    dates_and_time: {
      type: DataTypes.JSON
    },
    end_date:{
      type:DataTypes.DATE
    },
    image: {
      type: DataTypes.JSON
    },
    date_created: {
        type: DataTypes.DATE
    },
    client_id: {
        type: DataTypes.INTEGER,
        // references: {
        //   model: 'user',
        //   key: 'id',
        // },
      },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'event'
  }
);

module.exports = Event;
