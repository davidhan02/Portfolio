const Profile = require('../../models/profile');

// SOCIAL ROUTE CONTROLLER

exports.get = async (req, res) => {
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

exports.post = async (req, res) => {
  try {
    const profile = await req.profile.postSocial(req.body);
    res.status(201).json(profile);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
};

exports.update = async (req, res) => {
  try {
    const profile = await req.profile.updateSocial(req.body);
    res.status(201).json(profile);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
};

exports.delete = async (req, res) => {
  try {
    const profile = await req.profile.deleteSocial();
    res.status(201).json(profile);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
};
