# Prayukt Website

A modern, professional corporate website built with React, inspired by Halma.com.

## Features

- 📱 Fully responsive design
- 🎨 Modern UI with professional corporate styling
- 🚀 Fast and optimized with Vite
- 📄 Multiple pages: Home, Who We Are, Our Companies, How We Grow, Investors, News, Careers
- 🎯 Clean navigation and footer

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
├── src/
│   ├── components/       # React components
│   ├── pages/           # Page components
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html
├── package.json
└── vite.config.js
```

## Customization

- **Colors**: Edit CSS variables in `src/index.css`
- **Content**: Update text in page components in `src/pages/`
- **Logo**: Replace logo text in `src/components/Navbar.jsx`
- **Company info**: Modify `src/pages/OurCompanies.jsx`
- **Peacock Feather Image**: See `public/peacock-feather-guide.md` for instructions on adding your own peacock feather images

### Adding Your Own Peacock Feather Image

To use a real peacock feather image instead of the SVG pattern:

1. Place your image in the `public` folder (e.g., `peacock-feather.png`)
2. In `src/index.css`, update the `body::after` selector:
```css
body::after {
  background-image: url('/peacock-feather.png');
  /* Adjust other properties as needed */
}
```

Recommended: Use PNG images with transparency for best results.

## Technologies Used

- React 18
- React Router v6
- Vite
- CSS3

