import "dotenv/config";

export default {
    env: process.env.NODE_ENV,
    port: process.env.PORT,
    hostname: process.env.HOSTNAME,
    db_url: process.env.DB_URL,
};
