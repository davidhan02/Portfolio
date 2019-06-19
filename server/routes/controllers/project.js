const Project = require('../../models/project');

exports.listAll = async (req, res) => {
  const list = await Project.find().sort('-created');
  if (list.length < 1) {
    return res.status(500).json({ message: 'No projects found' });
  }
  res.json(list);
};

exports.listByCategory = async (req, res) => {
  const category = req.params.category;
  const list = await Project.find({ categories: category }).sort('-created');
  res.json(list);
};

exports.showOne = async (req, res) => {
  const project = await Project.findByIdAndUpdate(
    req.project.id,
    { $inc: { views: 1 } },
    { new: true }
  );
  res.status(201).json(project);
};

exports.destroy = async (req, res) => {
  await req.project.remove();
  res.status(201).json({ message: 'Successfully deleted' });
};

exports.submit = async (req, res, next) => {
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
  } catch (err) {
    next(err);
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
    await Project.findByIdAndUpdate(
      req.project.id,
      { $set: projectFields },
      { upsert: true }
    );
    const project = await Project.findById(req.project.id);
    res.status(201).json(project);
  } catch (err) {
    next(err);
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
