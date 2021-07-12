import express from "express";
import cors from "cors";

import { Items } from "./itemsRouter.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", Items);

export default app;
