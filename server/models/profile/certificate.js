const mongoose = require('mongoose');
const shortid = require('shortid');
const Schema = mongoose.Schema;

const certSchema = new Schema({
  _id: {
    type: String,
    default: shortid.generate
  },
  title: {
    type: String,
    required: true
  },
  issued: {
    type: Date,
    required: true
  },
  from: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
});

certSchema.set('toJSON', { getters: true });
certSchema.options.toJSON.transform = (doc, ret) => {
  const obj = { ...ret };
  delete obj._id;
  return obj;
};

module.exports = certSchema;
