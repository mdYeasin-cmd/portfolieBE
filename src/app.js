import express from "express";

// import all routes
import experienceRouter from "./routes/experience.route.js";

const app = express();

app.use("/api/v1/experiences", experienceRouter);

app.get("/test", (req, res) => {
    res.status(200).json({
        message: "Portfolio server is running...",
    });
});

export default app;
