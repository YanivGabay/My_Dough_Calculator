# 🚀 GitHub Pages Deployment Guide

This guide will help you deploy your PizzaMaestro app to GitHub Pages.

## 📋 Prerequisites

- GitHub account
- Git installed on your computer
- Node.js and npm installed

## 🛠️ Deployment Steps

### Method 1: Automatic Deployment with GitHub Actions (Recommended)

1. **Create a GitHub Repository**
   ```bash
   # Go to GitHub.com and create a new repository
   # Name it: my_dough_calculator (or whatever you prefer)
   # Don't initialize with README, .gitignore, or license
   ```

2. **Initialize Git and Push Your Code**
   ```bash
   # In your project directory (my-dough-calculator/)
   git init
   git add .
   git commit -m "Initial commit: PizzaMaestro calculator"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/my_dough_calculator.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click on **Settings** tab
   - Scroll down to **Pages** section
   - Under **Source**, select **GitHub Actions**
   - The workflow will automatically run and deploy your site

4. **Update Base URL (if needed)**
   - If your repository name is different from 'my_dough_calculator'
   - Update the `base` value in `vite.config.js`:
   ```javascript
   base: '/YOUR_REPOSITORY_NAME/',
   ```

### Method 2: Manual Deployment with gh-pages

1. **Build and Deploy Manually**
   ```bash
   npm run deploy
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Under **Source**, select **Deploy from a branch**
   - Select **gh-pages** branch
   - Click **Save**

## 🌐 Your Live URL

After successful deployment, your app will be available at:
```
https://YOUR_USERNAME.github.io/my_dough_calculator/
```

## 🔄 Update Your Deployed App

### For GitHub Actions Method:
- Just push changes to the `main` branch
- The deployment will happen automatically

### For Manual Method:
```bash
npm run deploy
```

## 🐛 Troubleshooting

### Common Issues:

1. **404 Error on Page Load**
   - Check that `base` in `vite.config.js` matches your repository name
   - Ensure repository name doesn't have spaces or special characters

2. **Build Fails**
   - Run `npm run build` locally to check for errors
   - Fix any linting or build issues
   - Commit and push the fixes

3. **Assets Not Loading**
   - Verify the `base` path in `vite.config.js`
   - Check that all imports use relative paths

4. **GitHub Actions Workflow Fails**
   - Check the Actions tab in your repository for error details
   - Ensure package-lock.json is committed
   - Verify Node.js version compatibility

### Build Locally First:
```bash
npm run build
npm run preview
```

## 📝 Notes

- The app uses Vite + React
- All assets are bundled and optimized for production
- The deployment includes all your custom recipes and themes
- Mobile responsive design works perfectly on GitHub Pages

## 🎯 Quick Commands Summary

```bash
# Initial setup
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/my_dough_calculator.git
git push -u origin main

# Future updates (GitHub Actions method)
git add .
git commit -m "Update: description of changes"
git push

# Future updates (Manual method)
npm run deploy
```

## 🎉 Success!

Once deployed, you'll have a professional pizza calculator live on the web that you can share with anyone! 

Your PizzaMaestro app will be accessible worldwide at your GitHub Pages URL. 