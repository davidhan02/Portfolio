const keys = require('./keys');

exports.user = {
  username: 'johndoe',
  password: 'password',
  password2: 'password',
  adminKey: keys.adminKey
};

exports.project = {
  title: 'Test Project Title',
  url: 'https://www.google.com',
  code: 'https://www.github.com',
  categories: 'HTML, CSS, JavaScript',
  text: 'A short test description here',
  created: '6/19/2019'
};
