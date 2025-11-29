# Vijay Arora - Data Scientist Portfolio

A modern, responsive portfolio website showcasing my experience as a Data Scientist, featuring projects, skills, experience, and a contact form.

🌐 **Live Site**: [vijay-arora.github.io/vijay-arora-portfolio](https://vijay-arora.github.io/vijay-arora-portfolio)

## 🚀 Features

- **Modern UI/UX**: Dark theme with teal accents, glassmorphism effects, and smooth animations
- **Responsive Design**: Fully responsive across all devices
- **Interactive Sections**:
  - Hero section with key highlights
  - About section with education and expertise
  - Experience timeline
  - Skills showcase with proficiency levels
  - Featured projects with detailed case studies
  - Contact form with email integration
- **Email Integration**: Contact form sends emails via Gmail SMTP
- **Resume Download**: Direct download link for CV
- **Social Links**: GitHub and LinkedIn integration

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **React Router** - Client-side routing
- **Lucide React** - Icon library

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **Nodemailer** - Email sending
- **CORS** - Cross-origin resource sharing

### Deployment
- **GitHub Pages** - Frontend hosting
- **Vercel** - Backend API hosting (optional)
- **GitHub Actions** - CI/CD automation

## 📋 Prerequisites

- Node.js >= 18.0.0
- npm or yarn
- Git

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Vijay-Arora/vijay-arora-portfolio.git
   cd vijay-arora-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   # Email Configuration (for contact form)
   GMAIL_USER=your-email@gmail.com
   GMAIL_APP_PASSWORD=your-16-character-app-password
   RECIPIENT_EMAIL=va.data.professional@gmail.com
   
   # Optional: Supabase (for database)
   SUPABASE_URL=your_supabase_url
   SUPABASE_KEY=your_supabase_key
   ```
   
   Or use the setup script:
   ```bash
   ./setup-email.sh
   ```

4. **Start development server**
   ```bash
   # Terminal 1: Start frontend
   npm run dev
   
   # Terminal 2: Start backend server
   npm run server:dev
   ```

5. **Open in browser**
   - Frontend: http://localhost:8080
   - Backend API: http://localhost:3001

## 📁 Project Structure

```
vijay-arora-portfolio/
├── public/                 # Static assets
│   ├── favicon.svg         # Custom VJ logo favicon
│   ├── CV_Vijay_Arora.pdf  # Resume
│   └── *.png               # Project images
├── src/
│   ├── components/         # React components
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   └── ui/             # shadcn/ui components
│   ├── pages/              # Page components
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions
│   └── index.css           # Global styles
├── server/                 # Backend API
│   └── index.js            # Express server
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions deployment
└── vercel.json             # Vercel configuration
```

## 🚢 Deployment

### GitHub Pages (Automatic)

The project is configured with GitHub Actions for automatic deployment:

1. Push to `main` branch
2. GitHub Actions automatically builds and deploys to `gh-pages` branch
3. Enable GitHub Pages in repository settings:
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages`
   - Click Save

### Manual Deployment

```bash
npm run build
npm run deploy
```

### Backend Deployment (Vercel)

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Add environment variables in Vercel dashboard:
   - `GMAIL_USER`
   - `GMAIL_APP_PASSWORD`
   - `RECIPIENT_EMAIL`
   - `SUPABASE_URL` (optional)
   - `SUPABASE_KEY` (optional)

## 📧 Email Setup

The contact form requires Gmail App Password setup. See [EMAIL_SETUP.md](./EMAIL_SETUP.md) for detailed instructions.

Quick setup:
1. Enable 2-Step Verification on your Google account
2. Generate App Password: https://myaccount.google.com/apppasswords
3. Add credentials to `.env` file

## 🎨 Customization

### Update Personal Information

- **About Section**: Edit `src/components/About.tsx`
- **Experience**: Edit `src/components/Experience.tsx`
- **Skills**: Edit `src/components/Skills.tsx`
- **Projects**: Edit `src/components/Projects.tsx`
- **Contact Info**: Edit `src/components/Contact.tsx`

### Update Theme Colors

Edit `src/index.css` to customize the color scheme:
- Primary color (teal): `--primary: 174 83% 50%`
- Background: `--background: 215 27% 8%`

### Update Favicon

Replace `public/favicon.svg` with your custom logo.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run server` - Start backend server
- `npm run server:dev` - Start backend with nodemon (auto-reload)
- `npm run deploy` - Deploy to GitHub Pages

## 🤝 Contributing

This is a personal portfolio project. If you'd like to use it as a template:

1. Fork the repository
2. Update personal information
3. Customize the design
4. Deploy to your own GitHub Pages

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: va.data.professional@gmail.com
- **LinkedIn**: [vijay-aroraji](https://www.linkedin.com/in/vijay-aroraji)
- **GitHub**: [@Vijay-Arora](https://github.com/Vijay-Arora)

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev/) and [React](https://react.dev/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Deployed on [GitHub Pages](https://pages.github.com/)

---

⭐ If you find this portfolio useful, please give it a star!
