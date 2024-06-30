import ExperienceService from "../services/experience.service.js";

class ExperienceController {
    static addAExperience = (req, res) => {

        const result = ExperienceService.addAExperience();

        res.status(200).json({
            message: "Hello I'm here!"
        });
    };
}

export default ExperienceController;