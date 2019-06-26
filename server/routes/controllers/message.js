const Message = require('../../models/message');

exports.getAll = async (req, res) => {
  const messages = await Message.find();
  if (messages.length < 1) {
    return res.status(500).json({ message: 'No messages found' });
  }
  res.json(messages);
};

exports.post = async (req, res) => {
  try {
    const message = await Message.create({
      ...req.body
    });
    res.status(201).json(message);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
};

exports.getOne = async (req, res) => {
  try {
    const message = await Message.findByIdAndUpdate(
      req.message.id,
      { $set: { read: true } },
      { new: true }
    );
    res.status(201).json(message);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
};

exports.delete = async (req, res) => {
  try {
    await req.message.remove();
    res.status(201).json({ message: 'Successfully deleted' });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
};

exports.load = async (req, res, next, messageId) => {
  try {
    req.message = await Message.findById(messageId);
    if (!req.message) return res.status(404).json({ message: 'Message not found' });
  } catch (err) {
    if (err.name === 'CastError') {
      return res.status(400).json({ message: 'Invalid message ID' });
    }
    return next(err);
  }
  next();
};
