const jwt = require('jsonwebtoken');
const User = require('../../../models/User');
const Joi = require('joi');

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const validateUploadPic = (data) => {
      const schema = Joi.object({
        link: Joi.string().required()
      });
      return schema.validate(data);
    };

    const { error } = validateUploadPic(req.body);

    if (error) return res.status(400).json({ error: error.details[0].message });

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

      await user.update({ picture: req.body.link });
      res.status(201).json({ error: false, message: 'success', data: [] });
    } catch (err) {
      res.status(401).json({ error: true, message: err.message, data: [] });
    }
  } else {
    res.status(404).end('Page Not Found');
  }
};

export default handler;
