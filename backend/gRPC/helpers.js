
const buildFilter = ({ title, type, anagramType }) => {
  let filter = { title: { $regex: title, $options: "i" } };

  if (type) filter.type = type;
  if (type === "ANAGRAM" && anagramType) filter.anagramType = anagramType;

  return filter;
};

// Helper function to format the question response
const formatQuestionResponse = (question) => {
  const options = question.options.map((opt) => ({
    _id: opt._id,
    text: opt.text,
    isCorrectAnswere: opt.isCorrectAnswer,
  }));

  const blocks = question.blocks.map((block) => ({
    _id: block._id,
    text: block.text,
    showInOption: block.showInOption,
    isAnswer: block.isAnswer,
  }));

  return {
    _id: question._id,
    type: question.type,
    title: question.title,
    siblingId: question.siblingId,
    options: options,
    blocks: blocks,
    anagramType: question.anagramType || "",
    solution: question.solution || "",
  };
};

module.exports = { buildFilter, formatQuestionResponse };
