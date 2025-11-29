# Environment Variables Setup

Create a `.env` file in the root directory with the following content:

```env
# ============================================
# PORTFOLIO WEBSITE - ENVIRONMENT VARIABLES
# ============================================

# ============================================
# SERVER CONFIGURATION
# ============================================
PORT=3001
NODE_ENV=development

# ============================================
# SUPABASE CONFIGURATION (Optional)
# ============================================
# Uncomment and fill these if you want to use Supabase for database storage
# Get these from: https://app.supabase.com/project/_/settings/api
# SUPABASE_URL=https://your-project-id.supabase.co
# SUPABASE_KEY=your-supabase-anon-key

# ============================================
# EMAIL CONFIGURATION
# ============================================
# Option 1: Gmail with App Password (Recommended - Easiest Setup)
# Steps to get Gmail App Password:
# 1. Go to https://myaccount.google.com/security
# 2. Enable 2-Step Verification
# 3. Go to https://myaccount.google.com/apppasswords
# 4. Generate app password for "Mail"
# 5. Use the 16-character password below (NOT your regular Gmail password)
GMAIL_USER=va.data.professional@gmail.com
GMAIL_APP_PASSWORD=your-16-character-app-password-here

# Option 2: Custom SMTP Server (Alternative to Gmail)
# Uncomment and configure if using a different email provider (SendGrid, Mailgun, etc.)
# EMAIL_HOST=smtp.sendgrid.net
# EMAIL_PORT=587
# EMAIL_USER=apikey
# EMAIL_PASS=your-smtp-password-here

# Recipient Email - Where contact form messages will be sent
RECIPIENT_EMAIL=va.data.professional@gmail.com

# ============================================
# FRONTEND CONFIGURATION
# ============================================
# API URL for frontend to connect to backend
# Leave empty for auto-detection (localhost:3001 in dev, production URL in prod)
# VITE_API_URL=http://localhost:3001
```

## Quick Setup Steps

1. **Create the .env file:**
   ```bash
   touch .env
   ```

2. **Copy the content above** into your `.env` file

3. **Fill in your Gmail App Password:**
   - Go to https://myaccount.google.com/apppasswords
   - Generate a new app password for "Mail"
   - Replace `your-16-character-app-password-here` with the generated password

4. **Optional - Add Supabase (if you want database storage):**
   - Get your Supabase URL and key from https://app.supabase.com
   - Uncomment and fill in `SUPABASE_URL` and `SUPABASE_KEY`

5. **For Production:**
   - Set `NODE_ENV=production`
   - Update `VITE_API_URL` with your production backend URL
   - Set all environment variables in your hosting platform (Vercel, etc.)

## Important Notes

- ✅ The `.env` file is already in `.gitignore` - it won't be committed to git
- ✅ Never share your `.env` file or commit it to version control
- ✅ Gmail App Password is different from your regular Gmail password
- ✅ Supabase is optional - the contact form will work with just email configuration
- ✅ For local development, you can leave `VITE_API_URL` empty (it auto-detects)

