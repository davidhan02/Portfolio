const router = require('express').Router();
const users = require('./controllers/users');
const validate = require('./middleware/validate');
const auth = require('./middleware/auth');
const passport = require('passport');

router.post('/login', validate.login, users.login);
router.post('/register', validate.register, users.register);

router.get('/test/', auth.jwt, (req, res) => {
  return res.status(200).json({ message: 'successfully tested jwt' });
});

module.exports = app => {
  app.use('/api', router);

  app.get('*', (req, res) => {
    res.status(404).json({ message: 'not found' });
  });

  app.use((err, req, res, next) => {
    if (err.type === 'entity.parse.failed') {
      return res.status(400).json({ message: 'bad request' });
    }
    next(err);
  });
};
