#!/bin/bash
# This script will be run by Vercel during the build process.


set -e

echo "--- Starting frontend build ---"

# 1. Go into the frontend directory
cd ../frontend

# 2. Install frontend dependencies
#    (Use 'yarn install' if you use Yarn)
pnpm install

# 3. Build the frontend
#    (Use 'yarn build' if you use Yarn)
pnpm build

echo "--- Frontend build complete ---"

# 4. Go back to the backend directory
cd ../backend

# 5. Clean up any old build assets
rm -rf public

# 6. Create the 'public' directory
mkdir -p public

# 7. Copy the built frontend assets into the backend's 'public' directory
#    The Vite build output is in 'frontend/dist'
cp -r ../frontend/dist/* public/

echo "--- Frontend assets copied to /backend/public ---"
echo "Build complete."
