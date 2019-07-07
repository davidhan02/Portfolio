const Profile = require('../../models/profile');

// PROFILE ROUTE CONTROLLER

exports.load = async (req, res, next, profileId) => {
  try {
    req.profile = await Profile.findById(profileId);
    if (!req.profile) return res.status(404).json({ message: 'Profile not found' });
  } catch (err) {
    if (err.name === 'CastError') {
      return res.status(400).json({ message: 'Invalid resume ID' });
    }
    return next(err);
  }
  next();
};

exports.getOne = async (req, res) => {
  res.status(201).json(req.profile);
};

exports.getAll = async (req, res) => {
  const profiles = await Profile.find();
  if (profiles.length < 1) {
    return res.status(500).json({ message: 'No profiles found' });
  }
  res.json(profiles);
};

exports.post = async (req, res) => {
  try {
    const profile = await Profile.create({
      ...req.body,
      user: req.user.id,
      skills: req.body.skills
        .split(',')
        .map(x => x.trim())
        .filter(x => x !== '')
    });
    res.status(201).json(profile);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
};

exports.update = async (req, res) => {
  try {
    const skills = req.body.skills
      ? req.body.skills
          .split(',')
          .map(x => x.trim())
          .filter(x => x !== '')
      : req.profile.skills;
    const profileFields = { ...req.body, skills };
    const profile = await req.profile.update(profileFields);
    res.status(201).json(profile);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
};

exports.delete = async (req, res) => {
  try {
    await req.profile.remove();
    res.status(201).json({ message: 'Successfully deleted' });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
};
