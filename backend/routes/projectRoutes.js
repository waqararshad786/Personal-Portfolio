import express from 'express';
import { getProjects, getProjectById } from '../controllers/projectController.js';

const router = express.Router();

// GET /api/projects - Get all projects
router.get('/', getProjects);

// GET /api/projects/:id - Get single project
router.get('/:id', getProjectById);

export default router;