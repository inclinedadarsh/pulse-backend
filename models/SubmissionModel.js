import mongoose from "mongoose";

const submissionSchema = new mongoose.Schema({
    assignment: {
        type: Schema.Types.ObjectId,
        ref: "Assignment",
        required: true,
    },
    teamSubmission: { type: Boolean, default: false }, // Indicates whether it's a team submission or individual
    team: [{ type: Schema.Types.ObjectId, ref: "User" }], // Only for team submission
    contributor: { type: Schema.Types.ObjectId, ref: "User" }, // For individual submission
    answer: { type: String, required: true },
    // Other submission properties
});

const SubmissionModel = mongoose.model("Submission", submissionSchema);

export default SubmissionModel;
