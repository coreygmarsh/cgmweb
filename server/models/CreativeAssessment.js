const mongoose = require('mongoose');

const CreativeAssessmentsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  purpose: { type: String, required: true },
  audience: { type: String },
  message: { type: String, required: true },
  footage: { type: String, required: true },
  music: { type: String, required: true },
  captions: { type: String, required: true },
  scriptwriting: { type: String, required: true },
  resolution: { type: String },
  aspectRatio: {type: String },
  styleExamples: { type: String },
  deadline: { type: String }
});

module.exports = mongoose.model('CreativeAssessments', CreativeAssessmentsSchema);
