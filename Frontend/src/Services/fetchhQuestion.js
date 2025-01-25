import { QuestionServiceClient } from "../gen/question_grpc_web_pb";
import { FetchQuestionsRequest } from "../gen/question_pb";

const client = new QuestionServiceClient("http://localhost:8080");

export const fetchQuestionsService = (type, title, page, limit, onSuccess, onError) => {
  const request = new FetchQuestionsRequest();
  request.setType(type);
  request.setTitle(title);
  request.setPage(page);
  request.setLimit(limit);

  console.log("Sending request:", request.toObject());

  client.fetchQuestions(request, {}, (error, response) => {
    if (error) {
      console.error("Error fetching questions:", error.message);
      if (onError) onError(error);
      return;
    }

    const questions = response.getQuestionsList().map((q) => q.toObject());
    if (onSuccess) onSuccess(questions);

    console.log("Fetched Questions:", questions);
  });
};
