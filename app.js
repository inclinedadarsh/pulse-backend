import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";

// Importing all the routings
import loginRouter from "./routes/loginRoute";
import sessionRouter from "./routes/sessionRoute";
import projectRouter from "./routes/projectRoute";
import assignmentRouter from "./routes/assignmentRoute";
import submissionRouter from "./routes/submissionRoute";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.json({
        success: "ok",
    });
});

app.use("/login", loginRouter);
app.use("/session", sessionRouter);
app.use("/project", projectRouter);
app.use("/assignment", assignmentRouter);
app.use("/submission", submissionRouter);

export default app;
