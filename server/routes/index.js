const router = require('express').Router();
const auth = require('./middleware/auth');
const validate = require('./middleware/validate');
const user = require('./controllers/user');
const project = require('./controllers/project');
const profile = require('./controllers/profile');

router.post('/login', validate.login, user.login);
router.post('/register', validate.register, user.register);

router.get('/projects', project.listAll);
router.get('/projects/:category', project.listByCategory);
router.post('/projects', auth.jwt, validate.project, project.submit);

router.param('project', project.load);
router.get('/project/:project', project.showOne);
router.delete('/project/:project', auth.jwt, project.destroy);

router.get('/profile', profile.showFirst);
router.post('/profile', auth.jwt, profile.submit);

router.param('profile', profile.load);
router.get('/profile/:profile', profile.showOne);
router.delete('/profile/:profile', auth.jwt, profile.destroy);

router.post('/exp/:profile', auth.jwt, profile.addExp);
router.post('/edu/:profile', auth.jwt, profile.addEdu);
router.post('/social/:profile', auth.jwt, profile.setSocial);

router.delete('/exp/:profile/:expId', auth.jwt, profile.removeExp);
//router.delete('/edu/:profile', auth.jwt, profile.removeEdu);
//router.delete('/social/:profile', auth.jwt, profile.clearSocial);

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
