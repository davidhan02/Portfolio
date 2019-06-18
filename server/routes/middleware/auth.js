const passport = require('passport');
const User = require('../../models/user');

exports.jwt = (req, res, next) => {
  passport.authenticate('jwt', { session: false }, async (err, user) => {
    if (err) return next(err);
    const found = await User.findById(user.id);
    if (!user || !found) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    req.user = found;
    next();
  })(req, res);
};
