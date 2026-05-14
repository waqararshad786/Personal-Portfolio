import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true,
    trim: true 
  },
  description: { 
    type: String, 
    required: true 
  },
  techStack: { 
    type: [String], 
    required: true 
  },
  liveUrl: { 
    type: String, 
    required: true 
  },
  githubUrl: { 
    type: String, 
    required: true 
  },
  image: { 
    type: String 
  },
  category: { 
    type: String, 
    enum: ['mern', 'frontend', 'backend'],
    default: 'frontend'
  },
  featured: { 
    type: Boolean, 
    default: false 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

export default mongoose.model('Project', projectSchema);