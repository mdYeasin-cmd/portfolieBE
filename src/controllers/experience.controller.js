import ExperienceService from "../services/experience.service.js";
import tryCatchHandler from "../utils/tryCatchHandler.js";

class ExperienceController {
    static addAExperience = tryCatchHandler(async (req, res) => {
        const result = await ExperienceService.addAExperience(req.body);

        res.status(201).json(result);
    });
}

export default ExperienceController;
