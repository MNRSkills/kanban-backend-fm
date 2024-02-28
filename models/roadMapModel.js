const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const subTasks = new Schema({
  subTitle: String,
  isCompleted: Boolean,
});

const roadMapSchema = new Schema({
  title: { type: String },
  description: { type: String },
  status: { type: String },
  subTasks: [subTasks],
});

module.exports = mongoose.model("Road Maps", roadMapSchema);
