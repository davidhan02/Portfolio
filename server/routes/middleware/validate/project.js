const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function projectValidator(data, method) {
  let errors = {};

  if (method === 'POST') {
    const required = ['text', 'title', 'categories', 'created'];

    required.forEach(field => {
      data[field] = !isEmpty(data[field]) ? data[field] : '';

      if (Validator.isEmpty(data[field])) {
        errors.message = `${field} is required`;
      }
    });
  }

  const { title, url, code, categories, text, created } = data;

  if (url && !Validator.equals(url, 'offline') && !Validator.isURL(url)) {
    errors.message = 'link must be a valid URL or "offline"';
  }

  if (title && !Validator.isLength(title, { min: 3, max: 50 })) {
    errors.message = 'title must be between 3 and 50 characters';
  }

  if (text && !Validator.isLength(text, { min: 10, max: undefined })) {
    errors.message = 'text must be at least 10 characters';
  }

  if (categories && !Validator.isLength(categories, { min: 8, max: undefined })) {
    errors.message = 'categories must be at least 8 characters';
  }

  if (created && !Validator.toDate(created)) {
    errors.message = 'created must be a date';
  }

  if (code && !Validator.isURL(code)) {
    errors.message = 'code must be a valid URL';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
