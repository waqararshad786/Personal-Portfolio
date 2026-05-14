import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import projectRoutes from './routes/projectRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();
connectDB();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Rate limiting for contact form (prevent spam)
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // max 5 requests per IP
  message: { success: false, message: 'Too many messages. Please try again later.' },
});

// CORS – restrict to your frontend domain (change to your actual domain)
app.use(cors({
  origin: 'http://localhost:3000', // or your frontend URL
  credentials: true,
}));

app.use(express.json());

// Serve static files (e.g., CV PDF)
app.use('/uploads', express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static('uploads'));
// Routes
app.use('/api/projects', projectRoutes);
app.use('/api/contact', contactLimiter, contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));