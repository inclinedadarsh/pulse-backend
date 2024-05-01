import mongoose from "mongoose";

const submissionSchema = new mongoose.Schema({
    assignment: {
        type: Schema.Types.ObjectId,
        ref: "Assignment",
        required: true,
    },
    answer: { type: String, required: true, default: "" },
    // Other submission properties
});

const SubmissionModel = mongoose.model("Submission", submissionSchema);

export default SubmissionModel;
