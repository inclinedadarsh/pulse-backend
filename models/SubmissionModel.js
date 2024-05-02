import mongoose, { Schema } from "mongoose";

const submissionSchema = new Schema({
    assignment: {
        type: Schema.Types.ObjectId,
        ref: "Assignment",
        required: true,
    },
    answer: { type: String, required: true, default: "" },
    marks: {
        type: Number,
        required: true,
        default: 0,
    },
    // Other submission properties
});

const SubmissionModel = mongoose.model("Submission", submissionSchema);

export default SubmissionModel;
