
import './App.css';
import {PingPongServiceClient} from "./gen/question_grpc_web_pb"
import {PingRequest} from "./gen/question_pb"
import { useState } from 'react';



function App() {
  // Instantiate the client correctly
  
  const [responses, setResponses] = useState([]);
  
  const ping = async () => {
    const client = new PingPongServiceClient("http://localhost:8080");
    console.log("client is " , client);

    try{
    const request = new PingRequest(); // Using PingRequest from proto.questions
    const stream =await  client.pingPong(request);

    stream.on('data', (res) => {
      setResponses(prev => [...prev, responses.toObject()])  
    });

  } catch(err) {
    console.error(err);
  }




  };

  return (
    <div>
      <button onClick={ping}>Ping</button>
      {responses.map((res, i) => (
        <div key={i}>{res.message}</div>
      ))}
    </div>
  );
}

export default App;
