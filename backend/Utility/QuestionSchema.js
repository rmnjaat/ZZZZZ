const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
  type: {
    type: String,
    required: true,
  },
  // Common fields for both Anagram and MCQ can go here.
  title: { type: String, required: true },
  siblingId: { type: Schema.Types.ObjectId },

  // Specific fields for ANAGRAM
  anagramType: { type: String },
  blocks: [
    {
      text: { type: String },
      showInOption: { type: Boolean },
      isAnswer: { type: Boolean },
    }
  ],
  solution: { type: String },

  // Specific fields for MCQ
  options: [
    {
      text: { type: String },
      isCorrectAnswer: { type: Boolean },
    }
  ],
},{collection : 'Questions'});

const QuestionModel = mongoose.model('Question', QuestionSchema);

module.exports =  QuestionModel ;
