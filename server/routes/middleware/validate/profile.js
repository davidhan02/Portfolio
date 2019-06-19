const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function profileValidator(data) {
  let errors = {};

  const required = ['name', 'birthday', 'status', 'skills', 'location', 'bio'];

  required.forEach(field => {
    data[field] = !isEmpty(data[field]) ? data[field] : '';

    if (Validator.isEmpty(data[field])) {
      errors.message = `${field} entry is required`;
    }
  });

  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.message = 'name must be between 2 and 30 characters';
  }

  if (!Validator.isLength(data.status, { min: 2, max: 30 })) {
    errors.message = 'status field must be between 2 and 30 characters';
  }

  if (!Validator.isLength(data.location, { min: 2, max: 50 })) {
    errors.message = 'location field must be between 2 and 50 characters';
  }

  if (!Validator.isLength(data.skills, { min: 5, max: undefined })) {
    errors.message = 'skills field must be at least 5 characters';
  }

  if (!Validator.isLength(data.bio, { min: 15, max: undefined })) {
    errors.message = 'bio field must be at least 15 characters';
  }

  if (!Validator.toDate(data.birthday)) {
    errors.message = 'birthday field must be a date';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
