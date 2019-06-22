import {
  urlValidator,
  dateValidator,
  projectCatValidator,
  projectTextValidator,
  projectTitleValidator
} from '../../util/validators';

const validate = fields => {
  const errors = {};
  const title = fields.title ? fields.title : '';
  const categories = fields.categories ? fields.categories : '';
  const text = fields.text ? fields.text : '';

  errors.text = projectTextValidator(text);
  errors.title = projectTitleValidator(title);
  errors.categories = projectCatValidator(categories);
  if (fields.url && fields.url !== 'offline') errors.url = urlValidator(fields.url);
  if (fields.created) errors.created = dateValidator(fields.created);
  if (fields.code) errors.code = urlValidator(fields.code);

  return errors;
};

export default validate;
