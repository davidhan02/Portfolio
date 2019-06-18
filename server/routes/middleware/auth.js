const passport = require('passport');

exports.jwt = (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, user) => {
    if (err) return next(err);
    if (!user) return res.status(401).json({ message: 'You must log in' });
    req.user = user;
    next();
  })(req, res);
};
