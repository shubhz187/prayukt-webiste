# Prayukt - Modern Dark Theme Website

A minimalistic, modern dark-themed corporate website built with React, Vite, and inspired by Halma.com's structure.

## 🎨 Design Features

- **Modern Dark Theme**: Sleek black background with peacock-inspired colors (purple, blue, teal, gold)
- **3D Card Effects**: Interactive 3D transforms with perspective and depth on hover
- **Smooth Page Transitions**: Slide-in animations when navigating between pages
- **Parallax Scrolling**: Multi-layer depth effect that responds to scrolling
- **Peacock Theme Elements**: Animated feather patterns and floating particles
- **Glass Morphism**: Frosted glass effects on cards and navigation
- **Holographic Effects**: Shimmering light sweeps across elements
- **Neon Glow**: Dynamic glowing text effects with peacock colors
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Clean UI**: Minimalistic design with focus on content and user experience

## 🚀 Tech Stack

- **React 18**: Modern React with Hooks
- **Vite**: Lightning-fast build tool and dev server
- **React Router**: Client-side routing for seamless navigation
- **CSS3**: Custom styling with CSS variables and animations
- **Google Fonts**: Inter font family for clean typography

## 📁 Project Structure

```
prayukt-website/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx & Navbar.css
│   │   └── Footer.jsx & Footer.css
│   ├── pages/
│   │   ├── Home.jsx & Home.css
│   │   ├── WhoWeAre.jsx & WhoWeAre.css
│   │   ├── OurCompanies.jsx & OurCompanies.css
│   │   ├── HowWeGrow.jsx & HowWeGrow.css
│   │   ├── Investors.jsx & Investors.css
│   │   ├── News.jsx & News.css
│   │   └── Careers.jsx & Careers.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
└── package.json
```

## 🎯 Pages

1. **Home** - Hero section with company overview, stats, and featured content
2. **Who We Are** - Purpose, values, history timeline, and leadership team
3. **Our Companies** - Portfolio of subsidiary companies across three divisions
4. **How We Grow** - Growth strategy, market sectors, and investment criteria
5. **Investors** - Financial highlights, reports, stock information, and dividends
6. **News** - Latest news articles, press releases, and media resources
7. **Careers** - Job opportunities, company culture, benefits, and hiring process

## 🎨 Color Palette

### Base Colors
- **Primary Background**: `#0a0a0a` (Black)
- **Secondary Background**: `#141414` (Dark Gray)
- **Card Background**: `#1a1a1a` (Charcoal)

### Peacock Theme Colors
- **Peacock Blue**: `#0066cc` (Royal Blue)
- **Peacock Purple**: `#6a0dad` (Deep Purple)
- **Peacock Teal**: `#008b8b` (Dark Cyan)
- **Peacock Gold**: `#ffd700` (Bright Gold)

### Legacy Accents
- **Accent Cyan**: `#00d4ff` (Bright Cyan)
- **Accent Green**: `#00ff88` (Neon Green)
- **Accent Blue**: `#1e3a8a` (Navy Blue)

### Text
- **Text Primary**: `#ffffff` (White)
- **Text Secondary**: `#a0a0a0` (Gray)

## 🛠️ Installation & Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## 🌐 Development Server

The development server will start at `http://localhost:5173/`

## ✨ Features

### 🎭 Visual Effects
- ✅ **3D Card Transformations**: Cards tilt and lift on hover with realistic depth
- ✅ **Mouse-Interactive 3D**: Cards respond to mouse position for dynamic tilt
- ✅ **Peacock Particles**: Floating animated particles throughout the page
- ✅ **Animated Background**: Rotating peacock-colored gradient overlay
- ✅ **Holographic Sweeps**: Light reflections that move across elements
- ✅ **Glass Morphism**: Frosted glass backdrop effects
- ✅ **Neon Glow Effects**: Pulsing neon text and borders
- ✅ **Shimmer Animations**: Color-shifting gradient text

### 🎬 Motion & Transitions
- ✅ **Page Slide Transitions**: Smooth 3D slide-in when changing pages
- ✅ **Parallax Scrolling**: Multi-layer depth on scroll
- ✅ **Smooth Scroll Behavior**: Buttery smooth scrolling
- ✅ **Staggered Animations**: Cascading entrance animations

### 🎨 Design
- ✅ Modern, minimalistic dark theme with peacock colors
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Interactive hover effects with depth
- ✅ Gradient peacock-themed buttons with shine effects
- ✅ Clean navigation with glowing active states
- ✅ Comprehensive footer with multiple sections
- ✅ Custom peacock-themed scrollbar
- ✅ Fast page load times with Vite

## 📱 Responsive Breakpoints

- **Desktop**: 1400px+
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px

## 🎭 Animations

### 3D Animations
- **float3D**: 3D floating with depth (translateZ) and rotation
- **card-3d**: Interactive 3D card hover with mouse tracking
- **Page Transitions**: 3D slide and rotate on route change

### Effects
- **fadeIn**: Smooth fade-in with 3D rotation
- **slideIn**: Slide-in with parallax and depth
- **shimmer**: Color-shifting gradient animation
- **peacockFeather**: Pulsing peacock feather elements
- **floatParticle**: Particle systems floating upward
- **holographicSweep**: Diagonal light sweep effect
- **neonPulse**: Pulsing neon glow effect
- **glow**: Multi-layer glowing with peacock colors
- **rotateBackground**: Slowly rotating background gradient
- **peacockPulse**: Pulsing overlay opacity

### Button Effects
- **buttonShine**: Diagonal light sweep on buttons
- **navbarShimmer**: Subtle shimmer across navigation bar
- **pulse**: Scale pulsing for logo dot

## 📝 Customization

### Color Scheme
To customize the color scheme, edit the CSS variables in `src/index.css`:

```css
:root {
  --primary-bg: #0a0a0a;
  --peacock-blue: #0066cc;
  --peacock-purple: #6a0dad;
  --peacock-teal: #008b8b;
  --peacock-gold: #ffd700;
  /* ... more variables */
}
```

### 3D Effects
Adjust 3D intensity in your CSS:
- `perspective`: Change the perspective distance (default: 1500px)
- `translateZ()`: Adjust depth of floating (default: 20px)
- `rotateX()` / `rotateY()`: Modify tilt angles (default: 5deg)

### Animation Speed
Control animation timing in `src/index.css`:
- `rotateBackground`: Background rotation (default: 30s)
- `peacockPulse`: Overlay pulsing (default: 8s)
- `float3D`: Card floating (default: 8s)
- `shimmer`: Text shimmer (default: 3s)

### Disable Effects
To disable specific effects, comment out or remove:
- **Background effects**: `body::before` and `body::after`
- **Particles**: Remove `<PeacockParticles />` from `App.jsx`
- **3D cards**: Remove `card-3d` className
- **Holographic**: Remove `holographic` className

## 🚀 Deployment

This project can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

Build the project first:
```bash
npm run build
```

Then deploy the `dist` folder to your hosting service.

## 📄 License

This project is created for demonstration purposes.

---

Built with ❤️ using React + Vite
