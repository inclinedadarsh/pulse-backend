// models/SessionModel.ts

import mongoose, { Document, Schema } from "mongoose";
import type { Project } from "./ProjectModel"; // Assuming ProjectModel is the model for projects
// Assuming ProjectModel is the model for projects
// Assuming ProjectModel is the model for projects
import type { User } from "./UserModel"; // Assuming UserModel is the model for users
// Assuming UserModel is the model for users
// Assuming UserModel is the model for users
import type { Assignment } from "./AssignmentModel"; // Assuming AssignmentModel is the model for assignments
// Assuming AssignmentModel is the model for assignments

export interface Session extends Document {
    title: string;
    projects: Project["_id"][];
    creator: User["_id"];
    assignments: Assignment["_id"][];
}

const sessionSchema: Schema = new Schema({
    title: { type: String, required: true },
    projects: [{ type: Schema.Types.ObjectId, ref: "Project", required: true }],
    creator: { type: Schema.Types.ObjectId, ref: "User", required: true },
    assignments: [{ type: Schema.Types.ObjectId, ref: "Assignment" }],
});

const SessionModel = mongoose.model<Session>("Session", sessionSchema);

export default SessionModel;
