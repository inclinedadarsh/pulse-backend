// models/SessionModel.ts

import mongoose, { Document, Schema } from "mongoose";
import type { Project } from "./ProjectModel";
import type { User } from "./UserModel";
import type { Assignment } from "./AssignmentModel";

export interface Session extends Document {
    title: string;
    projects: Project["_id"][];
    creator: User["_id"];
    assignments: Assignment["_id"][];
}

const sessionSchema: Schema = new Schema({
    title: { type: String, required: true },
    projects: [
        { type: Schema.Types.ObjectId, ref: "Project", required: false },
    ],
    creator: { type: Schema.Types.ObjectId, ref: "User", required: true },
    assignments: [{ type: Schema.Types.ObjectId, ref: "Assignment" }],
});

const SessionModel = mongoose.model<Session>("Session", sessionSchema);

export default SessionModel;
