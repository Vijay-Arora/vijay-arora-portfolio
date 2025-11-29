# Email Setup Guide

This guide will help you configure email notifications for the contact form.

## Quick Setup with Gmail (Recommended)

### Step 1: Enable 2-Step Verification
1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable 2-Step Verification if not already enabled

### Step 2: Generate App Password
1. Go to [App Passwords](https://myaccount.google.com/apppasswords)
2. Select "Mail" as the app
3. Select "Other (Custom name)" as the device, enter "Portfolio Contact Form"
4. Click "Generate"
5. Copy the 16-character password (you'll use this as `GMAIL_APP_PASSWORD`)

### Step 3: Configure Environment Variables

**Option A: Use the setup script (Easiest)**
```bash
./setup-email.sh
```

**Option B: Create `.env` file manually**

Create a `.env` file in the root directory with:

```env
# Gmail Configuration
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-16-character-app-password

# Recipient Email (where you want to receive contact form messages)
RECIPIENT_EMAIL=va.data.professional@gmail.com

# Optional: Supabase (if you want to save messages to database)
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_key
```

### Step 4: Test the Setup

1. Start the server:
   ```bash
   npm run server:dev
   ```

2. Start the frontend:
   ```bash
   npm run dev
   ```

3. Fill out the contact form and submit
4. Check your email inbox for the notification

## Alternative: Custom SMTP Server

If you prefer to use a different email provider (like SendGrid, Mailgun, etc.):

```env
EMAIL_HOST=smtp.sendgrid.net
EMAIL_PORT=587
EMAIL_USER=apikey
EMAIL_PASS=your-sendgrid-api-key
RECIPIENT_EMAIL=va.data.professional@gmail.com
```

## Frontend Configuration

The frontend will automatically detect the API URL:
- **Development**: `http://localhost:3001`
- **Production**: `https://vijay-arora-portfolio.vercel.app` (or set `VITE_API_URL` environment variable)

**Note:** Make sure to deploy your server to Vercel and update the API URL in `Contact.tsx` if your Vercel project name is different.

## Troubleshooting

### Email not sending?
1. Check that your `.env` file is in the root directory
2. Verify your Gmail App Password is correct (not your regular password)
3. Check server logs for error messages
4. Ensure 2-Step Verification is enabled on your Google account

### CORS errors?
- Make sure your frontend URL is in the CORS whitelist in `server/index.js`
- For production, update the CORS origins array

### Database errors?
- The email will still send even if database save fails
- Database is optional - you can comment out Supabase code if you don't need it

## Production Deployment

For Vercel deployment, add these environment variables in your Vercel dashboard:
- `GMAIL_USER`
- `GMAIL_APP_PASSWORD`
- `RECIPIENT_EMAIL`
- `SUPABASE_URL` (optional)
- `SUPABASE_KEY` (optional)

