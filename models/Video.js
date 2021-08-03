const { DataTypes } = require("sequelize");
const sequelize = require("./db");

const Video = sequelize.define("Video", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isFree: {
    type: DataTypes.BOOLEAN,
  },
  videoType: {
    type: DataTypes.STRING,
  },
  numFiveStars: {
    type: DataTypes.INTEGER,
  },
  numTips: {
    type: DataTypes.INTEGER,
  },
  numComments: {
    type: DataTypes.INTEGER,
  },
  approvedBy: {
    type: DataTypes.INTEGER,
  },
});

module.exports = Video;
