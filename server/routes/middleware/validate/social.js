const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function socialValidator(data) {
  let errors = {};

  data.linkedin = !isEmpty(data.linkedin) ? data.linkedin : '';
  data.instagram = !isEmpty(data.instagram) ? data.instagram : '';
  data.github = !isEmpty(data.github) ? data.github : '';
  data.glitch = !isEmpty(data.glitch) ? data.glitch : '';
  data.codepen = !isEmpty(data.codepen) ? data.codepen : '';

  if (
    !Validator.isEmpty(data.linkedin) &&
    !Validator.contains(data.linkedin, 'linkedin')
  ) {
    errors.message = 'Given linkedin must be a valid linkedin URL';
  }

  if (!Validator.isEmpty(data.linkedin) && !Validator.isURL(data.linkedin)) {
    errors.message = 'Given linkedin must be a valid linkedin URL';
  }

  if (
    !Validator.isEmpty(data.instagram) &&
    !Validator.contains(data.instagram, 'instagram')
  ) {
    errors.message = 'Given instagram must be a valid instagram URL';
  }

  if (!Validator.isEmpty(data.instagram) && !Validator.isURL(data.instagram)) {
    errors.message = 'Given instagram must be a valid instagram URL';
  }

  if (
    !Validator.isEmpty(data.github) &&
    !Validator.contains(data.github, 'github')
  ) {
    errors.message = 'Given github must be a valid github URL';
  }

  if (!Validator.isEmpty(data.github) && !Validator.isURL(data.github)) {
    errors.message = 'Given github must be a valid github URL';
  }

  if (
    !Validator.isEmpty(data.glitch) &&
    !Validator.contains(data.glitch, 'glitch')
  ) {
    errors.message = 'Given glitch must be a valid glitch URL';
  }

  if (!Validator.isEmpty(data.glitch) && !Validator.isURL(data.glitch)) {
    errors.message = 'Given glitch must be a valid glitch URL';
  }

  if (
    !Validator.isEmpty(data.codepen) &&
    !Validator.contains(data.codepen, 'codepen')
  ) {
    errors.message = 'Given codepen must be a valid codepen URL';
  }

  if (!Validator.isEmpty(data.codepen) && !Validator.isURL(data.codepen)) {
    errors.message = 'Given codepen must be a valid codepen URL';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
