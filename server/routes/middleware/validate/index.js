const loginValidator = require('./login');
const registerValidator = require('./register');
const projectValidator = require('./project');
const profileValidator = require('./profile');
const eduValidator = require('./education');
const expValidator = require('./experience');
const socialValidator = require('./social');

const forms = [
  'login',
  'register',
  'project',
  'profile',
  'edu',
  'exp',
  'social'
];

forms.forEach(form => {
  exports[form] = (req, res, next) => {
    const { errors, isValid } = eval(`${form}Validator(req.body)`);
    if (!isValid) {
      return res.status(400).json(errors);
    }
    return next();
  };
});
