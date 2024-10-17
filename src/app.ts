import express, { NextFunction, Request, Response } from "express"; // use lowercase "express"

import createHttpError, { HttpError } from "http-errors";
import { config } from "./config/config";
import Global_Error_handler from "./middleware/globalErrorHandler";

const app = express(); // call express() to create the app instance

app.get("/", (req, res, next) => {
  // res.json({ message: "welcome here" });  // if this message is not commented then the browser will show "welcome here" and not the error code
    const error = createHttpError(400, "Something went wrong");
    throw error;
});

app.use(Global_Error_handler)



export default app; // export the app instance, not app()
