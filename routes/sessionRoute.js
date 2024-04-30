// routes/sessionRoute.ts

import UserModel from "../models/UserModel";
import ProjectModel from "../models/ProjectModel";
import AssignmentModel from "../models/AssignmentModel";
import SessionModel from "../models/SessionModel";
import express from "express";

const router = express.Router();

// GET /session
router.get("/", async (req, res) => {
    try {
        const sessions = await SessionModel.find()
            .populate("projects")
            .populate("creator")
            .populate("assignments")
            .exec();
        res.status(200).json(sessions);
    } catch (error) {
        console.error("Error fetching sessions:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

router.post("/", async (req, res) => {
    try {
        const { title, projects, creator, assignments, isLive } = req.body;

        const newSession = new SessionModel({
            title,
            projects,
            creator,
            assignments,
            isLive,
        });

        // Save the new session document to the database
        const savedSession = await newSession.save();

        res.status(201).json(savedSession); // Return the saved session
    } catch (error) {
        console.error("Error creating session:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

export default router;
