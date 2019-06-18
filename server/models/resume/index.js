const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const expSchema = require('./experience');
const eduSchema = require('./education');
const socialSchema = require('./social');

const resumeSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  birthday: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    required: true
  },
  skills: {
    type: [String]
  },
  company: {
    type: String
  },
  location: {
    type: String
  },
  bio: {
    type: String
  },
  experience: [expSchema],
  education: [eduSchema],
  social: socialSchema
});

resumeSchema.set('toJSON', { getters: true });
resumeSchema.options.toJSON.transform = (doc, ret) => {
  const obj = { ...ret };
  delete obj._id;
  delete obj.__v;
  return obj;
};

resumeSchema.pre(/^find/, function() {
  this.populate('user');
});

resumeSchema.post('save', function(doc, next) {
  doc
    .populate('user')
    .execPopulate()
    .then(() => next());
});

resumeSchema.methods.addEdu = function(body) {
  this.education.unshift({ ...body });
  return this.save();
};

resumeSchema.methods.addExp = function(body) {
  this.experience.unshift({ ...body });
  return this.save();
};

resumeSchema.methods.setSocial = function(body) {
  this.social = { ...body };
  return this.save();
};

resumeSchema.methods.removeEdu = function(eduId) {
  const edu = this.education.id(eduId);
  if (!edu) throw new Error('No education matches that ID');
  edu.remove();
  return this.save();
};

resumeSchema.methods.removeExp = function(expId) {
  const exp = this.experience.id(expId);
  if (!exp) throw new Error('No experience matches that ID');
  exp.remove();
  return this.save();
};

const Resume = mongoose.model('Resume', resumeSchema);

module.exports = Resume;
