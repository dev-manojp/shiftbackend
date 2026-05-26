import express from "express";
import cors from "cors";
import helmet from "helmet";
import authRoutes from "./routes/auth.routes.js";


const app = express();

app.use(cors());
app.use(helmet());

app.use(express.json());

// app.get("/", (req, res) => {
//   res.json({
//     success: true,
//     message: "Shift Swip API Running",
//   });
// });


app.use("/api/auth", authRoutes);

export default app;