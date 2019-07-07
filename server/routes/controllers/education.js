const Profile = require('../../models/profile');

// EDUCATION ROUTE CONTROLLER

exports.getOne = async (req, res) => {
  const edu = await req.profile.education.id(req.params.edu);
  if (!edu) {
    return res.status(500).json({ message: 'No education matches that ID' });
  }
  res.status(201).json(edu);
};

exports.getAll = async (req, res) => {
  if (req.profile.education.length < 1) {
    return res.status(500).json({ message: 'No education found' });
  }
  res.status(201).json(req.profile.education);
};

exports.post = async (req, res) => {
  try {
    const profile = await req.profile.postEdu(req.body);
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
    res.status(201).json(profile);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
};

exports.update = async (req, res) => {
  try {
    const { edu } = req.params;
    const profile = await req.profile.updateEdu(edu, req.body);
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
    res.status(201).json(profile);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
};

exports.delete = async (req, res) => {
  try {
    const profile = await req.profile.deleteEdu(req.params.edu);
    res.status(201).json(profile);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
};
