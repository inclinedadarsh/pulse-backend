// models/AssignmentModel.ts

import mongoose, { Document, Schema } from "mongoose";

const assignmentSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    dueDate: { type: Date, required: true },
});

const AssignmentModel = mongoose.model("Assignment", assignmentSchema);

export default AssignmentModel;
