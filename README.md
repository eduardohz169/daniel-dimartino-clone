# Daniel Di Martino - Website Clone

A professional website clone of Daniel Di Martino's personal site, built for educational purposes.

## 🚀 Demo

View the live site: [Coming Soon]

### Open in Development Environments

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/eduardohz169/daniel-dimartino-clone)
[![Open in bolt.new](https://img.shields.io/badge/Open%20in-bolt.new-blue)](https://bolt.new/github.com/eduardohz169/daniel-dimartino-clone)

## ✨ Features

- **Responsive Design** - Fully responsive across all devices
- **Modern UI/UX** - Clean and professional design with smooth animations
- **Multiple Sections:**
  - Hero section with background image
  - Speaker section showcasing topics
  - Economist section highlighting research
  - Media appearances showcase
  - About section with biography
  - Inspirational quote section
  - Affiliations with organization cards
  - Contact form
  - Social media integration

## 🛠️ Tech Stack

- **Framework:** Next.js 15.3.2 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **Font:** Libre Baskerville (serif) & Inter (sans-serif)
- **Build Tool:** Bun
- **Deployment:** Netlify
- **Compatible:** ✅ bolt.new, ✅ StackBlitz, ✅ CodeSandbox

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/eduardohz169/daniel-dimartino-clone.git

# Navigate to project directory
cd daniel-dimartino-clone

# Install dependencies
bun install

# Run development server
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### 🔥 Quick Start with bolt.new

1. Click the "Open in bolt.new" badge above
2. Wait for dependencies to install automatically
3. The development server will start automatically
4. Start editing and see changes in real-time!

**Or manually:**
- Go to [bolt.new](https://bolt.new)
- Import from GitHub: `https://github.com/eduardohz169/daniel-dimartino-clone`

## 🏗️ Project Structure

```
daniel-dimartino-clone/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Main homepage
│   │   ├── layout.tsx         # Root layout
│   │   └── globals.css        # Global styles
│   ├── components/
│   │   └── ui/                # shadcn/ui components
│   └── lib/
│       └── utils.ts           # Utility functions
├── public/                    # Static assets
└── package.json
```

## 🎨 Customization

### Fonts
The project uses Google Fonts:
- **Libre Baskerville** for headings
- **Inter** for body text

### Colors
- Primary: Black (#000000)
- Background: White (#FFFFFF)
- Accent: Gray shades

## 📝 Available Scripts

```bash
bun run dev      # Start development server
bun run build    # Build for production
bun run start    # Start production server
bun run lint     # Run ESLint
```

## 🌐 Deployment

### Netlify (Recommended)

This project is configured for deployment on Netlify. The `netlify.toml` configuration is included.

To deploy:

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Deploy!

### Vercel

Also compatible with Vercel:

```bash
bunx vercel
```

### bolt.new

Use bolt.new to edit and deploy in one place:

1. Open the project in bolt.new (click badge above)
2. Make your changes
3. Deploy directly from bolt.new to Netlify or Vercel

## 📄 License

This project is for educational purposes only.

## 🙏 Acknowledgments

- Original website: [danieldimartino.com](https://www.danieldimartino.com/)
- Built with [Same](https://same.new)

---

**Note:** This is a clone created for educational purposes to demonstrate web development skills.
