const Schema = mongoose.Schema;

const projectSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  url: {
    type: String
  },
  github: {
    type: String
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
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

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
