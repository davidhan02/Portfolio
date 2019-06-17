const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const keys = require('../config/keys');

const jwtStrategy = new JwtStrategy(
  {
    secretOrKey: keys.jwtSecret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
  },
  (token, done) => done(null, token.user)
);

module.exports = jwtStrategy;
