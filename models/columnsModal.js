const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const columnsSchema = new Schema({
  name: String,
  tasks: [tasksSchema],
});




module.exports = mongoose.model("kanbanDBs", columnsSchema);