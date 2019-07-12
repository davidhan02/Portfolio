import {
  urlValidator,
  categoriesValidator,
  textValidator,
  titleValidator
} from '../../util/validators';

const validate = fields => {
  const errors = {};
  const title = fields.title ? fields.title : '';
  const categories = fields.categories ? fields.categories : '';
  const text = fields.text ? fields.text : '';

  errors.text = textValidator(text);
  errors.title = titleValidator(title);
  errors.categories = categoriesValidator(categories);
  if (fields.url && fields.url !== 'offline') errors.url = urlValidator(fields.url);
  if (fields.code) errors.code = urlValidator(fields.code);

  return errors;
};

export default validate;
