const jwt = require('jsonwebtoken');
const User = require('../../models/User');
const Joi = require('joi');

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const validateSignin = (data) => {
      const schema = Joi.object({
        username: Joi.string().required(),
        password: Joi.string().required()
      });
      return schema.validate(data);
    };

    const { error } = validateSignin(req.body);

    if (error) return res.status(400).json({ error: error.details[0].message });

    const { username, password } = req.body;

    try {
      const user = await User.findOne({ where: { username } });
      if (!user) {
        throw new Error('User deos not exist.');
      }

      if (!user.emailConfirmed) {
        throw new Error('Please confirm email.');
      }

      const match = await bcrypt.compare(password, user.password);

      if (!match) {
        throw new Error('User failed to login.');
      }

      const token = jwt.sign({ username }, process.env.SECRET_KEY, {
        expiresIn: '1h'
      });

      await user.update({ token });

      res
        .status(200)
        .json({ error: false, message: 'Login successful', data: { username, token } });
    } catch (err) {
      res.status(401).json({ error: true, message: err.message, data: [] });
    }
  } else {
    res.status(404).end('Page Not Found');
  }
};

export default handler;
