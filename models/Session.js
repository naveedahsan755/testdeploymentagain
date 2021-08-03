const { DataTypes } = require("sequelize");
const sequelize = require("./db");
const User = require("./User");

const Session = sequelize.define("Session", {
  connected: {
    type: DataTypes.BOOLEAN,
  },
});

Session.hasOne(User);
User.belongsTo(Session);

module.exports = Session;
