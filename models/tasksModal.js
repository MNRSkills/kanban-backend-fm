const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tasksSchema = new Schema({
  id: ObjectId,
  name: String,
  tasks: [
    {
      title: { type: String },
      description: { type: String },
      status: { type: String },
      subtasks: [
        {
          title: { type: String },
          isCompleted: Boolean,
        },
      ],
    },
  ],
});

module.exports = mongoose.model("tasksDb", tasksSchema);
