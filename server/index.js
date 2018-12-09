const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const PORT = 3001;
const start = () => console.log(`Starting server on Port:${PORT}`);
const app = express();

app.use(cors());
app.use(routes);
app.listen(PORT, start);
