const validate = ({ password, password2 }) => {
  if (password !== password2) {
    return { password2: 'passwords must match' };
  }
};

export default validate;
