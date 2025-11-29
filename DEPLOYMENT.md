# Deployment Guide

This project uses a dual deployment strategy:
- **Frontend**: GitHub Pages (automatic via GitHub Actions)
- **Backend API**: Vercel (serverless functions)

## 🚀 Frontend Deployment (GitHub Pages)

### Prerequisites

1. Repository is on GitHub: `https://github.com/Vijay-Arora/vijay-arora-portfolio`
2. You have write access to the repository

### Setup GitHub Pages

1. Go to your GitHub repository: https://github.com/Vijay-Arora/vijay-arora-portfolio
2. Click on **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **Deploy from a branch**
5. Choose **gh-pages** branch
6. Click **Save**

### Automatic Deployment

The project is configured with GitHub Actions that will automatically:
- Build your project when you push to `main` branch
- Deploy to GitHub Pages using the `gh-pages` branch
- Your site will be available at: `https://vijay-arora.github.io/vijay-arora-portfolio/`

### Manual Deployment

If you want to deploy manually:

```bash
npm run build
npm run deploy
```

### Check Deployment Status

- Go to: https://github.com/Vijay-Arora/vijay-arora-portfolio/actions
- Monitor the workflow run

## 🔧 Backend Deployment (Vercel)

### Prerequisites

1. Install Vercel CLI (if not already installed):
   ```bash
   npm i -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

### Deploy Backend

1. **Deploy to Vercel:**
   ```bash
   cd "/Users/sa/Downloads/Vijay Arora - Data Scientist"
   vercel
   ```

2. **Follow the prompts:**
   - Set up and deploy? **Yes**
   - Which scope? Select your account
   - Link to existing project? **No** (first time) or **Yes** (if redeploying)
   - Project name: `vijay-arora-portfolio-api` (or your preferred name)
   - Directory: `./` (current directory)
   - Override settings? **No**

3. **Set Environment Variables in Vercel Dashboard:**
   - Go to: https://vercel.com/dashboard
   - Select your project
   - Go to **Settings** → **Environment Variables**
   - Add the following:
     ```
     GMAIL_USER=va.data.professional@gmail.com
     GMAIL_APP_PASSWORD=your-16-character-app-password
     RECIPIENT_EMAIL=va.data.professional@gmail.com
     SUPABASE_URL=your_supabase_url (optional)
     SUPABASE_KEY=your_supabase_key (optional)
     NODE_ENV=production
     ```

4. **Redeploy after adding environment variables:**
   ```bash
   vercel --prod
   ```

### Update Frontend API URL

After deploying to Vercel, update the API URL in `src/components/Contact.tsx`:

```typescript
const apiUrl = import.meta.env.VITE_API_URL || 
               (import.meta.env.PROD 
                 ? 'https://your-vercel-project.vercel.app'  // Update this
                 : 'http://localhost:3001');
```

Or set `VITE_API_URL` in your build environment.

## 📝 Important Notes

- **Base Path**: Set to `/` in `vite.config.ts` for root domain deployment
- **First Deployment**: May take a few minutes to become available
- **GitHub Actions**: Automatically triggers on push to `main` branch
- **Vercel**: Automatically deploys on git push (if connected) or manual deploy

## 🔍 Troubleshooting

### Frontend Issues
- If the site shows 404, check that GitHub Pages is enabled and pointing to `gh-pages` branch
- Check the Actions tab for any build errors
- Verify the base path in `vite.config.ts` is set to `/`

### Backend Issues
- Verify environment variables are set in Vercel dashboard
- Check Vercel function logs for errors
- Ensure CORS is configured correctly in `server/index.js`
- Test API endpoints: `https://your-vercel-project.vercel.app/api/health`

## 🌐 Live URLs

After deployment:
- **Frontend**: https://vijay-arora.github.io/vijay-arora-portfolio/
- **Backend API**: https://your-vercel-project.vercel.app/api/
