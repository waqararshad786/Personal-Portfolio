import Contact from '../models/Contact.js';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

// Create transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const submitContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'All fields are required' 
      });
    }

    // Save to MongoDB
    const contact = await Contact.create({ name, email, message });
    console.log(`📝 Contact saved: ${name}`);

    // Send email (don't wait for it)
    try {
      await transporter.sendMail({
        from: `"Portfolio" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        subject: `New message from ${name}`,
        html: `<h3>New Contact</h3><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong></p><p>${message}</p>`,
      });
      console.log(`📧 Email sent`);
    } catch (emailError) {
      console.error('Email error:', emailError.message);
      // Don't fail the request if email fails
    }

    res.status(201).json({ 
      success: true, 
      message: 'Message sent successfully!' 
    });
    
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send message' 
    });
  }
};