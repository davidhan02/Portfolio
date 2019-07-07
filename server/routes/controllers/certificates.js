const Profile = require('../../models/profile');

// CERTIFICATES ROUTE CONTROLLER

exports.getOne = async (req, res) => {
  const cert = await req.profile.certificates.id(req.params.cert);
  if (!cert) {
    return res.status(500).json({ message: 'No certificate matches that ID' });
  }
  res.status(201).json(cert);
};

exports.getAll = async (req, res) => {
  if (req.profile.certificates.length < 1) {
    return res.status(500).json({ message: 'No certificates found' });
  }
  res.status(201).json(req.profile.certificates);
};

exports.post = async (req, res) => {
  try {
    const cert = await req.profile.postCert(req.body);
    await Profile.updateMany(
      {},
      {
        $push: {
          certificates: {
            $each: [],
            $sort: { issued: -1 }
          }
        }
      }
    );
    res.status(201).json(cert);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
};

exports.update = async (req, res) => {
  try {
    const { cert } = req.params;
    const profile = await req.profile.updateCert(cert, req.body);
    await Profile.updateMany(
      {},
      {
        $push: {
          certificates: {
            $each: [],
            $sort: { issued: -1 }
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
    const profile = await req.profile.deleteCert(req.params.cert);
    res.status(201).json(profile);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
};
