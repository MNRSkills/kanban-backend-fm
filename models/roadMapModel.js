const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const roadMapSchema = new Schema({
  name: { type: String }, //Marketing,  platform launch, roadmap
  column: [
    {
      name: { type: String },
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
    },
  ],
});

module.exports = mongoose.model("kanbanDBs", roadMapSchema);
