const express = require("express"); 
const server = express();
const actions = require("./data/helpers/actionModel");


server.use(express.json());







server.listen(8000, () => console.log("\n==API on Port 8K"));