const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function eduValidator(data, method) {
  let errors = {};

  if (method === 'POST') {
    const required = ['title', 'from', 'issued', 'url'];

    required.forEach(field => {
      data[field] = !isEmpty(data[field]) ? data[field] : '';

      if (Validator.isEmpty(data[field])) {
        errors.message = `${field} is required`;
      }
    });
  }

  const { title, from, issued, url } = data;

  if (title && !Validator.isLength(data.title, { min: 3, max: 50 })) {
    errors.message = 'title must be between 3 and 50 characters';
  }

  if (from && !Validator.isLength(data.from, { min: 3, max: 50 })) {
    errors.message = 'from must be between 3 and 50 characters';
  }

  if (issued && !Validator.toDate(issued)) {
    errors.message = 'issued must be a date';
  }

  if (url && !Validator.isURL(url)) {
    errors.message = 'url must be a valid URL';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
