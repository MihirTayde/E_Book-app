import { NextFunction, Request, Response } from "express"; // use lowercase "express"

import  { HttpError } from "http-errors";
import { config } from "../config/config"

// this is the global error handler

const Global_Error_handler = (
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err.status || 500; // Using 'status' instead of 'statusCode'
  res.status(statusCode).json({
    message: err.message,
    errorStack: config.enviornment === "development" ? err.stack : "", // if the config enviournment = production then no error stack will be visible
  });
};

export default Global_Error_handler
