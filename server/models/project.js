const mongoose = require('mongoose');
const shortid = require('shortid');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  _id: {
    type: String,
    default: shortid.generate
  },
  author: {
    type: String,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  categories: {
    type: [String],
    required: true
  },
  text: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  views: {
    type: Number,
    default: 0
  },
  url: {
    type: String
  },
  code: {
    type: String
  },
  screenshot: {
    type: String
  }
});

projectSchema.set('toJSON', { getters: true, virtuals: true });
projectSchema.options.toJSON.transform = (doc, ret) => {
  const obj = { ...ret };
  delete obj.__v;
  delete obj._id;
  return obj;
};

projectSchema.pre(/^find/, function() {
  this.populate('author');
});

projectSchema.post('save', function(doc, next) {
  doc
    .populate('author')
    .execPopulate()
    .then(() => next());
});

projectSchema.methods.update = function(body) {
  this.set(body);
  return this.save();
};

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
