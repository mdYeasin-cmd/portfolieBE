import express from "express";

// import all application routes
import experienceRouter from "./routes/experience.route.js";
import healthCheckRouter from "./routes/healthcheck.route.js";

const app = express();

// common middlewares
app.use(express.json());

// all application routes
app.use("/api/v1/healthcheck", healthCheckRouter);
app.use("/api/v1/experiences", experienceRouter);

// global error handler
app.use((err, req, res, next) => {
    console.error(err, "Error from global error handler");
    res.status(500).send('Something broke!')
})

export default app;
