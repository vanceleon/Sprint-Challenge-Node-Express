const express = require("express");
const server = express();
const actions = require("./data/helpers/actionModel");
const projects = require("./data/helpers/projectModel");

server.use(express.json());

//GET all actions
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

//GET by id ACTIONS
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



//GET all PROJECTS
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

//GET by id PROJECTS
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

//Post for ACTIONS
server.post("/actions/:id", (req, res, next) => {
  const id = req.params.id;
  const action = req.body;

  projects.insert(id, action)
      .then(action => {
          if(newAction) {
            action.push(newAction);  
            res.status(201).json({ action });
          }else {
              res.status(400).json({message: "Error couldn't provide post content"});
          }
      })
      .catch(err => {
          console.log("error", err);
          res.status(500).json({ message: "Error getting the information to post" });
        });
});

//Post for PROJECTS
server.post("/projects", (req, res) => {
    const project = req.body;

    projects.insert(project)
        .then(project => {
          if(project) {
            console.log(project);  
              res.status(201).json({ project });
            }else {
                res.status(400).json({message: "Error couldn't provide post content"});
            }
        })
        .catch(err => {
            console.log("error", err);
            res.status(500).json({ message: "Error getting the information to post", err });
          });
});


//PUT for ACTIONS
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



//PUT for PROJECTS
server.put("/projects/:id", (req, res) => {
  const id = req.params.id;
  const changes = req.body;

  if(id, changes) {
    projects.update(id, changes)
    .then(changes => {
      if (changes) {
        res.status(200).json({ changes });
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



//DELETE for ACTIONS
server.delete("/actions/:id", (req, res) => {
  const id = req.params.id
  const completed = true
  if (id, completed) {
    actions.remove(id)
      .then(actions => {
        if (actions) {
          res.status(204).json({
            url: `/actions/${id}`,
            operation: `DELETE for actions with id ${id}`
          });
        }else {
          res.status(404).json({message: "unable to delete action with inputted id"});
        }
      })
      .catch(err => {
        console.log("error", err);
        res.status(500).json({
          message: "Error performing the Delete function"
        });
      });
  } else {
    res.status(400).json({ message: "Please provide ID" });
  }
})



//DELETE for PROJECTS
server.delete("/projects/:id", (req, res) => {
  const id = req.params.id
  const completed = true
  if (id, completed) {
    projects.remove(id)
      .then(projects => {
        if (projects) {
          res.status(204).json({
            url: `/projects/${id}`,
            operation: `DELETE for actions with id ${id}`
          });
        }else {
          res.status(404).json({message: "unable to delete action with inputted id"});
        }
      })
      .catch(err => {
        console.log("error", err);
        res.status(500).json({
          message: "Error performing the Delete function"
        });
      });
  } else {
    res.status(400).json({ message: "Please provide ID" });
  }
})


server.listen(8000, () => console.log("\n==API on Port 8K"));
