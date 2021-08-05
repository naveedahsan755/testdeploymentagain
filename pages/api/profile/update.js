const jwt = require('jsonwebtoken');
const User = require('../../../models/User');

const handler = async (req, res) => {
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

    if (!req.body.accountType === 'Business') await user.update(req.body.data);
    else {
      await user.update(req.body.data);
      const business = await user.getBusiness();
      const businessCard = await business.getBusinessCard();
      if (businessCard) await businessCard.update(req.body.businessCard);
    }
    res.status(200).json({ message: 'success' });
  } catch (err) {
    res.status(422).json({ error: err.message });
  }
};

export default handler;
