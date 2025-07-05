#!/bin/bash

# Install dependencies
echo "🔧 Installing dependencies..."
pnpm install

# Format code
echo "✨ Formatting code..."
pnpm format

# Generate PWA assets
echo "🖼️ Generating PWA assets..."
pnpm add -D @vite-pwa/assets-generator
pnpm generate-pwa-assets

# Success message
echo ""
echo "✅ Setup complete! Your PWA template is ready."
echo "🚀 Start the development server with: pnpm dev"
