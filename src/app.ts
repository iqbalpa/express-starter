import express, { Request, Response } from "express";
import taskRouter from "./routes/task";
import authRouter from "./routes/auth";

const app = express();

app.get("/", (req: Request, res: Response) => {
	res.send("Hello World!");
});

app.use("/tasks", taskRouter);
app.use("/auth", authRouter);

export default app;
