// routes/assignmentRoute.js

import UserModel from "../models/UserModel";
import ProjectModel from "../models/ProjectModel";
import AssignmentModel from "../models/AssignmentModel";
import SessionModel from "../models/SessionModel";
import express from "express";

const router = express.Router();

// POST /assignment
router.post("/", async (req, res) => {
    try {
        const { title, description, dueDate, fromSession } = req.body;

        // Check if all required fields are provided
        if (!title || !description || !dueDate || !fromSession) {
            return res.status(400).json({
                error: "All fields (title, description, dueDate, fromSession) are required",
            });
        }

        // Create a new assignment
        const assignment = new AssignmentModel({
            title,
            description,
            dueDate,
            fromSession,
        });

        // Save the assignment to the database
        await assignment.save();

        // Get the session from fromSession ID
        const session = await SessionModel.findById(fromSession);

        // Check if the session exists
        if (!session) {
            return res.status(404).json({ error: "Session not found" });
        }

        // Add the assignment ID to the session's assignments field
        session.assignments.push(assignment._id);

        // Save the updated session
        await session.save();

        // Update all projects associated with the session
        const project = await ProjectModel.findOne();
        console.log(project);

        project.submissions.push({
            assignment: assignment._id,
            answer: "",
            marks: 0,
        });
        await project.save();

        res.status(201).json({
            message: "Assignment created successfully",
            assignment,
        });
    } catch (error) {
        console.error("Error creating assignment:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

export default router;
