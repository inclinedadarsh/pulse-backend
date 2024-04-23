import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";

// Importing all the routings
import loginRouter from "./routes/loginRoute";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.json({
        success: "ok",
    });
});

app.use("/login", loginRouter);

app.listen(PORT, () => {
    console.log("Server has started!");
});
