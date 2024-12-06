import {Router} from "express";
import {Task} from "../models/task.js";

const router = Router();
let tasks: Task[] = [];

export default router