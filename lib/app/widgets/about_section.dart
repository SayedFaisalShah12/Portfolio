import 'package:flutter/material.dart';
import 'package:flutter_animate/flutter_animate.dart';
import 'package:get/get.dart';

class AboutSection extends StatelessWidget {
  const AboutSection({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      padding: EdgeInsets.symmetric(
        horizontal: _getResponsivePadding(context),
        vertical: _getResponsiveVerticalPadding(context),
      ),
      child: Column(
        children: [
          Text(
            'About Me',
            style: Theme.of(context).textTheme.displayMedium?.copyWith(
              color: Get.theme.colorScheme.primary,
              fontSize: _getResponsiveTitleSize(context),
            ),
          ).animate().fadeIn(delay: 200.ms),

          SizedBox(height: _getResponsiveSpacing(context)),

          Text(
            'Get to know me better',
            style: Theme.of(context).textTheme.titleLarge?.copyWith(
              color: Get.theme.colorScheme.onBackground.withOpacity(0.7),
              fontSize: _getResponsiveSubtitleSize(context),
            ),
          ).animate().fadeIn(delay: 400.ms),

          SizedBox(height: _getResponsiveLargeSpacing(context)),

          LayoutBuilder(
            builder: (context, constraints) {
              if (constraints.maxWidth > 768) {
                return _buildDesktopAbout(context);
              } else {
                return _buildMobileAbout(context);
              }
            },
          ),
        ],
      ),
    );
  }

  Widget _buildDesktopAbout(BuildContext context) {
    return Row(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Expanded(flex: 1, child: _buildAboutImage(context)),
        SizedBox(width: _getResponsiveLargeSpacing(context)),
        Expanded(flex: 2, child: _buildAboutContent(context)),
      ],
    );
  }

  Widget _buildMobileAbout(BuildContext context) {
    return Column(
      children: [
        _buildAboutImage(context),
        SizedBox(height: _getResponsiveLargeSpacing(context)),
        _buildAboutContent(context),
      ],
    );
  }

  Widget _buildAboutImage(BuildContext context) {
    return Container(
      height: _getResponsiveImageHeight(context),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(20),
        gradient: LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [
            Get.theme.colorScheme.primary.withOpacity(0.1),
            Get.theme.colorScheme.secondary.withOpacity(0.1),
          ],
        ),
      ),
      child: Image.asset('assets/images/code.jpg', fit: BoxFit.cover),
    ).animate().fadeIn(delay: 600.ms).slideX(begin: -0.3, end: 0);
  }

  Widget _buildAboutContent(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          'Passionate Developer & Designer',
          style: TextStyle(
            fontSize: _getResponsiveContentTitleSize(context),
            fontWeight: FontWeight.bold,
            color: Get.theme.colorScheme.onBackground,
          ),
        ).animate().fadeIn(delay: 800.ms),

        SizedBox(height: _getResponsiveMediumSpacing(context)),

        Text(
          'I am a passionate Flutter developer with a strong foundation in mobile and web development. With years of experience in creating user-centric applications, I focus on delivering high-quality, scalable solutions that exceed client expectations.',
          style: TextStyle(
            fontSize: _getResponsiveDescriptionSize(context),
            color: Get.theme.colorScheme.onBackground.withOpacity(0.7),
            height: 1.6,
          ),
        ).animate().fadeIn(delay: 1000.ms),

        SizedBox(height: _getResponsiveMediumSpacing(context)),

        Text(
          'My expertise includes:',
          style: TextStyle(
            fontSize: _getResponsiveExpertiseTitleSize(context),
            fontWeight: FontWeight.w600,
            color: Get.theme.colorScheme.onBackground,
          ),
        ).animate().fadeIn(delay: 1200.ms),

        SizedBox(height: _getResponsiveSmallSpacing(context)),

        _buildExpertiseItem('Flutter & Dart Development', context),
        _buildExpertiseItem('Responsive Web Design', context),
        _buildExpertiseItem('UI/UX Design', context),
        _buildExpertiseItem('State Management (GetX, Provider)', context),
        _buildExpertiseItem('Firebase Integration', context),
        _buildExpertiseItem('RESTful APIs', context),
      ],
    );
  }

  Widget _buildExpertiseItem(String text, BuildContext context) {
    return Padding(
      padding: EdgeInsets.only(bottom: _getResponsiveSmallSpacing(context)),
      child: Row(
        children: [
          Icon(
            Icons.check_circle,
            color: Get.theme.colorScheme.primary,
            size: _getResponsiveIconSize(context),
          ),
          SizedBox(width: _getResponsiveSmallSpacing(context)),
          Expanded(
            child: Text(
              text,
              style: TextStyle(
                fontSize: _getResponsiveExpertiseTextSize(context),
                color: Get.theme.colorScheme.onBackground.withOpacity(0.8),
              ),
            ),
          ),
        ],
      ),
    ).animate().fadeIn(delay: 1400.ms).slideX(begin: 0.3, end: 0);
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

  double _getResponsiveLargeSpacing(BuildContext context) {
    if (MediaQuery.of(context).size.width < 600) {
      return 40.0; // Mobile
    } else if (MediaQuery.of(context).size.width < 900) {
      return 50.0; // Tablet
    } else {
      return 60.0; // Desktop
    }
  }

  double _getResponsiveMediumSpacing(BuildContext context) {
    if (MediaQuery.of(context).size.width < 600) {
      return 20.0; // Mobile
    } else {
      return 24.0; // Tablet & Desktop
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
      return 32.0; // Mobile
    } else if (MediaQuery.of(context).size.width < 900) {
      return 40.0; // Tablet
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

  double _getResponsiveImageHeight(BuildContext context) {
    if (MediaQuery.of(context).size.width < 600) {
      return 250.0; // Mobile
    } else if (MediaQuery.of(context).size.width < 900) {
      return 280.0; // Tablet
    } else {
      return 300.0; // Desktop
    }
  }

  double _getResponsiveContentTitleSize(BuildContext context) {
    if (MediaQuery.of(context).size.width < 600) {
      return 24.0; // Mobile
    } else if (MediaQuery.of(context).size.width < 900) {
      return 26.0; // Tablet
    } else {
      return 28.0; // Desktop
    }
  }

  double _getResponsiveDescriptionSize(BuildContext context) {
    if (MediaQuery.of(context).size.width < 600) {
      return 16.0; // Mobile
    } else {
      return 18.0; // Tablet & Desktop
    }
  }

  double _getResponsiveExpertiseTitleSize(BuildContext context) {
    if (MediaQuery.of(context).size.width < 600) {
      return 18.0; // Mobile
    } else if (MediaQuery.of(context).size.width < 900) {
      return 19.0; // Tablet
    } else {
      return 20.0; // Desktop
    }
  }

  double _getResponsiveExpertiseTextSize(BuildContext context) {
    if (MediaQuery.of(context).size.width < 600) {
      return 14.0; // Mobile
    } else {
      return 16.0; // Tablet & Desktop
    }
  }

  double _getResponsiveIconSize(BuildContext context) {
    if (MediaQuery.of(context).size.width < 600) {
      return 18.0; // Mobile
    } else {
      return 20.0; // Tablet & Desktop
    }
  }
}
