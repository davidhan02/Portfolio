const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const passport = require('passport');
const keys = require('./config/keys');
const localStrategy = require('./passport/local');
const jwtStrategy = require('./passport/jwt');

const app = express();

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
});

require('./models/user');
require('./models/profile');
require('./models/project');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('common'));
}

passport.use(localStrategy);
passport.use(jwtStrategy);

require('./routes')(app);

app.listen(process.env.PORT || 5000);

module.exports = app;
