const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const subTaskSchema = new Schema({
  subTitle: String,
  isCompleted: Boolean,
});

const taskUpdateSchema = new Schema({
  name: String,
  tasks: [],
});

const tasksSchema = new Schema({
  title: String,
  description: String,
  status: String,
  subTasks: [subTaskSchema],
});

const marketingSchema = new Schema({
  status_name: String,
  tasks: [tasksSchema],
  taskStatus: [taskUpdateSchema],
});

module.exports = mongoose.model("marketing plan", marketingSchema);
