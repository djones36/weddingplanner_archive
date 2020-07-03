const express = require("express");
const helmet = require("helmet");
const server = express();
const cors = require("cors");
const restrictionMiddleware = require("../Middleware/restrictionMiddleware");
const logger = require("../Middleware/loggerMiddleware");
server.use(helmet(), express.json(), cors(), logger);

//Imports
const userRoute = require("./Routes/Auth/user/userRoute");
const weddingRoute = require("./Routes/Auth/weddingRoute");
const portfolioRoute = require("./Routes/nonAuth/portfolio/portfolioRoute");

//Routes
server.use("/api/auth/user", userRoute);
server.use("/api/auth/weddings", restrictionMiddleware, weddingRoute);
server.use("/api/portfolios", portfolioRoute);

//Deployment
server.get("/", (req, res) => {
  res.status(200).json("Successful Deployment");
});

module.exports = server;
