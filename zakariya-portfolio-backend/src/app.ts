import cors from "cors"; // line 1
import express from "express"; // line 2
import profileRoutes from "./routes/profile.routes"; // line 8

const app = express(); // line 2 error?

app.use(cors());
app.use(express.json());
app.use("/api/profiles", profileRoutes);

export default app;
