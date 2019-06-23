const User = require('../../models/user');
const keys = require('../../config/keys');
const passport = require('passport');
const jwt = require('jsonwebtoken');

exports.createAuthToken = user => {
  return jwt.sign({ user }, keys.jwtSecret, {
    expiresIn: '7d'
  });
};

exports.destroy = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(500).json({ message: 'Invalid user ID' });
    }
    user.remove();
    res.status(201).json({ message: 'Successfully deleted' });
  } catch (err) {
    next(err);
  }
};

exports.login = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) return next(err);
    if (!user) return res.status(401).json(info);
    const token = this.createAuthToken(user);
    res.status(201).json({ token });
  })(req, res, next);
};

exports.register = async (req, res, next) => {
  try {
    const { username, password, adminKey } = req.body;
    const key = adminKey ? adminKey : '';
    const user = await User.create({
      username,
      password,
      admin: key === keys.adminKey
    });
    const token = this.createAuthToken(user);
    res.status(201).json({ token });
  } catch (err) {
    if (err.name === 'MongoError')
      return res.status(422).json({ message: 'Username already taken' });
    next(err);
  }
};
