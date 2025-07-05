# React PWA Template

This is a comprehensive React PWA template built with Vite, React Router, and TailwindCSS, designed to provide a solid foundation for building modern web applications that work offline.

## Features

- ⚡️ **Vite** - Lightning fast development and builds
- 📱 **PWA Ready** - Works offline with service worker caching
- 🎨 **TailwindCSS** - Utility-first CSS framework
- 🧭 **React Router** - For seamless navigation
- 🔄 **Code Splitting** - With lazy loading for better performance
- ✨ **Prettier** - For consistent code formatting
- 🏗️ **SWC** - For fast compilation and HMR

## Getting Started

### Installation

```bash
# Clone the repository
git clone https://github.com/argf013/vite-react-pwa-boilerplate
cd vite-react-pwa-boilerplate

# Install dependencies using pnpm
pnpm install
```

### Development

```bash
# Start the development server
pnpm dev
```

### Building for Production

```bash
# Build the app for production
pnpm build

# Preview the production build
pnpm preview
```

## Code Formatting

```bash
# Format all code with Prettier
pnpm format

# Check code formatting without making changes
pnpm format:check
```

## PWA Configuration

The PWA configuration is handled by `vite-plugin-pwa`. You can customize the PWA settings in `vite.config.js`.

### PWA Icons

Replace the placeholder PWA icons in the `public` folder with your own:

- `favicon.ico` - Basic favicon
- `apple-touch-icon.png` - Icon for iOS (180x180)
- `pwa-192x192.png` - Standard PWA icon (192x192)
- `pwa-512x512.png` - Large PWA icon (512x512)
- `mask-icon.svg` - SVG mask icon

## Project Structure

```
/
├── public/              # Static assets
│   ├── favicon.ico
│   ├── apple-touch-icon.png
│   └── ...
├── src/
│   ├── assets/          # App assets (images, fonts, etc.)
│   ├── components/      # Reusable components
│   ├── layouts/         # Layout components
│   ├── pages/           # Page components
│   ├── routes/          # Routing configuration
│   ├── App.css          # App-specific styles
│   ├── App.jsx          # Main App component
│   ├── index.css        # Global styles and Tailwind imports
│   └── main.jsx         # Entry point
├── .prettierrc          # Prettier configuration
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── tailwind.config.js   # TailwindCSS configuration
└── vite.config.js       # Vite configuration
```

## Customization

### Tailwind Configuration

Customize the TailwindCSS configuration in `tailwind.config.js`:

- Add custom colors
- Extend themes
- Configure plugins

### PWA Manifest

Edit the PWA manifest in `vite.config.js` under the `VitePWA` plugin configuration.

## License

MIT
