import { when } from 'joi';

const bcrypt = require('bcryptjs');

const User = require('../../../models/User');
const Business = require('../../../models/Business');
const sendEmail = require('../../../utils/sendMail');

const Joi = require('joi');

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const validateSignup = (data) => {
      const schema = Joi.object({
        username: Joi.string().required(),
        email: Joi.string().required().email(),
        phone: Joi.string().required(),
        password: Joi.string().required(),
        accountType: Joi.string().required(),
        website: Joi.any().when('accountType', {
          is: 'Business',
          then: Joi.string().required().uri(),
          otherwise: Joi.string().allow(null).allow('').optional().uri()
        })
      });
      return schema.validate(data);
    };

    const { error } = validateSignup(req.body);

    if (error) return res.status(400).json({ error: error.details[0].message });

    const { username, email, phone, password, accountType, website } = req.body;

    let user = null;

    try {
      user = await User.findOne({ where: { username } });
      if (user) {
        throw new Error('Username already exists');
      }

      user = await User.findOne({ where: { email } });
      if (user) {
        throw new Error('Email already in use');
      }

      const encPassword = await bcrypt.hash(password, 12);
      let varificationCode = Math.round(Math.random() * 1000000).toString();
      while (varificationCode.length < 6) varificationCode += '0';

      const newUser = await User.create({
        username,
        email,
        phoneNumber: phone,
        password: encPassword,
        accountType,
        varificationCode
      });

      if (accountType === 'Business') {
        const newBusiness = await Business.create({
          link: website
        });
        await newUser.setBusiness(newBusiness);
      }

      sendEmail(
        email,
        'Account Varification',
        `<p>Your account validation code is: ${varificationCode}</p>`
      );

      res.status(201).json({ error: false, data: [], message: 'User successfuly created.' });
    } catch (err) {
      res.status(422).json({ error: true, message: err.message, data: [] });
    }
  } else {
    res.status(404).end('Page Not Found');
  }
};

export default handler;
