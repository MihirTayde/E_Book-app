import express from "express"; // use lowercase "express"

const app = express(); // call express() to create the app instance

app.get("/", (req, res, next) => {
  res.json({
    message: "welcome here",
  });
});

export default app; // export the app instance, not app()
