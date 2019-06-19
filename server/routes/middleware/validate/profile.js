const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function profileValidator(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : '';
  data.birthday = !isEmpty(data.birthday) ? data.birthday : '';
  data.status = !isEmpty(data.status) ? data.status : '';
  data.skills = !isEmpty(data.skills) ? data.skills : '';
  data.location = !isEmpty(data.location) ? data.location : '';
  data.bio = !isEmpty(data.bio) ? data.bio : '';

  if (Validator.isEmpty(data.name)) {
    errors.message = 'Name field is required';
  }

  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.message = 'Name must be between 2 and 30 characters';
  }

  if (Validator.isEmpty(data.birthday)) {
    errors.message = 'Birthday field is required';
  }

  if (!Validator.toDate(data.birthday)) {
    errors.message = 'Birthday field must be a date';
  }

  if (Validator.isEmpty(data.status)) {
    errors.message = 'Status field is required';
  }

  if (!Validator.isLength(data.status, { min: 2, max: 30 })) {
    errors.message = 'Status field must be between 2 and 30 characters';
  }

  if (Validator.isEmpty(data.skills)) {
    errors.message = 'Skills field is required';
  }

  if (!Validator.isLength(data.skills, { min: 5, max: undefined })) {
    errors.message = 'Skills field must be at least 5 characters';
  }

  if (Validator.isEmpty(data.location)) {
    errors.message = 'Location field is required';
  }

  if (!Validator.isLength(data.location, { min: 2, max: 50 })) {
    errors.message = 'Location field must be between 2 and 50 characters';
  }

  if (Validator.isEmpty(data.bio)) {
    errors.message = 'Bio field is required';
  }

  if (!Validator.isLength(data.bio, { min: 15, max: undefined })) {
    errors.message = 'Bio field must be at least 15 characters';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
