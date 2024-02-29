const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tasksSchema = new Schema({
  title: { type: String },
  description: { type: String },
  status: { type: String },
  subtasks: [
    {
      subTitle: { type: String },
      isCompleted: Boolean,
    },
  ],
});

const launchSchema = new Schema({
  name: { type: String },
  tasks: [tasksSchema]
});

module.exports = mongoose.model("Platform Launch", launchSchema);
