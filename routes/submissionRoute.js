// routes/assignmentRoute.js

import UserModel from "../models/UserModel";
import ProjectModel from "../models/ProjectModel";
import AssignmentModel from "../models/AssignmentModel";
import SessionModel from "../models/SessionModel";
import SubmissionModel from "../models/SubmissionModel";
import express from "express";

const router = express.Router();

// POST /assignment
router.post("/", async (req, res) => {
    try {
        const { id, answer } = req.body;

        // Check if submission ID and answer are provided
        if (!id || !answer) {
            return res
                .status(400)
                .json({ error: "Submission ID and answer are required" });
        }

        const project = await ProjectModel.findOne();

        // Find the submission within the project's submissions array
        const submission = project.submissions.find(
            (sub) => sub._id.toString() === id
        );

        // Check if the submission exists
        if (!submission) {
            return res.status(404).json({ error: "Submission not found" });
        }

        // Update the answer
        submission.answer = answer;

        // Save the updated submission
        await project.save();

        res.status(200).json({
            message: "Submission updated successfully",
            submission,
        });
    } catch (error) {
        console.error("Error updating submission:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// PATCH /assignment/:id/marks
router.patch("/", async (req, res) => {
    try {
        const { id, marks } = req.body;

        // Check if submission ID and marks are provided
        if (!id || !marks) {
            return res
                .status(400)
                .json({ error: "Submission ID and marks are required" });
        }

        const project = await ProjectModel.findOne();

        // Find the submission within the project's submissions array
        const submission = project.submissions.find(
            (sub) => sub.assignment.toString() === id
        );

        // Check if the submission exists
        if (!submission) {
            return res.status(404).json({ error: "Submission not found" });
        }

        // Update the marks
        submission.marks = marks;
        console.log(project);

        // Save the updated project
        await project.save();

        res.status(200).json({
            message: "Marks updated successfully",
            submission,
        });
    } catch (error) {
        console.error("Error updating marks:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

export default router;
