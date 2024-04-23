import crypto from "crypto";

const randomBuffer = crypto.randomBytes(8);
const randomHex = randomBuffer.toString("hex");
console.log(randomHex);
