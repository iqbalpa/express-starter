import express, { Request, Response } from "express";
import taskRouter from "./routes/task";

const app = express();

app.get("/", (req: Request, res: Response) => {
	res.send("Hello World!");
});

app.use("/tasks", taskRouter);

export default app;
