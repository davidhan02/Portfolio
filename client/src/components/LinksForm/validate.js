import { urlValidator } from '../../util/validators';

const validate = fields => {
  const errors = {};

  if (fields.github) errors.github = urlValidator(fields.github);
  if (fields.glitch) errors.glitch = urlValidator(fields.glitch);
  if (fields.linkedin) errors.linkedin = urlValidator(fields.linkedin);
  if (fields.instagram) errors.instagram = urlValidator(fields.instagram);
  if (fields.codepen) errors.codepen = urlValidator(fields.codepen);

  return errors;
};

export default validate;
