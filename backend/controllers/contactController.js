import Contact from '../models/Contact.js';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

// Create transporter once
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: { rejectUnauthorized: false }
});

// Verify connection on startup (optional)
transporter.verify((error, success) => {
  if (error) console.error('❌ Email config error:', error.message);
  else console.log('✅ Ready to send emails');
});

export const submitContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    // 1. Save to MongoDB
    await Contact.create({ name, email, message });

    // 2. Send email to you
    await transporter.sendMail({
      from: `"Waqar Portfolio" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New message from ${name}`,
      html: `
        <h3>Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    // Only return success if email was sent
    res.status(201).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Email error:', error.message);
    // Return error so frontend knows something went wrong
    res.status(500).json({ success: false, message: 'Failed to send message. Please try again later.' });
  }
};