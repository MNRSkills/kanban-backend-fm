const boardsRouter = require("express").Router();
const { ObjectId } = require("mongodb");
const Boards = require("../models/mainModel");
const { query } = require("express");

// GETTING THE ENTIRE BOARD
boardsRouter.get("/", async (req, res) => {
  try {
    await Boards.find().then((boards) => {
      res.status(200).json({
        boards,
        msg: "Current Boards",
      });
    });
  } catch (error) {
    res.status(500).json({
      ...error,
      msg: "THERE IS AN ERROR WITH FETCHING DATA",
    });
  }
});

// POSTING TO THE ENTIRE BOARD
boardsRouter.post("/boards-post", async (req, res) => {
  console.log(req.body.boards);
  //jkjk
  try {
    const boards = await new Boards({
      boards: req.body.boards,
    });
    await boards.save().then((tasking) =>
      res.status(200).json({
        msg: "Task has been uploaded!",
        ...tasking,
      })
    );
  } catch (error) {
    res.status(400).json({
      ErrMsg: "Bad Request, this is perceived to by a client error",
      ...error,
    });
  }
});

// API TO FIND A BOARD COLUMN FOR INSTANCE "I ONLY WANT MY MARKETING LAUNCH COLUMN",

boardsRouter.get(`/single-board/name`, async (req, res) => {
  console.log(`${req.body._id}`);
  // const ID = req.body.boards[0].columns[0]._id;
  try {
    await Boards.findById({ boards: [{ _id: `${req.body._id}` }] }).then((column) =>
      res.status(200).json({
        column: column,
        msg: "Sorry for the hickup",
      })
    );
  } catch (error) {
    res.status(400).json({
      ErrorMsg: "bad request from user",
      ...error,
    });
  }
});

//  we will need an api that will get only the items to each board
//  we also need an api that will update a task status

module.exports = boardsRouter;
