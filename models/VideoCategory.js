const { DataTypes } = require("sequelize");
const sequelize = require("./db");
const Video = require("./Video");

const VideoCategory = sequelize.define("VideoCategory", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

VideoCategory.hasMany(Video);
Video.belongsTo(VideoCategory);

module.exports = VideoCategory;
