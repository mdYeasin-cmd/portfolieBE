import app from "./app.js";

const port = 5000;
const hostname = "127.0.0.1";

app.listen(port, () => {
    console.log(`Portfolio server is running at http://${hostname}:${port}`);
});