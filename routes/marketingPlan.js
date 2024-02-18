const marketRouter = require("express").Router();
const Boards = require("../models/marketing");

marketRouter.get("/", (req, res) => {
  res.send("THSI WORKS");
});

marketRouter.post("/marketing-plan", async (req, res) => {
  try {
    const marketPlan = new Boards({
      name: req.params.name,
      tasks: [
        {
          title: req.params.title,
          description: req.params.description,
          status: req.params.status,
          subtasks: [
            {
              title: req.params.title,
              isComplicated: req.params.isComplicated,
            },
          ],
        },
      ],
    });
  } catch (error) {}
});

module.exports = marketRouter;
