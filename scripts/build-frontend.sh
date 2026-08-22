#!/usr/bin/env bash
set -e

echo "Building PropertyFlow frontend..."

cd artifacts/propertyflow

echo "Installing dependencies..."
pnpm install

echo "Running typecheck..."
pnpm run typecheck

echo "Building for production..."
pnpm run build

echo "Build complete!"
