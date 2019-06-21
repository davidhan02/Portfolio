const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function socialValidator(data) {
  let errors = {};

  const socials = ['linkedin', 'instagram', 'github', 'glitch', 'codepen'];

  socials.forEach(field => {
    data[field] = !isEmpty(data[field]) ? data[field] : '';

    if (
      !Validator.isEmpty(data[field]) &&
      (!Validator.contains(data[field], `${field}`) || !Validator.isURL(data[field]))
    ) {
      errors.message = `${field} must be a valid ${field} URL`;
    }

    if (Validator.isEmpty(data[field])) {
      delete data[field];
    }
  });

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
