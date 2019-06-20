const Profile = require('../../models/profile');

exports.getAll = async (req, res) => {
  const profiles = await Profile.find();
  if (profiles.length < 1) {
    return res.status(500).json({ message: 'No profiles found' });
  }
  res.json(profiles);
};

exports.post = async (req, res, next) => {
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

exports.update = async (req, res, next) => {
  try {
    const profileFields = {
      ...req.body,
      skills: req.body.skills
        .split(',')
        .map(x => x.trim())
        .filter(x => x !== '')
    };
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

exports.postEdu = async (req, res, next) => {
  try {
    const profile = await req.profile.postEdu(req.body);
    res.status(201).json(profile);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
};

exports.updateEdu = async (req, res, next) => {
  try {
    const { eduId } = req.params;
    const profile = await req.profile.updateEdu(eduId, req.body);
    res.status(201).json(profile);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
};

exports.deleteEdu = async (req, res, next) => {
  try {
    const profile = await req.profile.deleteEdu(req.params.eduId);
    res.status(201).json(profile);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
};

exports.postExp = async (req, res, next) => {
  try {
    const profile = await req.profile.postExp(req.body);
    res.status(201).json(profile);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
};

exports.updateExp = async (req, res, next) => {
  try {
    const { expId } = req.params;
    const profile = await req.profile.updateExp(expId, req.body);
    res.status(201).json(profile);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
};

exports.deleteExp = async (req, res, next) => {
  try {
    const profile = await req.profile.deleteExp(req.params.expId);
    res.status(201).json(profile);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
};

exports.postSocial = async (req, res, next) => {
  try {
    const profile = await req.profile.postSocial(req.body);
    res.status(201).json(profile);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
};

exports.deleteSocial = async (req, res, next) => {
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
    if (!req.profile)
      return res.status(404).json({ message: 'Profile not found' });
  } catch (err) {
    if (err.name === 'CastError') {
      return res.status(400).json({ message: 'Invalid resume ID' });
    }
    return next(err);
  }
  next();
};
