// models/ProjectModel.ts

import mongoose, { Document, Schema } from "mongoose";

const projectSchema = new Schema({
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

const ProjectModel = mongoose.model("Project", projectSchema);

export default ProjectModel;
