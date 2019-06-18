const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function projectValidator(data) {
  let errors = {};

  data.url = !isEmpty(data.url) ? data.url : '';
  data.github = !isEmpty(data.github) ? data.github : '';
  data.text = !isEmpty(data.text) ? data.text : '';
  data.title = !isEmpty(data.title) ? data.title : '';

  if (!Validator.isEmpty(data.url) && !Validator.isURL(data.url)) {
    errors.message = 'Given link must be a valid URL';
  }

  if (!Validator.isEmpty(data.github) && !Validator.isURL(data.github)) {
    errors.message = 'Given github must be a valid URL';
  }

  if (Validator.isEmpty(data.title)) {
    errors.message = 'Title field is required';
  }

  if (!Validator.isLength(data.title, { min: 3, max: 100 })) {
    errors.message = 'Project title must be between 3 and 100 characters';
  }

  if (Validator.isEmpty(data.text)) {
    errors.message = 'Project text field is required';
  }

  if (!Validator.isLength(data.text, { min: 3, max: 1500 })) {
    errors.message = 'Project text must be between 3 and 1500 characters';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
