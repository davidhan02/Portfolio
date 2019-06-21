const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function loginValidator(data, method) {
  let errors = {};

  const required = ['username', 'password'];

  required.forEach(field => {
    data[field] = !isEmpty(data[field]) ? data[field] : '';

    if (Validator.isEmpty(data[field])) {
      errors.message = `${field} is required`;
    }
  });

  if (!Validator.isLength(data.username, { min: 2, max: 25 })) {
    errors.message = 'username must be between 2 and 25 characters';
  }

  if (!Validator.isLength(data.password, { min: 6, max: 32 })) {
    errors.message = 'password must be between 6 and 32 characters';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
