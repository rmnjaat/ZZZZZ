import { QuestionServiceClient } from './generated/question_grpc_web_pb';
import { FetchQuestionsRequest } from './generated/question_pb';

const client = new QuestionServiceClient('http://localhost:8080'); // Replace with your gRPC-Web proxy URL

const fetchQuestions = async () => {
  const request = new FetchQuestionsRequest();
  request.setTitle('Sample Title');
  request.setPage(1);
  request.setLimit(10);

  try {
    const response = await client.fetchQuestions(request, {});
    console.log('Response:', response.toObject());
  } catch (error) {
    console.error('Error:', error.message);
  }
};
