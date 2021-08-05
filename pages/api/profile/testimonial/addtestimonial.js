const Joi = require('joi');
const jwt = require('jsonwebtoken');

const User = require('../../../../models/User');
const Testimonial = require('../../../../models/Testimonial');

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const validateAddTestimonial = (data) => {
      const schema = Joi.object({
        username: Joi.string().required(),
        message: Joi.string().required()
      });
      return schema.validate(data);
    };

    const { error } = validateAddTestimonial(req.body);

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

      const { username: busername, message } = req.body;

      const businessUser = await User.findOne({ where: { username: busername } });

      if (!businessUser) throw new Error('User name of business does not exist');

      if (!businessUser.accountType === 'Business')
        throw new Error('Only business have testimonials');

      const testimonial = await Testimonial.create({ username, testimonial: message });

      const business = await businessUser.getBusiness();

      await business.setTestimonials(testimonial);

      res.status(201).json({ error: false, message: 'success', data: [] });
    } catch (err) {
      res.status(422).json({ error: true, message: err.message, data: [] });
    }
  } else {
    res.status(404).end('Page Not Found');
  }
};

export default handler;
