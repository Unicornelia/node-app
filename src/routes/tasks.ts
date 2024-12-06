import { Router, Request, Response } from "express";
import { Task } from "../models/task.js";

const router = Router();
let tasks: Task[] = [];

router.post("/", async (req: Request, res: Response) => {
  const task: Task = {
    id: tasks.length + 1,
    title: req.body.title,
    description: req.body.description,
    completed: false,
  };

  tasks.push(task);
  res.status(201).json(task);
});

router.get("/", async (req, res: Response) => {
  res.json(tasks);
});

router.get("/:id", async (req, res: Response) => {
  const task: Task | undefined = tasks.find(
    (task: Task): boolean => task.id === parseInt(req.params.id),
  );

  if (!task) {
    res.status(404).send("No task with id " + req.params.id);
  } else {
    res.status(200).json(task);
  }
});

export default router;
