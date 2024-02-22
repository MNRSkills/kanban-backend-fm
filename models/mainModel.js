const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// REDU THIS TO EACH BOARD WILL HAVE IT'S OWN COLLECTION AND EACH TASK IS A DOCUMENT.

const mainSchema = new Schema({
  boards: [
    {
      // name: { type: String }, //Marketing,  platform launch, roadmap
      // column: [
      //   {
      //     name: { type: String },
      //     tasks: [
      //       {
      //         title: { type: String },
      //         description: { type: String },
      //         status: { type: String },
      //         subtasks: [
      //           {
      //             title: { type: String },
      //             isCompleted: Boolean,
      //           },
      //         ],
      //       },
      //     ],
      //   },
      // ],
    },
  ],
});

module.exports = mongoose.model("kanbanDBs", mainSchema);
