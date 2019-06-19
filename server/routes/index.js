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
router.put('/project/:project', auth.jwt, validate.project, project.update);
router.delete('/project/:project', auth.jwt, project.destroy);

router.get('/profiles', profile.listAll);
router.post('/profiles', auth.jwt, validate.profile, profile.submit);

router.param('profile', profile.load);
router.get('/profile/:profile', profile.showOne);
router.put('/profile/:profile', auth.jwt, validate.profile, profile.update);
router.delete('/profile/:profile', auth.jwt, profile.destroy);

router.post('/exp/:profile', auth.jwt, validate.exp, profile.addExp);
router.delete('/exp/:profile/:expId', auth.jwt, profile.removeExp);

router.post('/edu/:profile', auth.jwt, validate.edu, profile.addEdu);
router.delete('/edu/:profile/:eduId', auth.jwt, profile.removeEdu);

router.post('/social/:profile', auth.jwt, validate.social, profile.setSocial);
router.delete('/social/:profile', auth.jwt, profile.clearSocial);

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
