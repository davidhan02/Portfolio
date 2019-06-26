const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function messageValidator(data, method) {
  let errors = {};

  if (method === 'POST') {
    const required = ['name', 'email', 'subject', 'body'];

    required.forEach(field => {
      data[field] = !isEmpty(data[field]) ? data[field] : '';

      if (Validator.isEmpty(data[field])) {
        errors.message = `${field} is required`;
      }
    });
  }

  const { name, email, subject, body } = data;

  if (name && !Validator.isLength(name, { min: 3, max: 50 })) {
    errors.message = 'name must be between 3 and 50 characters';
  }

  if (subject && !Validator.isLength(subject, { min: 3, max: 50 })) {
    errors.message = 'subject must be between 3 and 50 characters';
  }

  if (body && !Validator.isLength(body, { min: 10, max: undefined })) {
    errors.message = 'body must be at least 10 characters';
  }

  if (email && !Validator.isEmail(email)) {
    errors.message = 'email must be a valid email';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
