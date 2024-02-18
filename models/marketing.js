const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const kanbanSchema = new Schema({
  boards: [
    {
      name: { type: String },
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
                  isComplicated: Boolean,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
});

module.exports = mongoose.model("kanbanDBs", kanbanSchema);
