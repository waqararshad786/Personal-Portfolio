import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import projectRoutes from './routes/projectRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

dotenv.config();
connectDB();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Rate limiting for contact form (prevent spam)
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { success: false, message: 'Too many messages. Please try again later.' },
});

// CORS configuration
app.use(cors({
  origin: '*', // Allow all origins for now (update later)
  credentials: true,
}));

app.use(express.json());

// Ensure uploads directory exists
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
  console.log('✅ Uploads directory created');
}

// Serve static files from uploads folder
app.use('/uploads', express.static(uploadsDir));

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Server is running' });
});

// API Routes
app.use('/api/projects', projectRoutes);
app.use('/api/contact', contactLimiter, contactRoutes);

// 404 handler - FIXED: No wildcard issue
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Error:', err.stack);
  res.status(500).json({ success: false, message: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📁 Uploads directory: ${uploadsDir}`);
  
  // Check if CV exists
  const cvPath = path.join(uploadsDir, 'Resume - Waqar (1).pdf');
  if (fs.existsSync(cvPath)) {
    console.log(`✅ CV found at: /uploads/Resume - Waqar (1).pdf`);
  } else {
    console.log(`⚠️ CV not found. Make sure "Resume - Waqar (1).pdf" is in uploads folder`);
  }
});