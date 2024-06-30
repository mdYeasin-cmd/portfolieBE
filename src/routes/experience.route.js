import express from "express";
import ExperienceController from "../controllers/experience.controller.js";

const experienceRouter = express.Router();

experienceRouter.post("/", ExperienceController.addAExperience);

export default experienceRouter;
