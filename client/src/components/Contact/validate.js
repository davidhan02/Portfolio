import {
  contactNameValidator,
  contactEmailValidator,
  projectTitleValidator,
  projectTextValidator
} from '../../util/validators';

const validate = fields => {
  const errors = {};
  const name = fields.name ? fields.name : '';
  const email = fields.email ? fields.email : '';
  const subject = fields.subject ? fields.subject : '';
  const body = fields.body ? fields.body : '';

  errors.name = contactNameValidator(name);
  errors.email = contactEmailValidator(email);
  errors.subject = projectTitleValidator(subject);
  errors.body = projectTextValidator(body);

  return errors;
};

export default validate;
