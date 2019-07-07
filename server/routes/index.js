const router = require('express').Router();
const auth = require('./middleware/auth');
const valid = require('./middleware/validate');
const user = require('./controllers/user');
const message = require('./controllers/message');
const project = require('./controllers/project');
const profile = require('./controllers/profile');
const edu = require('./controllers/education');
const exp = require('./controllers/experience');
const cert = require('./controllers/certificates');
const social = require('./controllers/social');

// USER ROUTES

router.post('/login', valid.login, user.login);
router.post('/register', valid.register, user.register);
router.delete('/user/:userId', auth.jwt, user.destroy);

// MESSAGE ROUTES

router.get('/message', message.getAll);
router.post('/message', valid.message, message.post);

router.param('message', message.load);
router.get('/message/:message', auth.jwt, message.getOne);
router.delete('/message/:message', auth.jwt, message.delete);

// PROJECT ROUTES

router.get('/project', project.getAll);
router.post('/project', auth.jwt, valid.project, project.post);

router.param('project', project.load);
router.get('/project/:project', project.getOne);
router.patch('/project/:project', auth.jwt, valid.project, project.update);
router.delete('/project/:project', auth.jwt, project.delete);

router.get('/project/cat/:category', project.getByCategory);

// PROFILE ROUTES

router.get('/profile', profile.getAll);
router.post('/profile', auth.jwt, valid.profile, profile.post);

router.param('profile', profile.load);
router.get('/profile/:profile', profile.getOne);
router.patch('/profile/:profile', auth.jwt, valid.profile, profile.update);
router.delete('/profile/:profile', auth.jwt, profile.delete);

// EDUCATION ROUTES

router.get('/profile/:profile/edu', edu.getAll);
router.post('/profile/:profile/edu', auth.jwt, valid.edu, edu.post);

router.get('/profile/:profile/edu/:edu', edu.getOne);
router.patch('/profile/:profile/edu/:edu', auth.jwt, valid.edu, edu.update);
router.delete('/profile/:profile/edu/:edu', auth.jwt, edu.delete);

// EXPERIENCE ROUTES

router.get('/profile/:profile/exp', exp.getAll);
router.post('/profile/:profile/exp', auth.jwt, valid.exp, exp.post);

router.get('/profile/:profile/exp/:exp', exp.getOne);
router.patch('/profile/:profile/exp/:exp', auth.jwt, valid.exp, exp.update);
router.delete('/profile/:profile/exp/:exp', auth.jwt, exp.delete);

// CERTIFICATE ROUTES

router.get('/profile/:profile/cert', cert.getAll);
router.post('/profile/:profile/cert', auth.jwt, cert.post);

router.get('/profile/:profile/cert/:cert', cert.getOne);
router.patch('/profile/:profile/cert/:cert', auth.jwt, cert.update);
router.delete('/profile/:profile/cert/:cert', auth.jwt, cert.delete);

// SOCIAL ROUTES

router.get('/profile/:profile/social', social.get);
router.post('/profile/:profile/social', auth.jwt, valid.social, social.post);
router.patch('/profile/:profile/social', auth.jwt, valid.social, social.update);
router.delete('/profile/:profile/social', auth.jwt, social.delete);

// EXPORT

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
