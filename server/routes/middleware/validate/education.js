const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function eduValidator(data, method) {
  let errors = {};

  if (method === 'POST') {
    const required = ['school', 'degree', 'major', 'from', 'description'];

    required.forEach(field => {
      data[field] = !isEmpty(data[field]) ? data[field] : '';

      if (Validator.isEmpty(data[field])) {
        errors.message = `${field} is required`;
      }
    });
  }

  const { school, degree, major, from, to, current, description } = data;

  if (school && !Validator.isLength(data.school, { min: 3, max: 50 })) {
    errors.message = 'school must be between 3 and 50 characters';
  }

  if (degree && !Validator.isLength(data.degree, { min: 3, max: 50 })) {
    errors.message = 'degree must be between 3 and 50 characters';
  }

  if (major && !Validator.isLength(data.major, { min: 3, max: 50 })) {
    errors.message = 'major must be between 3 and 40 characters';
  }

  if (description && !Validator.isLength(data.description, { min: 3, max: 500 })) {
    errors.message = 'description must be between 3 and 500 characters';
  }

  if (current && !Validator.isBoolean(current)) {
    errors.message = 'current must be true or false';
  }

  if (from && !Validator.toDate(from)) {
    errors.message = 'from date must be a date';
  }

  if (to && !Validator.toDate(to)) {
    errors.message = 'to date must be a date';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
