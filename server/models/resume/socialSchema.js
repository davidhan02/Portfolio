const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const socialSchema = new Schema({
  glitch: {
    type: String
  },
  codepen: {
    type: String
  },
  linkedin: {
    type: String
  },
  instagram: {
    type: String
  }
});

socialSchema.set('toJSON', { getters: true });
socialSchema.options.toJSON.transform = (doc, ret) => {
  const obj = { ...ret };
  delete obj._id;
  return obj;
};

module.exports = socialSchema;
