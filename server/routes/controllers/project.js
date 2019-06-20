const Project = require('../../models/project');

exports.getAll = async (req, res) => {
  const list = await Project.find().sort('-created');
  if (list.length < 1) {
    return res.status(500).json({ message: 'No projects found' });
  }
  res.json(list);
};

exports.getByCategory = async (req, res) => {
  try {
    const category = req.params.category;
    const list = await Project.find({ categories: category }).sort('-created');
    res.json(list);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
};

exports.getOne = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(
      req.project.id,
      { $inc: { views: 1 } },
      { new: true }
    );
    res.status(201).json(project);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
};

exports.delete = async (req, res) => {
  try {
    await req.project.remove();
    res.status(201).json({ message: 'Successfully deleted' });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
};

exports.post = async (req, res, next) => {
  try {
    const project = await Project.create({
      ...req.body,
      author: req.user.id,
      categories: req.body.categories
        .split(',')
        .map(x => x.trim())
        .filter(x => x !== '')
    });
    res.status(201).json(project);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
};

exports.update = async (req, res, next) => {
  try {
    const projectFields = {
      ...req.body,
      categories: req.body.categories
        .split(',')
        .map(x => x.trim())
        .filter(x => x !== '')
    };
    const project = await req.project.update(projectFields);
    res.status(201).json(project);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
};

exports.load = async (req, res, next, projectId) => {
  try {
    req.project = await Project.findById(projectId);
    if (!req.project)
      return res.status(404).json({ message: 'Project not found' });
  } catch (err) {
    if (err.name === 'CastError') {
      return res.status(400).json({ message: 'Invalid project ID' });
    }
    return next(err);
  }
  next();
};
