const Profile = require('../../models/profile');

exports.getAll = async (req, res) => {
  await Profile.updateMany(
    {},
    {
      $push: {
        education: {
          $each: [],
          $sort: { from: -1 }
        }
      }
    }
  );
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

exports.getOne = async (req, res) => {
  res.status(201).json(req.profile);
};

exports.delete = async (req, res) => {
  try {
    await req.profile.remove();
    res.status(201).json({ message: 'Successfully deleted' });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
};

exports.getOneEdu = async (req, res) => {
  const edu = await req.profile.education.id(req.params.edu);
  if (!edu) {
    return res.status(500).json({ message: 'No education matches that ID' });
  }
  res.status(201).json(edu);
};

exports.getAllEdu = async (req, res) => {
  if (req.profile.education.length < 1) {
    return res.status(500).json({ message: 'No education found' });
  }
  res.status(201).json(req.profile.education);
};

exports.postEdu = async (req, res) => {
  try {
    const profile = await req.profile.postEdu(req.body);
    res.status(201).json(profile);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
};

exports.updateEdu = async (req, res) => {
  try {
    const { edu } = req.params;
    const profile = await req.profile.updateEdu(edu, req.body);
    res.status(201).json(profile);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
};

exports.deleteEdu = async (req, res) => {
  try {
    const profile = await req.profile.deleteEdu(req.params.edu);
    res.status(201).json(profile);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
};

exports.getOneExp = async (req, res) => {
  const exp = await req.profile.experience.id(req.params.exp);
  if (!exp) {
    return res.status(500).json({ message: 'No experience matches that ID' });
  }
  res.status(201).json(exp);
};

exports.getAllExp = async (req, res) => {
  if (req.profile.experience.length < 1) {
    return res.status(500).json({ message: 'No experience found' });
  }
  res.status(201).json(req.profile.experience);
};

exports.postExp = async (req, res) => {
  try {
    const profile = await req.profile.postExp(req.body);
    res.status(201).json(profile);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
};

exports.updateExp = async (req, res) => {
  try {
    const { exp } = req.params;
    const profile = await req.profile.updateExp(exp, req.body);
    res.status(201).json(profile);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
};

exports.deleteExp = async (req, res) => {
  try {
    const profile = await req.profile.deleteExp(req.params.exp);
    res.status(201).json(profile);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
};

exports.getSocial = async (req, res) => {
  const social = req.profile.social;
  if (
    !social ||
    (!social.linkedin &&
      !social.github &&
      !social.instagram &&
      !social.glitch &&
      !social.codepen)
  ) {
    return res.status(500).json({ message: 'No social found' });
  }
  res.status(201).json(social);
};

exports.postSocial = async (req, res) => {
  try {
    const profile = await req.profile.postSocial(req.body);
    res.status(201).json(profile);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
};

exports.editSocial = async (req, res) => {
  try {
    const profile = await req.profile.updateSocial(req.body);
    res.status(201).json(profile);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
};

exports.deleteSocial = async (req, res) => {
  try {
    const profile = await req.profile.deleteSocial();
    res.status(201).json(profile);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
};

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
