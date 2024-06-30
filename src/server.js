import app from "./app.js";
import mongoose from "mongoose";
import config from "./config/config.js";

async function main() {
    await mongoose.connect(config.db_url);
    console.log("Database connection established successfully.");
}

main()
    .then(() => {
        app.listen(config.port, () => {
            console.log(
                `Portfolio server is running at http://${config.hostname}:${config.port}`
            );
        });
    })
    .catch((err) => {
        console.log(err);
    });
