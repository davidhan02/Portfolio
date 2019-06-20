const router = require('express').Router();
const auth = require('./middleware/auth');
const valid = require('./middleware/validate');
const user = require('./controllers/user');
const project = require('./controllers/project');
const profile = require('./controllers/profile');

router.post('/login', valid.login, user.login);
router.post('/register', valid.register, user.register);
router.delete('/user/:userId', auth.jwt, user.destroy);

router.get('/project', project.getAll);
router.get('/project/cat/:category', project.getByCategory);
router.post('/project', auth.jwt, valid.project, project.post);

router.param('project', project.load);
router.get('/project/:project', project.getOne);
router.put('/project/:project', auth.jwt, valid.project, project.update);
router.delete('/project/:project', auth.jwt, project.delete);

router.get('/profile', profile.getAll);
router.post('/profile', auth.jwt, valid.profile, profile.post);

router.param('profile', profile.load);
router.get('/profile/:profile', profile.getOne);
router.put('/profile/:profile', auth.jwt, valid.profile, profile.update);
router.delete('/profile/:profile', auth.jwt, profile.delete);

router.post('/exp/:profile', auth.jwt, valid.exp, profile.postExp);
router.put('/exp/:profile/:expId', auth.jwt, valid.exp, profile.updateExp);
router.delete('/exp/:profile/:expId', auth.jwt, profile.deleteExp);

router.post('/edu/:profile', auth.jwt, valid.edu, profile.postEdu);
router.put('/edu/:profile/:eduId', auth.jwt, valid.edu, profile.updateEdu);
router.delete('/edu/:profile/:eduId', auth.jwt, profile.deleteEdu);

router.post('/social/:profile', auth.jwt, valid.social, profile.postSocial);
router.delete('/social/:profile', auth.jwt, profile.deleteSocial);

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
