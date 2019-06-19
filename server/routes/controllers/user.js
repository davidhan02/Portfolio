const User = require('../../models/user');
const keys = require('../../config/keys');
const passport = require('passport');
const jwt = require('jsonwebtoken');

exports.createAuthToken = user => {
  return jwt.sign({ user }, keys.jwtSecret, {
    expiresIn: '7d'
  });
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
    const { username, password } = req.body;
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(422).json({ message: 'Username already taken' });
    }
    const user = await User.create({ username, password });
    const token = this.createAuthToken(user);
    res.status(201).json({ token });
  } catch (err) {
    next(err);
  }
};
