const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const socialSchema = new Schema(
  {
    linkedin: {
      type: String
    },
    instagram: {
      type: String
    },
    github: {
      type: String
    },
    glitch: {
      type: String
    },
    codepen: {
      type: String
    }
  },
  { _id: false }
);

module.exports = socialSchema;
