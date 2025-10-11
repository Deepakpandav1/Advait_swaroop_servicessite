#!/bin/bash

# Cloudflare Pages Deployment Script
# Advait Swaroop Services - Digital Services Platform

echo "🚀 Starting Cloudflare Pages Deployment..."
echo "📦 Building project..."

# Build the project
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "🌐 Deploying to Cloudflare Pages..."
    
    # Deploy to Cloudflare Pages
    npm run deploy:production
    
    if [ $? -eq 0 ]; then
        echo "🎉 Deployment successful!"
        echo "🌍 Your website is now live at: https://www.advaitswaroopservices.com"
        echo "📊 Analytics: https://analytics.google.com"
        echo "🔧 Cloudflare Dashboard: https://dash.cloudflare.com"
    else
        echo "❌ Deployment failed!"
        echo "🔍 Check your Cloudflare configuration and try again."
        exit 1
    fi
else
    echo "❌ Build failed!"
    echo "🔍 Check your code for errors and try again."
    exit 1
fi

echo "✅ Deployment process completed!"
