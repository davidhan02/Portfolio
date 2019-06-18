const mongoose = require('mongoose');
const shortid = require('shortid');
const Schema = mongoose.Schema;

const expSchema = new Schema({
  _id: {
    type: String,
    default: shortid.generate
  },
  title: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  location: {
    type: String
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

expSchema.set('toJSON', { getters: true });
expSchema.options.toJSON.transform = (doc, ret) => {
  const obj = { ...ret };
  delete obj._id;
  return obj;
};

module.exports = expSchema;
