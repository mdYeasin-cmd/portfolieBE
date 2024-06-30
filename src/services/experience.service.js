import Experience from "../models/experience.model.js";

class ExperienceService {
    static async addAExperience(payload) {
        const result = await Experience.create(payload);

        return result;
    }
}

export default ExperienceService;
