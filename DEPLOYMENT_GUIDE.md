# Firebase Deployment Guide

This guide will help you deploy your Flutter portfolio website to Firebase Hosting.

## Prerequisites

1. **Node.js and npm** installed on your system
2. **Firebase account** (free tier is sufficient)
3. **Flutter SDK** properly configured

## Step 1: Install Firebase CLI

```bash
npm install -g firebase-tools
```

## Step 2: Login to Firebase

```bash
firebase login
```

This will open a browser window for authentication.

## Step 3: Initialize Firebase in Your Project

```bash
firebase init hosting
```

When prompted:
- Choose "Use an existing project" or create a new one
- Set public directory to: `build/web`
- Configure as single-page app: `Yes`
- Don't overwrite index.html: `No`

## Step 4: Build Your Flutter Web App

```bash
flutter build web --release
```

## Step 5: Deploy to Firebase

```bash
firebase deploy
```

## Step 6: Access Your Website

After successful deployment, you'll get a URL like:
`https://your-project-id.web.app`

## Custom Domain (Optional)

1. Go to Firebase Console > Hosting
2. Click "Add custom domain"
3. Follow the DNS configuration steps
4. Wait for DNS propagation (can take up to 24 hours)

## Automatic Deployment

You can use the provided `deploy.bat` file on Windows:

```bash
deploy.bat
```

## Troubleshooting

### Common Issues

1. **Build Errors**: Ensure all dependencies are installed with `flutter pub get`
2. **Firebase CLI Issues**: Try `firebase logout` then `firebase login` again
3. **Permission Errors**: Run commands as administrator if needed

### Performance Optimization

1. **Enable Compression**: Firebase automatically compresses static assets
2. **CDN**: Firebase uses Google's global CDN for fast loading
3. **Caching**: Set appropriate cache headers for static assets

## Monitoring

- **Firebase Console**: Monitor traffic and performance
- **Google Analytics**: Track user behavior (optional)
- **Performance**: Use Lighthouse for optimization tips

## Cost

Firebase Hosting is free for:
- 10GB storage
- 360MB/day data transfer
- Custom domains
- SSL certificates

## Support

- [Firebase Documentation](https://firebase.google.com/docs/hosting)
- [Flutter Web Documentation](https://flutter.dev/web)
- [Firebase Community](https://firebase.google.com/community)

---

**Your portfolio is now live on the web! 🚀**
