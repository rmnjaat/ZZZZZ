// server.js
const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const fetchQuestions = require("./fetchQuestions");


// Load Proto file and prepare gRPC definition
const path = require("path");

// Correctly resolve the path to question.proto
const protoPath = path.resolve(__dirname, "question.proto");

const packageDefinition = protoLoader.loadSync(protoPath, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const questionsProto =
  grpc.loadPackageDefinition(packageDefinition).questions;


// Ensure `questionsProto` contains `QuestionService`
if (!questionsProto || !questionsProto.QuestionService) {
  console.error("Error: Failed to load QuestionService from the proto file.");
  process.exit(1);
}

const startGrpcServer = (port = 50051) => {

  const grpcServer = new grpc.Server();

  
  grpcServer.addService(questionsProto.QuestionService.service, {
    FetchQuestions: fetchQuestions,
  });

  grpcServer.bindAsync(
    `0.0.0.0:${port}`,
    grpc.ServerCredentials.createInsecure(),
    () => {
      console.log(`gRPC server started on port ${port}`);
      
    }
  );
};

module.exports = startGrpcServer;
