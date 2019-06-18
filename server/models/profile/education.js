const mongoose = require('mongoose');
const shortid = require('shortid');
const Schema = mongoose.Schema;

const eduSchema = new Schema({
  _id: {
    type: String,
    default: shortid.generate
  },
  school: {
    type: String,
    required: true
  },
  degree: {
    type: String,
    required: true
  },
  major: {
    type: String,
    required: true
  },
  from: {
    type: Date,
    required: true
  },
  to: {
    type: Date
  },
  current: {
    type: Boolean,
    default: false
  },
  description: {
    type: String
  }
});

eduSchema.set('toJSON', { getters: true });
eduSchema.options.toJSON.transform = (doc, ret) => {
  const obj = { ...ret };
  delete obj._id;
  return obj;
};

module.exports = eduSchema;
