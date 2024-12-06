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

export default router;
