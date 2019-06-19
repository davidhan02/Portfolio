const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function project(data) {
  let errors = {};

  const required = ['url', 'code', 'text', 'title', 'categories'];

  required.forEach(field => {
    data[field] = !isEmpty(data[field]) ? data[field] : '';

    if (Validator.isEmpty(data[field])) {
      errors.message = `${field} is required`;
    }
  });

  if (!Validator.equals(data.url, 'offline') && !Validator.isURL(data.url)) {
    errors.message = 'link must be a valid URL or "offline"';
  }

  if (!Validator.isLength(data.title, { min: 3, max: 50 })) {
    errors.message = 'title must be between 3 and 50 characters';
  }

  if (!Validator.isLength(data.text, { min: 10, max: undefined })) {
    errors.message = 'text must be at least 10 characters';
  }

  if (!Validator.isLength(data.categories, { min: 8, max: undefined })) {
    errors.message = 'categories must be at least 8 characters';
  }

  if (!Validator.isURL(data.code)) {
    errors.message = 'code must be a valid URL';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
