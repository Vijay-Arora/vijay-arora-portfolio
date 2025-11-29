import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
import nodemailer from 'nodemailer';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing SUPABASE_URL or SUPABASE_KEY environment variables');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

// Initialize email transporter
const createTransporter = () => {
  // For Gmail, you can use OAuth2 or App Password
  // Using App Password is simpler for setup
  if (process.env.EMAIL_HOST && process.env.EMAIL_PORT && process.env.EMAIL_USER && process.env.EMAIL_PASS) {
    return nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT) || 587,
      secure: process.env.EMAIL_PORT === '465', // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  }
  // Fallback: Use Gmail with app password
  if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
    return nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });
  }
  return null;
};

const transporter = createTransporter();

// Middleware
app.use(cors({
  origin: [
    'http://localhost:3000',
    'http://localhost:5173',
    'http://localhost:8080',
    'https://swayam-arora-2004.github.io',
    'https://vijay-arora.github.io',
    /\.github\.io$/,
    /\.vercel\.app$/
  ],
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    success: true, 
    message: 'Portfolio API is running',
    timestamp: new Date().toISOString()
  });
});

// GET /api/projects - Fetch all projects
app.get('/api/projects', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('id', { ascending: true });

    if (error) {
      console.error('Supabase error:', error);
      return res.status(500).json({
        success: false,
        error: 'Failed to fetch projects from database'
      });
    }

    res.json({
      success: true,
      data: data || []
    });
  } catch (err) {
    console.error('Server error:', err);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
});

// POST /api/contact - Save contact form submission
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Name, email, and message are required fields'
      });
    }

    // Email validation (basic)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid email address'
      });
    }

    // Insert into Supabase (optional - comment out if you don't want to save to DB)
    let savedData = null;
    if (supabaseUrl && supabaseKey) {
      const { data, error } = await supabase
        .from('contacts')
        .insert([
          {
            name: name.trim(),
            email: email.trim().toLowerCase(),
            message: message.trim()
          }
        ])
        .select();

      if (error) {
        console.error('Supabase error:', error);
        // Continue even if DB save fails - email is more important
      } else {
        savedData = data[0];
      }
    }

    // Send email notification
    const recipientEmail = process.env.RECIPIENT_EMAIL || 'va.data.professional@gmail.com';
    
    if (transporter) {
      try {
        const mailOptions = {
          from: process.env.EMAIL_USER || process.env.GMAIL_USER || 'noreply@portfolio.com',
          to: recipientEmail,
          subject: `New Contact Form Submission from ${name.trim()}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #333; border-bottom: 2px solid #4F46E5; padding-bottom: 10px;">
                New Contact Form Submission
              </h2>
              <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p style="margin: 10px 0;"><strong>Name:</strong> ${name.trim()}</p>
                <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email.trim()}">${email.trim()}</a></p>
                <p style="margin: 10px 0;"><strong>Message:</strong></p>
                <div style="background-color: white; padding: 15px; border-radius: 4px; margin-top: 10px; border-left: 4px solid #4F46E5;">
                  ${message.trim().replace(/\n/g, '<br>')}
                </div>
              </div>
              <p style="color: #666; font-size: 12px; margin-top: 20px;">
                This email was sent from your portfolio contact form.
              </p>
            </div>
          `,
          text: `
New Contact Form Submission

Name: ${name.trim()}
Email: ${email.trim()}

Message:
${message.trim()}
          `,
        };

        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully to', recipientEmail);
      } catch (emailError) {
        console.error('Email sending error:', emailError);
        // Still return success if DB save worked, but log the email error
        if (!savedData) {
          return res.status(500).json({
            success: false,
            error: 'Failed to send email notification'
          });
        }
      }
    } else {
      console.warn('Email transporter not configured. Skipping email notification.');
    }

    res.status(201).json({
      success: true,
      message: 'Contact form submitted successfully',
      data: savedData
    });
  } catch (err) {
    console.error('Server error:', err);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
});

// 404 handler for API routes
app.use((req, res, next) => {
  if (req.path.startsWith('/api/')) {
    return res.status(404).json({
      success: false,
      error: 'API endpoint not found'
    });
  }
  next();
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({
    success: false,
    error: 'Internal server error'
  });
});

// Start server (for local development)
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`🚀 Portfolio API server running on port ${PORT}`);
    console.log(`📊 Health check: http://localhost:${PORT}/api/health`);
    console.log(`📁 Projects endpoint: http://localhost:${PORT}/api/projects`);
    console.log(`📧 Contact endpoint: http://localhost:${PORT}/api/contact`);
  });
}

export default app;