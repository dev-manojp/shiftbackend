import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import authRoutes from "./routes/auth.routes.js";
import profileRoutes from "./routes/profile.routes.js";
import userRoutes from "./routes/user.routes.js";


const app = express();


app.use(cors());
app.use(helmet());
app.use(morgan('dev'));


app.use(express.json());

// app.get("/", (req, res) => {
//   res.json({
//     success: true,
//     message: "Shift Swip API Running",
//   });
// });


app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/profile", profileRoutes);

export default app;