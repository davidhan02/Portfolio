const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function eduValidator(data) {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : '';
  data.company = !isEmpty(data.company) ? data.company : '';
  data.location = !isEmpty(data.location) ? data.location : '';
  data.from = !isEmpty(data.from) ? data.from : '';
  data.description = !isEmpty(data.description) ? data.description : '';

  if (Validator.isEmpty(data.title)) {
    errors.message = 'Title field is required';
  }

  if (!Validator.isLength(data.title, { min: 3, max: 30 })) {
    errors.message = 'Title must be between 3 and 50 characters';
  }

  if (Validator.isEmpty(data.company)) {
    errors.message = 'Company field is required';
  }

  if (!Validator.isLength(data.company, { min: 3, max: 60 })) {
    errors.message = 'Company must be between 3 and 60 characters';
  }

  if (Validator.isEmpty(data.location)) {
    errors.message = 'Location field is required';
  }

  if (!Validator.isLength(data.location, { min: 3, max: 50 })) {
    errors.message = 'Location must be between 3 and 50 characters';
  }

  if (Validator.isEmpty(data.from)) {
    errors.message = 'From date field is required';
  }

  if (Validator.toDate(data.from)) {
    errors.message = 'From date must be a date';
  }

  if (Validator.isEmpty(data.description)) {
    errors.message = 'Description field is required';
  }

  if (!Validator.isLength(data.description, { min: 3, max: 500 })) {
    errors.message = 'Description must be between 3 and 500 characters';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
