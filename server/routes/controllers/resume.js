const Resume = require('../../models/resume');

exports.showFirst = async (req, res) => {
  try {
    const resumes = await Resume.find();
    res.json(resumes[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'No resumes found' });
  }
};

exports.submit = async (req, res, next) => {
  try {
    const resume = await Resume.create({
      ...req.body,
      user: req.user.id,
      skills: req.body.skills
        .split(',')
        .map(x => x.trim())
        .filter(x => x !== '')
    });
    res.status(201).json(resume);
  } catch (err) {
    next(err);
  }
};

exports.showOne = async (req, res) => {
  res.status(201).json(req.myresume);
};

exports.destroy = async (req, res) => {
  await req.myresume.remove();
  res.status(201).json({ message: 'Successfully deleted' });
};

exports.addExp = async (req, res, next) => {
  try {
    const resume = await req.myresume.addExp(req.body);
    res.status(201).json(resume);
  } catch (err) {
    next(err);
  }
};

exports.addEdu = async (req, res, next) => {
  try {
    const resume = await req.myresume.addEdu(req.body);
    res.status(201).json(resume);
  } catch (err) {
    next(err);
  }
};

exports.setSocial = async (req, res, next) => {
  try {
    const resume = await req.myresume.setSocial(req.body);
    res.status(201).json(resume);
  } catch (err) {
    next(err);
  }
};

exports.load = async (req, res, next, resumeId) => {
  try {
    req.myresume = await Resume.findById(resumeId);
    if (!req.myresume)
      return res.status(404).json({ message: 'Resume not found' });
  } catch (err) {
    if (err.name === 'CastError') {
      return res.status(400).json({ message: 'Invalid resume ID' });
    }
    return next(err);
  }
  next();
};
