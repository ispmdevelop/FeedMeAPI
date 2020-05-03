import { Response, NextFunction } from "express";
import global from "../../config/global.config";
import jwt from "jsonwebtoken";

export function getAuthToken(req, res: Response, next: NextFunction) {
  try {
    req.token = req.headers.authorization.split(" ")[1];
    req.user = jwt.verify(req.token, global.JWT_KEY);
  } catch {
    req.token = {};
    req.user = {};
  }
  next();
}
