#!/bin/bash

# Email Setup Script for Portfolio Contact Form
# This script helps you set up the .env file for email functionality

echo "============================================"
echo "Portfolio Email Setup"
echo "============================================"
echo ""

# Check if .env already exists
if [ -f .env ]; then
    echo "⚠️  .env file already exists!"
    read -p "Do you want to overwrite it? (y/N): " overwrite
    if [ "$overwrite" != "y" ] && [ "$overwrite" != "Y" ]; then
        echo "Setup cancelled."
        exit 0
    fi
fi

echo "This script will help you set up email sending from the contact form."
echo ""
echo "You'll need:"
echo "  1. A Gmail account (va.data.professional@gmail.com)"
echo "  2. Gmail App Password (16-character password)"
echo ""
echo "To get your Gmail App Password:"
echo "  1. Go to: https://myaccount.google.com/security"
echo "  2. Enable 2-Step Verification (if not already enabled)"
echo "  3. Go to: https://myaccount.google.com/apppasswords"
echo "  4. Select 'Mail' and 'Other (Custom name)'"
echo "  5. Enter 'Portfolio Contact Form'"
echo "  6. Click 'Generate' and copy the 16-character password"
echo ""
read -p "Press Enter to continue..."

echo ""
read -p "Enter your Gmail address [va.data.professional@gmail.com]: " gmail_user
gmail_user=${gmail_user:-va.data.professional@gmail.com}

echo ""
read -p "Enter your Gmail App Password (16 characters): " gmail_pass

echo ""
read -p "Enter recipient email [va.data.professional@gmail.com]: " recipient
recipient=${recipient:-va.data.professional@gmail.com}

# Create .env file
cat > .env << EOF
# ============================================
# PORTFOLIO WEBSITE - ENVIRONMENT VARIABLES
# ============================================

# ============================================
# SERVER CONFIGURATION
# ============================================
PORT=3001
NODE_ENV=development

# ============================================
# EMAIL CONFIGURATION
# ============================================
GMAIL_USER=$gmail_user
GMAIL_APP_PASSWORD=$gmail_pass

# Recipient Email - Where contact form messages will be sent
RECIPIENT_EMAIL=$recipient

# ============================================
# FRONTEND CONFIGURATION
# ============================================
# API URL for frontend to connect to backend
# Leave empty for auto-detection
# VITE_API_URL=http://localhost:3001
EOF

echo ""
echo "✅ .env file created successfully!"
echo ""
echo "Next steps:"
echo "  1. Start the server: npm run server:dev"
echo "  2. Start the frontend: npm run dev"
echo "  3. Test the contact form"
echo ""
echo "⚠️  Important: Make sure .env is in .gitignore (it should be already)"

