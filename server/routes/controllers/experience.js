const Profile = require('../../models/profile');

// EXPERIENCE ROUTE CONTROLLER

exports.getOne = async (req, res) => {
  const exp = await req.profile.experience.id(req.params.exp);
  if (!exp) {
    return res.status(500).json({ message: 'No experience matches that ID' });
  }
  res.status(201).json(exp);
};

exports.getAll = async (req, res) => {
  if (req.profile.experience.length < 1) {
    return res.status(500).json({ message: 'No experience found' });
  }
  res.status(201).json(req.profile.experience);
};

exports.post = async (req, res) => {
  try {
    const profile = await req.profile.postExp(req.body);
    await Profile.updateMany(
      {},
      {
        $push: {
          experience: {
            $each: [],
            $sort: { from: -1 }
          }
        }
      }
    );
    res.status(201).json(profile);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
};

exports.update = async (req, res) => {
  try {
    const { exp } = req.params;
    const profile = await req.profile.updateExp(exp, req.body);
    res.status(201).json(profile);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
};

exports.delete = async (req, res) => {
  try {
    const profile = await req.profile.deleteExp(req.params.exp);
    res.status(201).json(profile);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
};
