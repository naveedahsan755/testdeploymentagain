const jwt = require('jsonwebtoken');

const User = require('../../../models/User');

const handler = async (req, res) => {
  if (req.method === 'POST') {
    try {
      if (!req.headers.authorization) {
        throw new Error('Please Login');
      }
      const { username } = jwt.verify(
        req.headers.authorization.split(' ')[1],
        process.env.SECRET_KEY
      );

      const user = await User.findOne({ where: { username } });
      if (!user) {
        throw new Error('Please Login');
      }

      if (!user.accountType === 'Business') throw new Error('Only business have business card');

      const business = await user.getBusiness();
      const businessCard = await business.getBusinessCard();
      await businessCard.destroy();

      res.status(201).json({ error: false, message: 'success', data: [] });
    } catch (err) {
      res.status(422).json({ error: true, message: err.message, data: [] });
    }
  } else {
    res.status(404).end('Page Not Found');
  }
};

export default handler;
