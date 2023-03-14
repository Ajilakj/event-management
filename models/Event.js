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
    category:{
      type: DataTypes.JSON
    },
    data: {
      type: DataTypes.JSON
    },
    tag: {
      type: DataTypes.STRING
    },
    dates: {
      type: DataTypes.JSON
    },
    endDate:{
      type:DataTypes.DATE
    },
    virtual:{
      type: DataTypes.STRING
    },
    timeZone:{
      type: DataTypes.STRING
    },
    image: {
      type: DataTypes.JSON
    },
    dateCreated: {
        type: DataTypes.DATE
    },
    clientId: {
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
