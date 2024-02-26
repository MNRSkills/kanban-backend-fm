const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const launchSchema = new Schema({
  name: { type: String },
  tasks: [
    {
      title: { type: String },
      description: { type: String },
      status: { type: String },
      subtasks: [
        {
          subTitle: { type: String },
          isCompleted: Boolean,
        },
      ],
    },
  ],
  name: { type: String },
  tasks: [],
  name: { type: String },
  tasks: [],
});

module.exports = mongoose.model("Platform Launch", launchSchema);
