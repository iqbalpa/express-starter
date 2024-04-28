import { Router, Request, Response } from "express";
import { User } from "../models/user";

const authRouter = Router();
let users: User[] = [];

authRouter.post("/register", (req: Request, res: Response) => {
    const newUser: User = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        role: "user",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: new Date(),
    };
    users.push(newUser);
    res.json(newUser).status(201);
});

authRouter.post("/login", (req: Request, res: Response) => {
    const user = users.find((user) => user.email === req.body.email && user.password === req.body.password);
    if (user) {
        res.json(user).status(200);
    } else {
        res.status(401).send("Invalid email or password");
    }
});

export default authRouter;