const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// REDU THIS TO EACH BOARD WILL HAVE IT'S OWN COLLECTION AND EACH TASK IS A DOCUMENT.

const mainSchema = new Schema({
  boards: [{}],
});

module.exports = mongoose.model("kanbanDBs", mainSchema);
