@echo off
echo 🔧 Installing dependencies...
call pnpm install

echo ✨ Formatting code...
call pnpm format

echo 🖼️ Generating PWA assets...
call pnpm add -D @vite-pwa/assets-generator
call pnpm generate-pwa-assets

echo.
echo ✅ Setup complete! Your PWA template is ready.
echo 🚀 Start the development server with: pnpm dev
