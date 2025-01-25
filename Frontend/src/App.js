import "./App.css";
import { PingPongServiceClient } from "./gen/question_grpc_web_pb";
import { PingRequest } from "./gen/question_pb";
import { useState } from "react";

import Searchbar from "./Components/Searchbar";
import Filter from "./Components/Filter";
import QuestionList from "./Components/QuestionList";
import Paginationn from "./Components/Paginationn";

function App() {
  // Instantiate the client correctly

  const [responses, setResponses] = useState([]);

  const ping = async () => {
    const client = new PingPongServiceClient("http://localhost:8080");
    console.log("client is ", client);

    try {
      const request = new PingRequest(); // Using PingRequest from proto.questions
      const stream = await client.pingPong(request);

      stream.on("data", (res) => {
        setResponses((prev) => [...prev, res.toObject()]);
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="main-container">
      <div className="container">
        <div className="heading">
          <h2 >Search your question </h2>
        </div>
        <Searchbar></Searchbar>
        <Filter></Filter>
        <div className="Span"><span>Results for "The " filter "MCQ" :</span></div>
        <QuestionList></QuestionList>
        <Paginationn></Paginationn>
        
      </div>
    </div>
  );
}

export default App;
