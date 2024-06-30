import express from "express";
import HealthCheckController from "../controllers/healthcheck.controller.js";

const healthCheckRouter = express.Router();

healthCheckRouter.get("/", HealthCheckController.healthCheck);

export default healthCheckRouter;