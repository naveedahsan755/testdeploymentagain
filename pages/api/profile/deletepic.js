const jwt = require('jsonwebtoken');
const User = require('../../../models/User');

const handler = async (req, res) => {
  if (req.method === 'POST') {
    try {
      if (!req.headers.authorization) {
        throw new Error('Please login');
      }
      const { username } = jwt.verify(
        req.headers.authorization.split(' ')[1],
        process.env.SECRET_KEY
      );

      const user = await User.findOne({ where: { username } });
      if (!user) {
        throw new Error('Please login');
      }

      await user.update({ picture: null });
      res.status(201).json({ error: false, message: 'success', data: [] });
    } catch (err) {
      res.status(401).json({ error: true, message: err.message, data: [] });
    }
  } else {
    res.status(404).end('Page Not Found');
  }
};

export default handler;
