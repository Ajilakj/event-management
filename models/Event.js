const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Event extends Model {}

Event.init(
  {
    event_id : {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    event_title: {
      type: DataTypes.STRING
    },
    event_location: {
      type: DataTypes.STRING
    },
    event_data: {
      type: DataTypes.JSON
    },
    event_tag: {
      type: DataTypes.STRING
    },
    event_date: {
      type: DataTypes.JSON
    },
    event_image: {
      type: DataTypes.JSON
    },
    event_date_created: {
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
