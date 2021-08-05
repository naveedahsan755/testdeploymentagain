const Joi = require('joi');
const jwt = require('jsonwebtoken');

const BusinessCard = require('../../../models/BusinessCard');
const User = require('../../../models/User');

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const validateSetBusinessCard = (data) => {
      const schema = Joi.object({
        ownerName: Joi.string().allow(null).allow('').optional(),
        email: Joi.string().allow(null).allow('').optional().email(),
        phone: Joi.string().allow(null).allow('').optional(),
        address: Joi.string().allow(null).allow('').optional(),
        website: Joi.string().allow(null).allow('').optional().uri()
      });
      return schema.validate(data);
    };

    const { error } = validateSetBusinessCard(req.body);

    if (error)
      return res.status(400).json({ error: true, message: error.details[0].message, data: [] });

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

      const { ownerName, email, address, phone, website } = req.body;

      const businessCard = await BusinessCard.create({ ownerName, email, address, phone, website });
      const business = await user.getBusiness();

      await business.setBusinessCard(businessCard);

      res.status(201).json({ error: false, message: 'success', data: [] });
    } catch (err) {
      res.status(422).json({ error: true, message: err.message, data: [] });
    }
  } else {
    res.status(404).end('Page Not Found');
  }
};

export default handler;
