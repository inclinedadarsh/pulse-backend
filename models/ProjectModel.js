// models/ProjectModel.ts

import mongoose, { Document, Schema } from "mongoose";

const projectSchema = new Schema({
    name: { type: String, required: true },
    team: [{ type: Schema.Types.ObjectId, ref: "User", required: true }],
    description: { type: String, required: true },
    submissions: [
        {
            assignment: {
                type: Schema.Types.ObjectId,
                ref: "Assignment",
                required: true,
            },
            teamSubmission: {
                type: Boolean,
                default: false,
            },
            contributor: {
                type: Schema.Types.ObjectId,
                ref: "User",
            },
            answer: {
                type: String,
            },
        },
    ],
    fromSession: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Session",
        required: true,
    },
});

const ProjectModel = mongoose.model("Project", projectSchema);

export default ProjectModel;
