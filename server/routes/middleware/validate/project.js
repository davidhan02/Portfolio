const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function project(data) {
  let errors = {};

  const required = ['url', 'code', 'text', 'title', 'categories'];

  required.forEach(field => {
    data[field] = !isEmpty(data[field]) ? data[field] : '';

    if (Validator.isEmpty(data[field])) {
      errors.message = `${field} entry is required`;
    }
  });

  if (!Validator.equals(data.url, 'Offline') && !Validator.isURL(data.url)) {
    errors.message = 'Given link must be a valid URL or Offline';
  }

  if (!Validator.isLength(data.title, { min: 3, max: 50 })) {
    errors.message = 'Project title must be between 3 and 50 characters';
  }

  if (!Validator.isLength(data.text, { min: 10, max: undefined })) {
    errors.message = 'Project text must be at least 10 characters';
  }

  if (!Validator.isLength(data.categories, { min: 8, max: undefined })) {
    errors.message = 'Project categories must be at least 8 characters';
  }

  if (!Validator.isURL(data.code)) {
    errors.message = 'Given code must be a valid URL';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
