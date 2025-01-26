import { QuestionServiceClient } from "../gen/question_grpc_web_pb";
import { FetchQuestionsRequest } from "../gen/question_pb";


const client = new QuestionServiceClient("http://localhost:8080");

export const fetchQuestionsService = (type, title, page, limit, onSuccess, onError) => {

  if (title === "") {
    return;
  }

  const request = new FetchQuestionsRequest();
  request.setTitle(title);
  request.setPage(page);
  request.setLimit(limit);


  if (type) {
    switch (type) {
      case "Select All":
        //do Nothing
        break;

      case "MCQ":
        request.setType("MCQ");
        break;

      case "Word Anagram":
        request.setType("ANAGRAM");
        request.setAnagramtype("WORD");
        break;

      case "Sentence Anagram":
        request.setType("ANAGRAM");
        request.setAnagramtype("SENTENCE");

        break;
      case "Read Along":
        request.setType("READ_ALONG");


        break;
      case "Conversation":
        request.setType("CONVERSATION");

        break;
      case "Content only":
        request.setType("CONTENT_ONLY");
        break;
      default:
      //do nothing
    }
  }






  client.fetchQuestions(request, {}, (error, response) => {
    if (error) {
      console.error("Error fetching questions:", error.message);
      if (onError) onError(error);
      return;
    }



    if (onSuccess) onSuccess(response.u);



  });
};
