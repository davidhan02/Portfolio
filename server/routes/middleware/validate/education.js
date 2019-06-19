const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function eduValidator(data) {
  let errors = {};

  data.school = !isEmpty(data.school) ? data.school : '';
  data.degree = !isEmpty(data.degree) ? data.degree : '';
  data.major = !isEmpty(data.major) ? data.major : '';
  data.from = !isEmpty(data.from) ? data.from : '';
  data.description = !isEmpty(data.description) ? data.description : '';

  if (Validator.isEmpty(data.school)) {
    errors.message = 'School field is required';
  }

  if (!Validator.isLength(data.school, { min: 3, max: 50 })) {
    errors.message = 'School must be between 3 and 50 characters';
  }

  if (Validator.isEmpty(data.degree)) {
    errors.message = 'Degree field is required';
  }

  if (!Validator.isLength(data.degree, { min: 3, max: 50 })) {
    errors.message = 'Degree must be between 3 and 30 characters';
  }

  if (Validator.isEmpty(data.major)) {
    errors.message = 'Major field is required';
  }

  if (!Validator.isLength(data.major, { min: 3, max: 50 })) {
    errors.message = 'Major must be between 3 and 40 characters';
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
