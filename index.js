require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = express.json();

const app = express();

const PORT = 8080;

app.get("/", (req, res) => {
  res.send("TESTING THIS SERVER");
});

// LETS START ROUTING HERE AND WILL START MVC

// connecting mongoose to mongodbatlas
const uri = process.env.MONGODB_CONNECT;
mongoose.connect(uri);

// adding the routes to this app

const marketRouter = require("./routes/marketingPlan");
const platformRouter = require("./routes/platformLaunch");
const roadMapRouter = require("./routes/roadMap");
const boardsRouter = require("./routes/boardsRouter");
app.use(bodyParser);

app.use("/boards-kanban", boardsRouter);
app.use("/marketing-plan", marketRouter);

app.use("/platform-launch", platformRouter);
app.use("/Roadmap", roadMapRouter);
// app.use("/create-new-board");

app.listen(PORT, () => {
  console.log("THIS IS MY SERVER WORKING", `http://localhost:${PORT}`);
});
