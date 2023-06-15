const express = require("express");
const cors = require("cors");
const routesApi = require("./routes");
const { initDatabase } = require("./database");


const app = express();
app.use(express.json());
app.use(cors());

// initDatabase();

routesApi(app);

module.exports = app;