const router = require('express').Router();
const auth = require('./middleware/auth');
const validate = require('./middleware/validate');
const user = require('./controllers/user');
const project = require('./controllers/project');
const resume = require('./controllers/resume');

router.post('/login', validate.login, user.login);
router.post('/register', validate.register, user.register);

router.get('/projects', project.listAll);
router.get('/projects/:category', project.listByCategory);
router.post('/projects', auth.jwt, validate.project, project.submit);

router.param('project', project.load);
router.get('/project/:project', project.showOne);
router.delete('/project/:project', auth.jwt, project.destroy);

router.get('/resume', resume.showFirst);
router.post('/resume', auth.jwt, resume.submit);

router.param('resume', resume.load);
router.get('/resume/:resume', resume.showOne);
router.delete('/resume/:resume', auth.jwt, resume.destroy);

router.post('/exp/:resume', auth.jwt, resume.addExp);
router.post('/edu/:resume', auth.jwt, resume.addEdu);
router.post('/social/:resume', auth.jwt, resume.setSocial);

//router.delete('/exp/:resume', auth.jwt, resume.removeExp);
//router.delete('/edu/:resume', auth.jwt, resume.removeEdu);
//router.delete('/social/:resume', auth.jwt, resume.clearSocial);

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
