const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function projectValidator(data) {
  let errors = {};

  data.url = !isEmpty(data.url) ? data.url : '';
  data.code = !isEmpty(data.code) ? data.code : '';
  data.text = !isEmpty(data.text) ? data.text : '';
  data.title = !isEmpty(data.title) ? data.title : '';
  data.categories = !isEmpty(data.categories) ? data.categories : '';

  if (Validator.isEmpty(data.url)) {
    errors.message = 'Given link field is required';
  }

  if (!Validator.equals('Offline') && !Validator.isURL(data.url)) {
    errors.message = 'Given link must be a valid URL or Offline';
  }

  if (Validator.isEmpty(data.code)) {
    errors.message = 'Code field is required';
  }

  if (!Validator.isURL(data.code)) {
    errors.message = 'Given code must be a valid URL';
  }

  if (Validator.isEmpty(data.title)) {
    errors.message = 'Title field is required';
  }

  if (!Validator.isLength(data.title, { min: 3, max: 50 })) {
    errors.message = 'Project title must be between 3 and 50 characters';
  }

  if (Validator.isEmpty(data.text)) {
    errors.message = 'Project text field is required';
  }

  if (!Validator.isLength(data.text, { min: 10, max: undefined })) {
    errors.message = 'Project text must be at least 10 characters';
  }

  if (Validator.isEmpty(data.categories)) {
    errors.message = 'Project categories field is required';
  }

  if (!Validator.isLength(data.categories, { min: 8, max: undefined })) {
    errors.message = 'Project categories must be at least 8 characters';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
