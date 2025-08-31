const express = require("express");
const cors = require("cors");
require("dotenv").config();

const fortuneCookieRoutes = require("./routes/fortuneCookieRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", fortuneCookieRoutes);

app.get("/", (_req, res, _next) => {
  res.json({
    message: "Fortune Cookie App Backend",
    endpoints: {
      "GET /api/lucky-numbers": "To get lucky numbers",
    },
  });
});

app.use("/{*any}", (_req, res, _next) => {
  res.status(404).json({ error: "Endpoint not found" });
});

module.exports = app;
