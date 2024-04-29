// models/AssignmentModel.ts

import mongoose, { Document, Schema } from "mongoose";

export interface Assignment extends Document {
    name: string;
    description: string;
    dueDate: Date;
}

const assignmentSchema: Schema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    dueDate: { type: Date, required: true },
});

const AssignmentModel = mongoose.model<Assignment>(
    "Assignment",
    assignmentSchema
);

export default AssignmentModel;
