// routes/sessionRoute.ts

import UserModel from "../models/UserModel";
import ProjectModel from "../models/ProjectModel";
import AssignmentModel from "../models/AssignmentModel";
import SessionModel from "../models/SessionModel";
import express from "express";

const router = express.Router();

// GET /session
router.post("/", async (req, res) => {
    try {
        const { projectId } = req.body;

        if (!projectId) {
            return res.status(400).json({ error: "Project ID is required" });
        }

        const project = await ProjectModel.findById(projectId)
            .populate({
                path: "team",
                select: "name", // Assuming only name field is needed from User model
            })
            .populate({
                path: "submissions.assignment",
                model: "Assignment",
                select: "title description",
            });

        if (!project) {
            return res.status(404).json({ error: "Project not found" });
        }

        res.status(200).json(project);
    } catch (error) {
        console.error("Error fetching project:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

export default router;
