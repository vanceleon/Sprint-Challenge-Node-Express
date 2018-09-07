const express = require("express");
const server = express();
const actions = require("./data/helpers/actionModel");
const projects = require("./data/helpers/projectModel");

server.use(express.json());

server.get("/actions", (req, res) => {
  actions
    .get()
    .then(actions => {
      if (actions) {
        res.status(200).json(actions);
      } else {
        res.status(404).json({ message: "No action found" });
      }
    })
    .catch(err => {
      console.log("error", err);
      res.status(500).json({ messgae: "Error getting the information" });
    });
});

server.get("/projects", (req, res) => {
  projects.get().then(projects => {
      if(projects) {
          res.status(200).json(projects);
      }else {
          res.status(404).json({message: "No action found"});
      }
  })
  .catch(err => {
    console.log("error", err);
    res.status(500).json({ messgae: "Error getting the information" });
  });
  
});

server.listen(8000, () => console.log("\n==API on Port 8K"));
