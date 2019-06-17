const router = require('express').Router();
const users = require('./controllers/users');
const validate = require('./middleware/validate');

router.post('/login', validate.login, users.login);
router.post('/register', validate.register, users.register);

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
