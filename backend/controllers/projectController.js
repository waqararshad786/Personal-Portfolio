import Project from '../models/Project.js';

// @desc    Get all projects (public)
export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    
    // If no projects in DB, return empty array (not error)
    res.json(projects || []);
    
  } catch (error) {
    console.error('❌ Projects fetch error:', error.message);
    res.status(500).json({ 
      message: 'Error fetching projects',
      error: error.message 
    });
  }
};

// @desc    Get single project
export const getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    
    res.json(project);
  } catch (error) {
    console.error('❌ Project fetch error:', error.message);
    res.status(500).json({ message: error.message });
  }
};