const passport = require('passport');
const User = require('../models/user');
const localStrategy = require('./local');
const jwtStrategy = require('./jwt');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(localStrategy);
passport.use(jwtStrategy);
