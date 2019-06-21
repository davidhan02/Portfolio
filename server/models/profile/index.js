const mongoose = require('mongoose');
const shortid = require('shortid');
const Schema = mongoose.Schema;

const expSchema = require('./experience');
const eduSchema = require('./education');
const socialSchema = require('./social');

const profileSchema = new Schema({
  _id: {
    type: String,
    default: shortid.generate
  },
  user: {
    type: String,
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
    type: [String],
    required: true
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

profileSchema.set('toJSON', { getters: true });
profileSchema.options.toJSON.transform = (doc, ret) => {
  const obj = { ...ret };
  delete obj.__v;
  delete obj._id;
  return obj;
};

profileSchema.pre(/^find/, function() {
  this.populate('user');
});

profileSchema.post('save', function(doc, next) {
  doc
    .populate('user')
    .execPopulate()
    .then(() => next());
});

profileSchema.methods.update = function(body) {
  this.set(body);
  return this.save();
};

profileSchema.methods.postEdu = function(body) {
  this.education.unshift({ ...body });
  return this.save();
};

profileSchema.methods.updateEdu = function(eduId, body) {
  const edu = this.education.id(eduId);
  if (!edu) throw new Error('No education matches that ID');
  exp.set(body);
  return this.save();
};

profileSchema.methods.deleteEdu = function(eduId) {
  const edu = this.education.id(eduId);
  if (!edu) throw new Error('No education matches that ID');
  edu.remove();
  return this.save();
};

profileSchema.methods.postExp = function(body) {
  this.experience.unshift({ ...body });
  return this.save();
};

profileSchema.methods.updateExp = function(expId, body) {
  const exp = this.experience.id(expId);
  if (!exp) throw new Error('No experience matches that ID');
  exp.set(body);
  return this.save();
};

profileSchema.methods.deleteExp = function(expId) {
  const exp = this.experience.id(expId);
  if (!exp) throw new Error('No experience matches that ID');
  exp.remove();
  return this.save();
};

profileSchema.methods.postSocial = function(body) {
  this.social = { ...body };
  return this.save();
};

profileSchema.methods.updateSocial = function(body) {
  this.social.set(body);
  return this.save();
};

profileSchema.methods.deleteSocial = function() {
  this.social = {};
  return this.save();
};

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
