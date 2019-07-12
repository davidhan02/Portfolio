import {
  nameValidator,
  emailValidator,
  titleValidator,
  textValidator
} from '../../util/validators';

const validate = fields => {
  const errors = {};
  const name = fields.name ? fields.name : '';
  const email = fields.email ? fields.email : '';
  const subject = fields.subject ? fields.subject : '';
  const body = fields.body ? fields.body : '';

  errors.name = nameValidator(name);
  errors.email = emailValidator(email);
  errors.subject = titleValidator(subject);
  errors.body = textValidator(body);

  return errors;
};

export default validate;
