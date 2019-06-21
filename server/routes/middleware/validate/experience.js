const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function eduValidator(data, method) {
  let errors = {};

  if (method === 'POST') {
    const required = ['title', 'company', 'location', 'from', 'description'];

    required.forEach(field => {
      data[field] = !isEmpty(data[field]) ? data[field] : '';

      if (Validator.isEmpty(data[field])) {
        errors.message = `${field} is required`;
      }
    });
  }

  const { title, company, location, from, to, current, description } = data;

  if (title && !Validator.isLength(title, { min: 3, max: 30 })) {
    errors.message = 'title must be between 3 and 30 characters';
  }

  if (company && !Validator.isLength(company, { min: 3, max: 60 })) {
    errors.message = 'company must be between 3 and 60 characters';
  }

  if (location && !Validator.isLength(location, { min: 3, max: 50 })) {
    errors.message = 'location must be between 3 and 50 characters';
  }

  if (description && !Validator.isLength(description, { min: 3, max: 500 })) {
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
