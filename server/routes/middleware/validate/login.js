const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function loginValidator(data) {
  let errors = {};

  const required = ['username', 'password'];

  required.forEach(field => {
    data[field] = !isEmpty(data[field]) ? data[field] : '';

    if (Validator.isEmpty(data[field])) {
      errors.message = `${field} entry is required`;
    }
  });

  if (!Validator.isLength(data.password, { min: 6, max: 32 })) {
    errors.message = 'Password must be between 6 and 32 characters';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
