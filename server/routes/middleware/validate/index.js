const loginValidator = require('./login');
const registerValidator = require('./register');
const projectValidator = require('./project');
const profileValidator = require('./profile');
const eduValidator = require('./education');
const expValidator = require('./experience');
const socialValidator = require('./social');
const messageValidator = require('./message');

const forms = [
  'login',
  'register',
  'project',
  'profile',
  'edu',
  'exp',
  'social',
  'message'
];

forms.forEach(form => {
  exports[form] = (req, res, next) => {
    const { errors, isValid } = eval(`${form}Validator(req.body, req.method)`);
    if (!isValid) {
      return res.status(422).json(errors);
    }
    return next();
  };
});
