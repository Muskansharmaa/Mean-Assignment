// importing the express module
const express = require("express");
// get the express module as app
const app = express();
// defining the port no
const port = 3000;

// routes defined
// home route
app.get("/", (req, res) => {
  res.send("This is my HOME page");
});

// fetching the data
app.get("/students", (req, res) => {
  res.send("fetching students data");
});

// adding the data
app.post("/students", (req, res) => {
  res.send("student added");
});
// shows the output on local host
app.listen(port, () => console.log(`listening on port no ${port}`));
