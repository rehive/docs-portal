#!/bin/bash

# Build script for docs portal with search functionality

echo "🔍 Generating search index..."
source .venv/bin/activate && python3 generate-search-index.py

echo "🏗️  Building Hugo site..."
hugo

echo "✅ Build complete!"
echo "📁 Site generated in ./public/"
echo "🔍 Search index contains $(cat static/search-index.json | jq '.total_documents') documents"