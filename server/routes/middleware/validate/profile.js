const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function profileValidator(data, method) {
  let errors = {};

  if (method === 'POST') {
    const required = ['name', 'birthday', 'status', 'skills'];

    required.forEach(field => {
      data[field] = !isEmpty(data[field]) ? data[field] : '';

      if (Validator.isEmpty(data[field])) {
        errors.message = `${field} is required`;
      }
    });
  }

  const { name, birthday, status, skills, company, location, bio } = data;

  if (name && !Validator.isLength(name, { min: 2, max: 30 })) {
    errors.message = 'name must be between 2 and 30 characters';
  }

  if (status && !Validator.isLength(status, { min: 2, max: 30 })) {
    errors.message = 'status must be between 2 and 30 characters';
  }

  if (location && !Validator.isLength(location, { min: 2, max: 50 })) {
    errors.message = 'location must be between 2 and 50 characters';
  }

  if (skills && !Validator.isLength(skills, { min: 5, max: undefined })) {
    errors.message = 'skills must be at least 5 characters';
  }

  if (company && !Validator.isLength(company, { min: 2, max: 30 })) {
    errors.message = 'company must be between 2 and 30 characters';
  }

  if (bio && !Validator.isLength(bio, { min: 15, max: undefined })) {
    errors.message = 'bio must be at least 15 characters';
  }

  if (birthday && !Validator.toDate(birthday)) {
    errors.message = 'birthday must be a date';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
