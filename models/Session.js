const { DataTypes } = require("sequelize");
const sequelize = require("./db");

const Session = sequelize.define("Session", {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
  },
  sessionId: {
    type: DataTypes.INTEGER,
  },
  connected: {
    type: DataTypes.BOOLEAN,
  },
});

module.exports = Session;
