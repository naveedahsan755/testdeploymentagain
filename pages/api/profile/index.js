const User = require('../../../models/User');
const Video = require('../../../models/Video');
const Testimonial = require('../../../models/Testimonial');
const BusinessCard = require('../../../models/BusinessCard');
const jwt = require('jsonwebtoken');

const handler = async (req, res) => {
  if (req.method === 'GET') {
    try {
      if (!req.headers.authorization) throw new Error('Please Login');
      const { username } = jwt.verify(
        req.headers.authorization.split(' ')[1],
        process.env.SECRET_KEY
      );

      const user = await User.findOne({ where: { username } });
      if (!user) {
        throw new Error('Please Login');
      }

      // if (!user.token) throw new Error('Please Login');

      let following = await user.getFollower();
      let followed = await user.getFollowed();
      const vids = await Video.findAll({ where: { UserId: user.id } });

      let response = {
        username,
        rating: user.avgRating,
        views: user.totalViews,
        following: following.length,
        followed: followed.length,
        about: user.about,
        picture: user.picture,
        accessible: user.accessible,
        videos: vids.map((vid) => vid.name)
      };

      if (user.showPhone) response.phone = user.phone;

      if (user.accountType === 'Business') {
        const business = await user.getBusiness();
        let testimonials = await business.getTestimonials();
        response.testimonials = testimonials;

        const findBusinessCard = await business.getBusinessCard();

        if (findBusinessCard) {
          let businessCard = {
            ownderName: findBusinessCard.ownerName,
            email: findBusinessCard.email,
            website: findBusinessCard.website
          };

          if (showPhone) response.BusinessCard.phone = phone;
          response.businessCard = businessCard;
        }
      }

      res.status(200).json({
        message: 'success',
        data: response
      });
    } catch (err) {
      res.status(401).json({ error: err.message });
    }
  } else {
    res.status(404).end('Page Not Found');
  }
};

export default handler;
