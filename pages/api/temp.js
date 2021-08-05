const User = require('../../models/User');
const Business = require('../../models/Business');
const BusinessCard = require('../../models/BusinessCard');
const Chat = require('../../models/Chat');
const Session = require('../../models/Session');
const Testimonial = require('../../models/Testimonial');
const Video = require('../../models/Video');
const VideoCategory = require('../../models/VideoCategory');

const handler = async (req, res) => {
  // await User.sync({ force: true });
  // await Business.sync({ force: true });

  await Testimonial.sync({ force: true });

  res.send('done');
};

export default handler;
