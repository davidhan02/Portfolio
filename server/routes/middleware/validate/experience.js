const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function eduValidator(data) {
  let errors = {};

  const required = ['title', 'company', 'location', 'from', 'description'];

  required.forEach(field => {
    data[field] = !isEmpty(data[field]) ? data[field] : '';

    if (Validator.isEmpty(data[field])) {
      errors.message = `${field} is required`;
    }
  });

  if (!Validator.isLength(data.title, { min: 3, max: 30 })) {
    errors.message = 'title must be between 3 and 50 characters';
  }

  if (!Validator.isLength(data.company, { min: 3, max: 60 })) {
    errors.message = 'company must be between 3 and 60 characters';
  }

  if (!Validator.isLength(data.location, { min: 3, max: 50 })) {
    errors.message = 'location must be between 3 and 50 characters';
  }

  if (!Validator.isLength(data.description, { min: 3, max: 500 })) {
    errors.message = 'description must be between 3 and 500 characters';
  }

  if (!Validator.toDate(data.from)) {
    errors.message = 'from date must be a date';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
