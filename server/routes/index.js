const router = require('express').Router();

if (process.env.NODE_ENV === 'production') {
  router.get('/return', (req, res) => {
    res.json({ message: 'deployed' });
  });
}

router.get('/return', (req, res) => {
  res.json({ message: 'testing' });
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
