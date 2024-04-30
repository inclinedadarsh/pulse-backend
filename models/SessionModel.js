// models/SessionModel.ts

import mongoose, { Document, Schema } from "mongoose";

const sessionSchema = new Schema({
    title: { type: String, required: true },
    projects: [
        { type: Schema.Types.ObjectId, ref: "Project", required: false },
    ],
    creator: { type: Schema.Types.ObjectId, ref: "User", required: true },
    assignments: [{ type: Schema.Types.ObjectId, ref: "Assignment" }],
    isLive: { type: Boolean, default: true },
});

const SessionModel = mongoose.model("Session", sessionSchema);

export default SessionModel;
