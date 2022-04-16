import express from "express";
import cors from "cors";

import apiRoutes from "./routes";
import errorHandler from "./error-handler";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", apiRoutes);

app.get("/api/ping", (_req, res) => {
  res.send("pong");
});

app.use(errorHandler);

export default app;
