const loginValidator = require('./login');
const registerValidator = require('./register');
const projectValidator = require('./project');

exports.login = (req, res, next) => {
  const { errors, isValid } = loginValidator(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  return next();
};

exports.register = (req, res, next) => {
  const { errors, isValid } = registerValidator(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  return next();
};

exports.project = (req, res, next) => {
  const { errors, isValid } = projectValidator(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  return next();
};
