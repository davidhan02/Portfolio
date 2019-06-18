const loginValidator = require('./login');
const registerValidator = require('./register');
const projectValidator = require('./project');
const profileValidator = require('./profile');
const eduValidator = require('./education');
const expValidator = require('./experience');
const socialValidator = require('./social');

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

exports.profile = (req, res, next) => {
  const { errors, isValid } = profileValidator(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  return next();
};

exports.edu = (req, res, next) => {
  const { errors, isValid } = eduValidator(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  return next();
};

exports.exp = (req, res, next) => {
  const { errors, isValid } = expValidator(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  return next();
};

exports.social = (req, res, next) => {
  const { errors, isValid } = socialValidator(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  return next();
};

// exports[variable] = (req, res, next) => {
//   const { errors, isValid } = `${variable}Validator`(req.body);
//   if (!isValid) {
//     return res.status(400).json(errors);
//   }
//   return next();
// }
