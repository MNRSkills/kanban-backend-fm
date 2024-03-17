const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// REDU THIS TO EACH BOARD WILL HAVE IT'S OWN COLLECTION AND EACH TASK IS A DOCUMENT.

const tasksSchema = new Schema({
  title: { type: String },
  description: { type: String },
  status: { type: String },
  subtasks: [
    {
      title: { type: String },
      isCompleted: Boolean,
    },
  ],
});
const columnSchema = new Schema({
  name: String,
  tasks: [tasksSchema],
});
const mainSchema = new Schema({
  boards: [
    {
      name: String,
      columns: [columnSchema],
    },
  ],
});

module.exports = mongoose.model("kanbanDBs", mainSchema);
