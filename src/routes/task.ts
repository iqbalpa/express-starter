import { Router, Request, Response } from "express";
import { Task } from "../models/task";

const taskRouter = Router();
let tasks: Task[] = [];

taskRouter.get("/", (req: Request, res: Response) => {
	res.json(tasks).status(200);
});

taskRouter.post("/", (req: Request, res: Response) => {
	const newTask: Task = {
		id: tasks.length + 1,
		title: req.body.title,
		description: req.body.description,
		isDone: false,
	};
	tasks.push(newTask);
	res.json(newTask).status(201);
});

taskRouter.get("/:id", (req: Request, res: Response) => {
    const task = tasks.find((task) => task.id === parseInt(req.params.id));
    if (task) {
        res.json(task).status(200);
    } else {
        res.status(404).send("Task not found");
    }
});

export default taskRouter;