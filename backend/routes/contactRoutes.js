import express from 'express';
import { submitContact } from '../controllers/contactController.js';

const router = express.Router();

// Only POST for contact form submission
router.post('/', submitContact);

export default router;