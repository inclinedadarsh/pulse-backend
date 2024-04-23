import crypto from "crypto";
const SECRET_KEY = "0a2f1b189d77962f";
// Password for user 1: Password@2024
// Password for user 2: SimpleApplication#96
const password = "Password@2024";
const hash = crypto
    .createHmac("sha256", SECRET_KEY)
    .update(password)
    .digest("hex");

console.log(hash);
