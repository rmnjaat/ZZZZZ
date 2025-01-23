const express = require('express');
const app = express();
const cors= require('cors');
const fetchallQuestions = require('./Utility/FetchData')
const startGrpcServer = require('./gRPC/server')


require('dotenv').config();
require('./Utility/MongoCon');


const PORT = process.env.PORT || 8080;
const GRPC_PORT = process.env.GRPC_PORT || 50051;


app.get('/ping',(req,res)=>{
    res.send("PONG");
})

app.get('/questions' , fetchallQuestions);

app.use(cors());


app.listen(PORT , ()=>{
    console.log(`Server started on ${PORT}`);
})


startGrpcServer(GRPC_PORT);