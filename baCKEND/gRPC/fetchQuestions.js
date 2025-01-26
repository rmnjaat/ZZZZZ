// fetchQuestions.js
const { buildFilter, formatQuestionResponse } = require('./helpers');
const QuestionModel = require('../Utility/QuestionSchema');

const fetchQuestions = async (call, callback) => {
  try {
    const { page = 1, limit = 10, title, type, anagramType } = call.request;
    const pageNumber = parseInt(page, 10);
    const limitNumber = parseInt(limit, 10);

    const filter = buildFilter({ title, type, anagramType });
    const skip = (pageNumber - 1) * limitNumber;

    const totalQuestions = await QuestionModel.countDocuments(filter);
    const totalPages = Math.ceil(totalQuestions / limitNumber);

    const questions = await QuestionModel.find(filter)
      .skip(skip)
      .limit(limitNumber)
      .exec();

    // Format questions and send the response
    const questionsResponse = questions.map(formatQuestionResponse);
    callback(null, {
      currentPage: pageNumber,
      totalPages: totalPages,
      questions: questionsResponse,
    });
  } catch (error) {
    console.error('Error fetching questions:', error);
    callback({
      code: grpc.status.INTERNAL,
      details: 'Failed to fetch questions',
    });
  }
};

module.exports = fetchQuestions;
