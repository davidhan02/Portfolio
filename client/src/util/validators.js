import moment from 'moment';

export const checkIfTrimmed = value =>
  value.trim() === value ? undefined : 'Cannot start/end with space';

export const checkMaxLength = (value, len) =>
  value && value.length <= len ? undefined : `Less than ${len} characters`;

export const checkMinLength = (value, len) =>
  value && value.length >= len ? undefined : `More than ${len} characters`;

export const isEmpty = value =>
  value === undefined ||
  value === null ||
  (typeof value === 'object' && Object.keys(value).length === 0) ||
  (typeof value === 'string' && value.trim().length === 0);

export const urlValidator = value => {
  try {
    new URL(value);
    return undefined;
  } catch (error) {
    return 'Must be a valid url';
  }
};

export const dateValidator = value => {
  if (moment(value, 'MM/DD/YYYY', true).isValid()) return undefined;
  return 'Must be a valid date';
};

const trimmed = value => checkIfTrimmed(value);
const max = len => value => checkMaxLength(value, len);
const min = len => value => checkMinLength(value, len);

export const required = value => (value ? undefined : 'Required');

export const usernameValidator = [required, min(2), max(25), trimmed];

export const passwordValidator = [required, min(6), max(32), trimmed];

export const projectTitleValidator = value =>
  required(value) || checkMinLength(value, 3) || checkMaxLength(value, 50);

export const projectTextValidator = value =>
  required(value) || checkMinLength(value, 10);

export const projectCatValidator = value =>
  required(value) || checkMinLength(value, 8);
