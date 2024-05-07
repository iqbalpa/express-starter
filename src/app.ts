import express, { Request, Response } from "express";
import authRouter from "./routes/auth";
import "dotenv/config";

const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
	res.send("Hello World!");
});

app.use("/auth", authRouter);

export default app;
