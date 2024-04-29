// models/ProjectModel.ts

import mongoose, { Document, Schema } from "mongoose";
import { User } from "./UserModel"; // Assuming UserModel is the model for users
import { Assignment } from "./AssignmentModel"; // Assuming AssignmentModel is the model for assignments

export interface Project extends Document {
    name: string;
    team: User["_id"][];
    description: string;
    assignments: { assignment: Assignment["_id"]; answer: string }[];
}

const projectSchema: Schema = new Schema({
    name: { type: String, required: true },
    team: [{ type: Schema.Types.ObjectId, ref: "User", required: true }],
    description: { type: String, required: true },
    assignments: [
        {
            assignment: {
                type: Schema.Types.ObjectId,
                ref: "Assignment",
                required: true,
            },
            answer: { type: String, required: true },
        },
    ],
});

const ProjectModel = mongoose.model<Project>("Project", projectSchema);

export default ProjectModel;
