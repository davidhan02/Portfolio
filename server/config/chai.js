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
  text: 'A test project description',
  created: '6/19/2019'
};

exports.profile = {
  name: 'John Doe',
  birthday: '01/01/1990',
  status: 'Developer',
  skills: 'HTML, CSS, JavaScript',
  company: 'Google',
  location: 'Mountain View, CA',
  bio: 'A short test biography here'
};

exports.education = {
  school: 'San Jose State University',
  degree: 'Bachelors',
  major: 'Communications',
  from: '01/01/2012',
  to: '01/01/2016',
  description: 'A test education description'
};

exports.experience = {
  title: 'Developer',
  company: 'Google',
  location: 'Mountain View, CA',
  from: '01/01/2019',
  current: true,
  description: 'A test experience description'
};

exports.social = {
  linkedin: 'https://linkedin.com/in/davidhan02',
  instagram: 'https://instagram.com/littlehansolo',
  github: 'https://github.com/davidhan02',
  glitch: 'https://glitch.com/@davidhan02',
  codepen: 'https://codepen.io/davidhan02'
};
