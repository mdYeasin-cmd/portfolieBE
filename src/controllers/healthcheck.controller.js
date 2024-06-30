import { ApiResponse } from "../utils/ApiResponse.js";
import tryCatchHandler from "../utils/tryCatchHandler.js";

class HealthCheckController {
    static healthCheck = tryCatchHandler(async (req, res) => {
        return res
            .status(200)
            .json(new ApiResponse(200, "Portfolio server health check passed!", null));
    });
}

export default HealthCheckController;