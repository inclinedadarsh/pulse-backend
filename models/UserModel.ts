// models/UserModel.ts

import mongoose, { Document, Schema } from "mongoose";

export interface User extends Document {
    name: string;
}

const userSchema: Schema = new Schema({
    name: { type: String, required: true },
});

const UserModel = mongoose.model<User>("User", userSchema);

export default UserModel;
