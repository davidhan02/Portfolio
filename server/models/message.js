const mongoose = require('mongoose');
const shortid = require('shortid');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  _id: {
    type: String,
    default: shortid.generate
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  sent: {
    type: Date,
    default: Date.now
  },
  read: {
    type: Boolean,
    default: false
  }
});

messageSchema.set('toJSON', { getters: true, virtuals: true });
messageSchema.options.toJSON.transform = (doc, ret) => {
  const obj = { ...ret };
  delete obj.__v;
  delete obj._id;
  return obj;
};

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
