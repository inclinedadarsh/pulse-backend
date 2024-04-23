import express from "express";
import crypto from "crypto";

const router = express.Router();

const USER1_USERNAME = process.env.USER1_USERNAME;
const USER1_PASSWORD_HASH = process.env.USER1_PASSWORD_HASH;
const USER2_USERNAME = process.env.USER2_USERNAME;
const USER2_PASSWORD_HASH = process.env.USER2_PASSWORD_HASH;
const SECRET_KEY = process.env.SECRET_KEY;

const hashPassword = (password: string) => {
    const hash = crypto
        .createHmac("sha256", SECRET_KEY!)
        .update(password)
        .digest("hex");
    return hash;
};

router.post("/", (req, res) => {
    const { username, password } = req.body;

    const hashedPassword = hashPassword(password);
    console.log(username);
    console.log(USER1_USERNAME);
    console.log(username == USER1_USERNAME);

    if (username == USER1_USERNAME && hashedPassword == USER1_PASSWORD_HASH) {
        return res.json({
            success: true,
            dashboard: "dashboard1",
        });
    }

    if (username == USER2_USERNAME && hashedPassword == USER2_PASSWORD_HASH) {
        return res.json({
            success: true,
            dashboard: "dashboard2",
        });
    }

    return res
        .status(401)
        .json({ success: false, message: "Invalid Credentials" });
});

export default router;
