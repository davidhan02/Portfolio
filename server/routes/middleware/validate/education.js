const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function eduValidator(data) {
  let errors = {};

  const required = ['school', 'degree', 'major', 'from', 'description'];

  required.forEach(field => {
    data[field] = !isEmpty(data[field]) ? data[field] : '';

    if (Validator.isEmpty(data[field])) {
      errors.message = `${field} entry is required`;
    }
  });

  if (!Validator.isLength(data.school, { min: 3, max: 50 })) {
    errors.message = 'School must be between 3 and 50 characters';
  }

  if (!Validator.isLength(data.degree, { min: 3, max: 50 })) {
    errors.message = 'Degree must be between 3 and 30 characters';
  }

  if (!Validator.isLength(data.major, { min: 3, max: 50 })) {
    errors.message = 'Major must be between 3 and 40 characters';
  }

  if (!Validator.isLength(data.description, { min: 3, max: 500 })) {
    errors.message = 'Description must be between 3 and 500 characters';
  }

  if (!Validator.toDate(data.from)) {
    errors.message = 'From date must be a date';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
