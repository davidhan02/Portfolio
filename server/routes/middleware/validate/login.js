const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function loginValidator(data) {
  let errors = {};

  data.username = !isEmpty(data.username) ? data.username : '';
  data.password = !isEmpty(data.password) ? data.password : '';

  if (Validator.isEmpty(data.username)) {
    errors.message = 'Username field is required';
  }

  if (Validator.isEmpty(data.password)) {
    errors.message = 'Password field is required';
  }

  if (!Validator.isLength(data.password, { min: 6, max: 32 })) {
    errors.message = 'Password must be between 6 and 32 characters';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
