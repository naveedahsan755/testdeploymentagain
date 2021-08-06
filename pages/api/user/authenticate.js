const Joi = require('joi');

const User = require('../../../models/User');

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const validateAuthenticate = (data) => {
      const schema = Joi.object({
        username: Joi.string().required(),
        varificationCode: Joi.string().required().length(6)
      });
      return schema.validate(data);
    };

    const { error } = validateAuthenticate(req.body);

    if (error) return res.status(400).json({ error: error.details[0].message });

    const { username, varificationCode } = req.body;

    try {
      const user = await User.findOne({ where: { username } });
      if (!user) {
        return res.status(400).json({ error: true, message: 'Validation failed', data: [] });
        // throw new Error('Validation failed');
      }

      const time = Math.floor((Date.now() - user.updatedAt.getTime()) / (1000 * 60));
      if (time >= 60) {
        return res.status(403).json({ error: true, message: 'Validation code expired', data: [] });
        // throw new Error('Validation code expired');
      }

      if (!(user.varificationCode === varificationCode.toString())) {
        return res.status(400).json({ error: true, message: 'Validation failed', data: [] });
        // throw new Error('Validation failed');
      }

      await user.update({ emailConfirmed: true });
      res.status(200).json({ error: false, message: 'User varified', data: [] });
    } catch (err) {
      res.status(500).json({ error: false, message: err.message, data: [] });
    }
  } else {
    res.status(404).end('Page Not Found');
  }
};

export default handler;
