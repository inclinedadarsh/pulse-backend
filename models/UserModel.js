// models/UserModel.ts

import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name: { type: String, required: true },
});

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
