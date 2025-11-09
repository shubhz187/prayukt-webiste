# Prayukt - Customer Experience Platform

A modern, professional corporate website built with Vue.js 3 and Vite, inspired by Halma's website structure and featuring an elegant design with warm brown and beige color palette.

## 🎨 Design Features

- **Elegant Brown & Beige Theme**: Sophisticated earth-tone color palette
- **Modern UI**: Clean, professional design with smooth animations
- **Gradient Backgrounds**: Animated brown/beige gradient backgrounds
- **Warm & Inviting**: Comfortable, easy-on-the-eyes color scheme
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Fade-in effects, floating animations, and subtle glowing effects
- **Elegant Typography**: Playfair Display for headings, Lora for body text - classic, calligraphic fonts
- **High Contrast**: Carefully balanced colors for excellent readability

## 🚀 Tech Stack

- **Framework**: Vue.js 3 (Composition API)
- **Build Tool**: Vite
- **Routing**: Vue Router 4
- **Styling**: Pure CSS with CSS Variables
- **Fonts**: Google Fonts (Inter)

## 📁 Project Structure

```
Simplistic/
├── src/
│   ├── components/
│   │   ├── Navbar.vue          # Navigation bar
│   │   └── Footer.vue          # Footer with links
│   ├── pages/
│   │   ├── Home.vue            # Homepage
│   │   ├── WhoWeAre.vue        # About page
│   │   ├── OurCompanies.vue    # Companies listing
│   │   ├── HowWeGrow.vue       # Business model
│   │   ├── Investors.vue       # Investor relations
│   │   ├── News.vue            # News & press
│   │   └── Careers.vue         # Careers page
│   ├── App.vue                 # Main app component
│   ├── main.js                 # App entry point
│   └── style.css               # Global styles
├── index.html                  # HTML entry point
├── vite.config.js              # Vite configuration
├── package.json                # Dependencies
└── README.md                   # Documentation
```

## 🎯 Website Structure

### Homepage
- Hero section with strong value proposition (black background, yellow text)
- Signature services showcase
- Program offerings (Quick Start & CX Lens Library)
- Strategic partner information
- Statistics and achievements with glowing effects

### Who We Are
- Company purpose and mission
- Core values (4 key values)
- Company history timeline
- Leadership team profiles

### Our Companies
- 6 Business unit descriptions
- Company portfolio with statistics
- Market segments (Safety, Healthcare, Environmental)
- Call-to-action section

### How We Grow
- Business model explanation (4-step approach)
- Growth strategy with visual circle
- Interactive market segment tabs
- Investment priorities ($5M+ in R&D)

### Investors
- Financial highlights with key metrics
- Reports and presentations downloads
- Stock information (AMPY - NASDAQ)
- Investor calendar with events
- Corporate governance links

### News
- Featured story section
- Filterable news articles (6 categories)
- Press releases timeline
- Media contact information

### Careers
- Why join Prayukt (6 benefits)
- Filterable job listings (8 open positions)
- Culture and values showcase
- Detailed benefits breakdown
- 4-step application process

## 🛠️ Installation

1. **Install Dependencies**:
```bash
npm install
```

2. **Run Development Server**:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

3. **Build for Production**:
```bash
npm run build
```

4. **Preview Production Build**:
```bash
npm run preview
```

## 🎨 Color Palette

**Elegant Brown & Beige Theme:**

- **Deep Brown**: #5E4033 - Headers, footers, primary text, strong elements
- **Mid-Tone Beige**: #C4B299 - Backgrounds, secondary content, buttons
- **Light Beige / Sand**: #DED2C1 - Cards, subtle section backgrounds
- **Off-White / Cream**: #F5F2EC - Primary background, light zones, text on dark
- **Accent Brown-Gold**: #A07A58 - Highlights, hover states, buttons, icons
- **Text Dark**: #5E4033 - Primary dark text
- **Text Light**: #8B7355 - Secondary text, descriptions

## ✨ Key Features

1. **Smooth Navigation**: Fixed navigation bar with scroll effects
2. **Animated Backgrounds**: Gradient animations on hero sections
3. **Interactive Cards**: Hover effects on cards and buttons
4. **Responsive Design**: Mobile-first approach with breakpoints
5. **Route Transitions**: Smooth page transitions
6. **Filtering**: Dynamic filtering on News and Careers pages
7. **Tabs**: Interactive tab components on various pages

## 📱 Responsive Breakpoints

- **Desktop**: > 968px
- **Tablet**: 768px - 968px
- **Mobile**: < 768px

## 🔧 Customization

### Changing Colors
Edit CSS variables in `src/style.css`:

```css
:root {
  --deep-brown: #5E4033;
  --mid-beige: #C4B299;
  --light-beige: #DED2C1;
  --off-white: #F5F2EC;
  --accent-gold: #A07A58;
  /* ... other colors */
}
```

### Adding Pages
1. Create a new component in `src/pages/`
2. Import and add route in `src/main.js`
3. Add navigation link in `src/components/Navbar.vue`

### Modifying Content
Each page component contains its data inline. Update the template or data sections to modify content.

## 📄 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

This project is created for demonstration purposes.

## 👥 Credits

- Design inspired by Halma.com
- Client: Prayukt (prayukt.com)
- Built with Vue.js 3 and Vite
- Color Scheme: Elegant Brown & Beige Earth Tones
- Icons: Emoji icons for simplicity
- Fonts: Playfair Display (headings) & Lora (body) from Google Fonts

## 🚀 Deployment

This project can be deployed to any static hosting service:

- **Vercel**: `vercel deploy`
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use `gh-pages` package
- **AWS S3**: Upload `dist` folder to S3 bucket

---

**Built with ❤️ using Vue.js**

