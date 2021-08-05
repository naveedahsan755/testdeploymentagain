const Joi = require('joi');
const jwt = require('jsonwebtoken');

const Testimonial = require('../../../../models/Testimonial');

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const validateditestimonial = (data) => {
      const schema = Joi.object({
        testimonialId: Joi.number().integer().required(),
        message: Joi.string().required()
      });
      return schema.validate(data);
    };

    const { error } = validateditestimonial(req.body);

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

      const { testimonialId, message } = req.body;

      const testimonial = await Testimonial.findOne({ where: { id: testimonialId } });

      if (!testimonial) throw new Error('No testimonial found');

      await testimonial.update({ testimonial: message });

      res.status(201).json({ error: false, message: 'success', data: [] });
    } catch (err) {
      res.status(422).json({ error: true, message: err.message, data: [] });
    }
  } else {
    res.status(404).end('Page Not Found');
  }
};

export default handler;
