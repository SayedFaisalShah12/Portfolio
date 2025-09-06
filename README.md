# Professional Portfolio Website

A beautiful, responsive portfolio website built with Flutter and GetX state management.

## Features

- 🎨 **Responsive Design** - Works perfectly on all devices
- 🚀 **GetX State Management** - Efficient state management and navigation
- ✨ **Smooth Animations** - Beautiful animations using flutter_animate
- 🌙 **Dark/Light Theme** - Automatic theme switching
- 📱 **Mobile First** - Optimized for mobile and desktop
- 🎯 **Professional UI** - Modern and clean design

## Pages

1. **Home** - Landing page with hero section, about, skills, and CTA
2. **Projects** - Showcase of your work and projects
3. **Services** - Services you offer
4. **About Me** - Detailed information about you
5. **Contact Me** - Contact form and information

## Getting Started

### Prerequisites

- Flutter SDK (3.7.0 or higher)
- Dart SDK
- Git

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
flutter pub get
```

3. Run the application:
```bash
flutter run -d chrome
```

## Building for Web

To build the web version:

```bash
flutter build web
```

The built files will be in the `build/web` directory.

## Firebase Hosting

### Setup Firebase

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Login to Firebase:
```bash
firebase login
```

3. Initialize Firebase in your project:
```bash
firebase init hosting
```

4. Deploy to Firebase:
```bash
firebase deploy
```

### Firebase Configuration

The `firebase.json` file is already configured for Flutter web hosting.

## Customization

### Personal Information

Update the following files with your information:

- `lib/app/widgets/hero_section.dart` - Change "Your Name" and descriptions
- `lib/app/widgets/footer.dart` - Update contact information and social links
- `lib/app/modules/contact/contact_view.dart` - Update contact details
- `lib/app/modules/about/about_view.dart` - Update your story and experience

### Colors and Theme

Modify `lib/app/theme/app_theme.dart` to change colors and styling.

### Projects

Update `lib/app/modules/projects/projects_controller.dart` with your actual projects.

## Dependencies

- **get**: State management and navigation
- **flutter_animate**: Beautiful animations
- **google_fonts**: Custom typography
- **font_awesome_flutter**: Icons
- **url_launcher**: External links
- **animated_text_kit**: Text animations

## Project Structure

```
lib/
├── app/
│   ├── modules/          # Feature modules
│   │   ├── home/         # Home page
│   │   ├── projects/     # Projects page
│   │   ├── services/     # Services page
│   │   ├── about/        # About page
│   │   └── contact/      # Contact page
│   ├── routes/           # Routing configuration
│   ├── theme/            # App theme
│   └── widgets/          # Reusable widgets
└── main.dart             # App entry point
```

## Deployment

### Local Testing

```bash
flutter run -d chrome
```

### Production Build

```bash
flutter build web --release
```

### Firebase Deploy

```bash
firebase deploy
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.

## Support

If you have any questions or need help, please open an issue on GitHub.

---

**Happy Coding! 🚀**
