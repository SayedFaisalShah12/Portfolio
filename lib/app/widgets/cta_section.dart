import 'package:flutter/material.dart';
import 'package:flutter_animate/flutter_animate.dart';
import 'package:get/get.dart';
import '../routes/app_routes.dart';

class CTASection extends StatelessWidget {
  const CTASection({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      padding: EdgeInsets.symmetric(
        horizontal: _getResponsivePadding(context),
        vertical: _getResponsiveVerticalPadding(context),
      ),
      decoration: BoxDecoration(
        gradient: LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [
            Get.theme.colorScheme.primary.withOpacity(0.1),
            Get.theme.colorScheme.secondary.withOpacity(0.1),
          ],
        ),
      ),
      child: Column(
        children: [
          Text(
            'Ready to Start Your Project?',
            style: Theme.of(context).textTheme.displayMedium?.copyWith(
              color: Get.theme.colorScheme.primary,
              fontSize: _getResponsiveTitleSize(context),
            ),
            textAlign: TextAlign.center,
          ).animate().fadeIn(delay: 200.ms),

          SizedBox(height: _getResponsiveSpacing(context)),

          Text(
            'Let\'s work together to bring your ideas to life',
            style: Theme.of(context).textTheme.titleLarge?.copyWith(
              color: Get.theme.colorScheme.onBackground.withOpacity(0.7),
              fontSize: _getResponsiveSubtitleSize(context),
            ),
            textAlign: TextAlign.center,
          ).animate().fadeIn(delay: 400.ms),

          SizedBox(height: _getResponsiveButtonSpacing(context)),

          _buildResponsiveButtons(context),
        ],
      ),
    );
  }

  Widget _buildResponsiveButtons(BuildContext context) {
    if (MediaQuery.of(context).size.width < 600) {
      // Mobile: Stack buttons vertically
      return Column(
        children: [
          SizedBox(
            width: double.infinity,
            child: ElevatedButton(
              onPressed: () => Get.toNamed(AppRoutes.contact),
              child: Text(
                'Get Started',
                style: TextStyle(fontSize: _getResponsiveButtonTextSize(context)),
              ),
            ),
          ).animate().fadeIn(delay: 600.ms).slideY(begin: 0.3, end: 0),
          SizedBox(height: _getResponsiveSmallSpacing(context)),
          SizedBox(
            width: double.infinity,
            child: OutlinedButton(
              onPressed: () => Get.toNamed(AppRoutes.projects),
              child: Text(
                'View Portfolio',
                style: TextStyle(fontSize: _getResponsiveButtonTextSize(context)),
              ),
            ),
          ).animate().fadeIn(delay: 800.ms).slideY(begin: 0.3, end: 0),
        ],
      );
    } else {
      // Tablet & Desktop: Side by side buttons
      return Row(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          ElevatedButton(
            onPressed: () => Get.toNamed(AppRoutes.contact),
            child: Text(
              'Get Started',
              style: TextStyle(fontSize: _getResponsiveButtonTextSize(context)),
            ),
          ).animate().fadeIn(delay: 600.ms).slideY(begin: 0.3, end: 0),
          SizedBox(width: _getResponsiveSmallSpacing(context)),
          OutlinedButton(
            onPressed: () => Get.toNamed(AppRoutes.projects),
            child: Text(
              'View Portfolio',
              style: TextStyle(fontSize: _getResponsiveButtonTextSize(context)),
            ),
          ).animate().fadeIn(delay: 800.ms).slideY(begin: 0.3, end: 0),
        ],
      );
    }
  }

  // Responsive helper methods
  double _getResponsivePadding(BuildContext context) {
    if (MediaQuery.of(context).size.width < 600) {
      return 16.0; // Mobile
    } else if (MediaQuery.of(context).size.width < 900) {
      return 24.0; // Tablet
    } else {
      return 32.0; // Desktop
    }
  }

  double _getResponsiveVerticalPadding(BuildContext context) {
    if (MediaQuery.of(context).size.width < 600) {
      return 40.0; // Mobile
    } else if (MediaQuery.of(context).size.width < 900) {
      return 60.0; // Tablet
    } else {
      return 80.0; // Desktop
    }
  }

  double _getResponsiveSpacing(BuildContext context) {
    if (MediaQuery.of(context).size.width < 600) {
      return 12.0; // Mobile
    } else {
      return 16.0; // Tablet & Desktop
    }
  }

  double _getResponsiveButtonSpacing(BuildContext context) {
    if (MediaQuery.of(context).size.width < 600) {
      return 32.0; // Mobile
    } else {
      return 40.0; // Tablet & Desktop
    }
  }

  double _getResponsiveSmallSpacing(BuildContext context) {
    if (MediaQuery.of(context).size.width < 600) {
      return 12.0; // Mobile
    } else {
      return 16.0; // Tablet & Desktop
    }
  }

  double _getResponsiveTitleSize(BuildContext context) {
    if (MediaQuery.of(context).size.width < 600) {
      return 28.0; // Mobile
    } else if (MediaQuery.of(context).size.width < 900) {
      return 36.0; // Tablet
    } else {
      return 48.0; // Desktop
    }
  }

  double _getResponsiveSubtitleSize(BuildContext context) {
    if (MediaQuery.of(context).size.width < 600) {
      return 16.0; // Mobile
    } else if (MediaQuery.of(context).size.width < 900) {
      return 18.0; // Tablet
    } else {
      return 22.0; // Desktop
    }
  }

  double _getResponsiveButtonTextSize(BuildContext context) {
    if (MediaQuery.of(context).size.width < 600) {
      return 16.0; // Mobile
    } else {
      return 18.0; // Tablet & Desktop
    }
  }
}
