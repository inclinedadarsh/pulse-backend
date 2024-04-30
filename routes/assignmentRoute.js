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

        if (!title || !description || !dueDate || !fromSession) {
            return res.status(400).json({
                error: "Title, description, dueDate, and fromSession are required",
            });
        }

        const assignment = new AssignmentModel({
            title,
            description,
            dueDate,
            fromSession,
        });

        await assignment.save();

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
