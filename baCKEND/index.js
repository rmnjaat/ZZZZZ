const express = require('express');
const app = express();
const cors= require('cors');

const startGrpcServer = require('./gRPC/server')


require('dotenv').config();
require('./Utility/MongoCon');


const PORT = process.env.PORT || 8081;
const GRPC_PORT = process.env.GRPC_PORT || 50051;



app.use(cors());


app.listen(PORT , ()=>{
    console.log(`Server started on ${PORT}`);
})


startGrpcServer(GRPC_PORT);