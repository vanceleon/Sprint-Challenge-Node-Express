const express = require("express");
const server = express();
const actions = require("./data/helpers/actionModel");
const projects = require("./data/helpers/projectModel");

server.use(express.json());

//all actions
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

//by id
server.get("/actions/:id", (req, res) => {
  const id = req.params.id;
    actions.get(id)
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




//all projects
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

//by id
server.get("/projects/:id", (req, res) => {
  const id = req.params.id;
    projects.get(id)
    .then(projects => {
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


server.post("/projects/:id", (req, res, next) => {
    const id = req.params.id;
    const project = req.body;

    projects.insert(id)
        .then(project => {
            if(project) {
                res.status(200).json({ project });
            }else {
                res.status(400).json({message: "Error couldn't provide post content"});
            }
        })
        .catch(err => {
            console.log("error", err);
            res.status(500).json({ messgae: "Error getting the information to post" });
          });
});


server.put("/actions/:id", (req, res) => {
  const description = req.body.description;
  const id = req.params.id
  if(description) {
    actions.update(id, req.body)
    .then(actions => {
      if (actions) {
        res.status(200).json({ actions });
      }else {
        res.status(404).json({message: "ID doesn't exist to update"});
      }
    })
    .catch(err => {
      console.log("error", err);
      res.status(500).json({
        message: "Error getting the information for each character"
      });
    });
} else {
  res.status(400).json({ message: "Please provide text" });
  }
});




server.listen(8000, () => console.log("\n==API on Port 8K"));
