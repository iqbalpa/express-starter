import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt";

export function handleTokenBasedAuthentication(req: Request, res: Response, next: NextFunction) {
	const authenticationToken = req.headers["authorization"];

	if (authenticationToken !== undefined) {
		const isTokenValid = verifyToken(authenticationToken);
		console.log(`decoded token:\n${isTokenValid}`);
		if (isTokenValid) {
			// moving to the next middleware
			return next();
		}
	}

	// if the authorization token is invalid or missing returning a 401 error
	res.status(401).send("Unauthorized");
}
