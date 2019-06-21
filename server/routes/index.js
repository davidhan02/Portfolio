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
router.post('/project', auth.jwt, valid.project, project.post);

router.param('project', project.load);
router.get('/project/:project', project.getOne);
router.patch('/project/:project', auth.jwt, valid.project, project.update);
router.delete('/project/:project', auth.jwt, project.delete);

router.get('/project/cat/:category', project.getByCategory);

router.get('/profile', profile.getAll);
router.post('/profile', auth.jwt, valid.profile, profile.post);

router.param('profile', profile.load);
router.get('/profile/:profile', profile.getOne);
router.patch('/profile/:profile', auth.jwt, valid.profile, profile.update);
router.delete('/profile/:profile', auth.jwt, profile.delete);

router.get('/profile/:profile/exp', profile.getAllExp);
router.post('/profile/:profile/exp', auth.jwt, valid.exp, profile.postExp);

router.get('/profile/:profile/exp/:exp', profile.getOneExp);
router.patch('/profile/:profile/exp/:exp', auth.jwt, valid.exp, profile.updateExp);
router.delete('/profile/:profile/exp/:exp', auth.jwt, profile.deleteExp);

router.get('/profile/:profile/edu', profile.getAllEdu);
router.post('/profile/:profile/edu', auth.jwt, valid.edu, profile.postEdu);

router.get('/profile/:profile/edu/:edu', profile.getOneEdu);
router.patch('/profile/:profile/edu/:edu', auth.jwt, valid.edu, profile.updateEdu);
router.delete('/profile/:profile/edu/:edu', auth.jwt, profile.deleteEdu);

router.get('/profile/:profile/social', profile.getSocial);
router.post('/profile/:profile/social', auth.jwt, valid.social, profile.postSocial);
router.patch('/profile/:profile/social', auth.jwt, valid.social, profile.editSocial);
router.delete('/profile/:profile/social', auth.jwt, profile.deleteSocial);

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
