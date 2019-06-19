const Validator = require('validator');
const User = require('../../../models/user');
const isEmpty = require('./isEmpty');

module.exports = function registerValidator(data) {
  let errors = {};

  data.username = !isEmpty(data.username) ? data.username : '';
  data.password = !isEmpty(data.password) ? data.password : '';
  data.password2 = !isEmpty(data.password2) ? data.password2 : '';

  const found = User.find({ username: data.username });
  if (found) {
    errors.message = 'Username is already taken';
  }

  if (Validator.isEmpty(data.username)) {
    errors.message = 'Username field is required';
  }

  if (!Validator.isLength(data.username, { min: 2, max: 25 })) {
    errors.message = 'Username must be between 2 and 25 characters';
  }

  if (Validator.isEmpty(data.password)) {
    errors.message = 'Password field is required';
  }

  if (!Validator.isLength(data.password, { min: 6, max: 32 })) {
    errors.message = 'Password must be between 6 and 32 characters';
  }

  if (Validator.isEmpty(data.password2)) {
    errors.message = 'Matching password field is required';
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.message = 'Password fields must match';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
