import 'package:flutter/material.dart';
import 'package:flutter_animate/flutter_animate.dart';
import 'package:animated_text_kit/animated_text_kit.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import '../routes/app_routes.dart';
import 'package:get/get.dart';

class HeroSection extends StatelessWidget {
  const HeroSection({super.key});

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
            Theme.of(context).colorScheme.background,
            Theme.of(context).colorScheme.surface,
          ],
        ),
      ),
      child: LayoutBuilder(
        builder: (context, constraints) {
          if (constraints.maxWidth > 768) {
            return _buildDesktopHero(context);
          } else {
            return _buildMobileHero(context);
          }
        },
      ),
    );
  }

  Widget _buildDesktopHero(BuildContext context) {
    return Row(
      children: [
        Expanded(flex: 3, child: _buildHeroContent(context)),
        const SizedBox(width: 40),
        Expanded(flex: 2, child: _buildHeroImage(context)),
      ],
    );
  }

  Widget _buildMobileHero(BuildContext context) {
    return Column(
      children: [
        _buildHeroContent(context),
        SizedBox(height: _getResponsiveSpacing(context)),
        _buildHeroImage(context),
      ],
    );
  }

  Widget _buildHeroContent(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          'Hello, I\'m',
          style: TextStyle(
            fontSize: _getResponsiveGreetingSize(context),
            color: Get.theme.colorScheme.onBackground.withOpacity(0.8),
          ),
        ).animate().fadeIn(delay: 200.ms),

        SizedBox(height: _getResponsiveSmallSpacing(context)),

        Text(
          'Sayed Faisal Shah',
          style: TextStyle(
            fontSize: _getResponsiveNameSize(context),
            fontWeight: FontWeight.bold,
            color: Get.theme.colorScheme.primary,
          ),
        ).animate().fadeIn(delay: 400.ms).slideX(begin: -0.3, end: 0),

        SizedBox(height: _getResponsiveSmallSpacing(context)),

        AnimatedTextKit(
          animatedTexts: [
            TypewriterAnimatedText(
              'Flutter Developer',
              textStyle: TextStyle(
                fontSize: _getResponsiveRoleSize(context),
                fontWeight: FontWeight.w600,
                color: Get.theme.colorScheme.onBackground,
              ),
              speed: const Duration(milliseconds: 100),
            ),
            TypewriterAnimatedText(
              'UI/UX Designer',
              textStyle: TextStyle(
                fontSize: _getResponsiveRoleSize(context),
                fontWeight: FontWeight.w600,
                color: Get.theme.colorScheme.onBackground,
              ),
              speed: const Duration(milliseconds: 100),
            ),
            TypewriterAnimatedText(
              'Problem Solver',
              textStyle: TextStyle(
                fontSize: _getResponsiveRoleSize(context),
                fontWeight: FontWeight.w600,
                color: Get.theme.colorScheme.onBackground,
              ),
              speed: const Duration(milliseconds: 100),
            ),
          ],
          totalRepeatCount: 1,
        ).animate().fadeIn(delay: 600.ms),

        SizedBox(height: _getResponsiveMediumSpacing(context)),

        Text(
          'I create beautiful, responsive, and user-friendly applications that solve real-world problems. Let\'s build something amazing together!',
          style: TextStyle(
            fontSize: _getResponsiveDescriptionSize(context),
            color: Get.theme.colorScheme.onBackground.withOpacity(0.7),
            height: 1.6,
          ),
        ).animate().fadeIn(delay: 800.ms),

        SizedBox(height: _getResponsiveLargeSpacing(context)),

        _buildResponsiveButtons(context),

        SizedBox(height: _getResponsiveLargeSpacing(context)),

        _buildSocialIcons(context),
      ],
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
              onPressed: () => Get.toNamed(AppRoutes.projects),
              child: Text(
                'View My Work',
                style: TextStyle(fontSize: _getResponsiveButtonTextSize(context)),
              ),
            ),
          ).animate().fadeIn(delay: 1000.ms).slideY(begin: 0.3, end: 0),
          SizedBox(height: _getResponsiveSmallSpacing(context)),
          SizedBox(
            width: double.infinity,
            child: OutlinedButton(
              onPressed: () => Get.toNamed(AppRoutes.contact),
              child: Text(
                'Get In Touch',
                style: TextStyle(fontSize: _getResponsiveButtonTextSize(context)),
              ),
            ),
          ).animate().fadeIn(delay: 1200.ms).slideY(begin: 0.3, end: 0),
        ],
      );
    } else {
      // Tablet & Desktop: Side by side buttons
      return Row(
        children: [
          ElevatedButton(
            onPressed: () => Get.toNamed(AppRoutes.projects),
            child: Text(
              'View My Work',
              style: TextStyle(fontSize: _getResponsiveButtonTextSize(context)),
            ),
          ).animate().fadeIn(delay: 1000.ms).slideY(begin: 0.3, end: 0),
          SizedBox(width: _getResponsiveSmallSpacing(context)),
          OutlinedButton(
            onPressed: () => Get.toNamed(AppRoutes.contact),
            child: Text(
              'Get In Touch',
              style: TextStyle(fontSize: _getResponsiveButtonTextSize(context)),
            ),
          ).animate().fadeIn(delay: 1200.ms).slideY(begin: 0.3, end: 0),
        ],
      );
    }
  }

  Widget _buildSocialIcons(BuildContext context) {
    return Row(
      mainAxisAlignment: MediaQuery.of(context).size.width < 600 
          ? MainAxisAlignment.center 
          : MainAxisAlignment.start,
      children: [
        _buildSocialIcon(
          FontAwesomeIcons.github,
          'https://github.com/SayedFaisalShah12',
          context,
        ),
        SizedBox(width: _getResponsiveSmallSpacing(context)),
        _buildSocialIcon(
          FontAwesomeIcons.linkedin,
          'www.linkedin.com/in/sayed-faisal-shah-7950891a9',
          context,
        ),
        SizedBox(width: _getResponsiveSmallSpacing(context)),
        _buildSocialIcon(
          FontAwesomeIcons.facebook,
          'https://www.facebook.com/SF7856',
          context,
        ),
      ],
    ).animate().fadeIn(delay: 1400.ms);
  }

  Widget _buildHeroImage(BuildContext context) {
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
      child: Image.asset('assets/images/unnamed.jpg', fit: BoxFit.cover),
    ).animate().fadeIn(delay: 1000.ms).scale(begin: const Offset(0.8, 0.8));
  }

  Widget _buildSocialIcon(IconData icon, String url, BuildContext context) {
    return InkWell(
      onTap: () {
        // TODO: Implement URL launcher
      },
      child: Container(
        padding: EdgeInsets.all(_getResponsiveSocialIconPadding(context)),
        decoration: BoxDecoration(
          color: Get.theme.colorScheme.surface,
          borderRadius: BorderRadius.circular(12),
          boxShadow: [
            BoxShadow(
              color: Colors.black.withOpacity(0.1),
              blurRadius: 10,
              offset: const Offset(0, 2),
            ),
          ],
        ),
        child: FaIcon(
          icon, 
          size: _getResponsiveSocialIconSize(context), 
          color: Get.theme.colorScheme.primary
        ),
      ),
    );
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
      return 40.0; // Mobile
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

  double _getResponsiveMediumSpacing(BuildContext context) {
    if (MediaQuery.of(context).size.width < 600) {
      return 20.0; // Mobile
    } else {
      return 24.0; // Tablet & Desktop
    }
  }

  double _getResponsiveLargeSpacing(BuildContext context) {
    if (MediaQuery.of(context).size.width < 600) {
      return 32.0; // Mobile
    } else {
      return 40.0; // Tablet & Desktop
    }
  }

  double _getResponsiveGreetingSize(BuildContext context) {
    if (MediaQuery.of(context).size.width < 600) {
      return 20.0; // Mobile
    } else if (MediaQuery.of(context).size.width < 900) {
      return 22.0; // Tablet
    } else {
      return 24.0; // Desktop
    }
  }

  double _getResponsiveNameSize(BuildContext context) {
    if (MediaQuery.of(context).size.width < 600) {
      return 40.0; // Mobile
    } else if (MediaQuery.of(context).size.width < 900) {
      return 52.0; // Tablet
    } else {
      return 64.0; // Desktop
    }
  }

  double _getResponsiveRoleSize(BuildContext context) {
    if (MediaQuery.of(context).size.width < 600) {
      return 24.0; // Mobile
    } else if (MediaQuery.of(context).size.width < 900) {
      return 28.0; // Tablet
    } else {
      return 32.0; // Desktop
    }
  }

  double _getResponsiveDescriptionSize(BuildContext context) {
    if (MediaQuery.of(context).size.width < 600) {
      return 16.0; // Mobile
    } else {
      return 18.0; // Tablet & Desktop
    }
  }

  double _getResponsiveButtonTextSize(BuildContext context) {
    if (MediaQuery.of(context).size.width < 600) {
      return 16.0; // Mobile
    } else {
      return 18.0; // Tablet & Desktop
    }
  }

  double _getResponsiveImageHeight(BuildContext context) {
    if (MediaQuery.of(context).size.width < 600) {
      return 300.0; // Mobile
    } else if (MediaQuery.of(context).size.width < 900) {
      return 350.0; // Tablet
    } else {
      return 400.0; // Desktop
    }
  }

  double _getResponsiveSocialIconPadding(BuildContext context) {
    if (MediaQuery.of(context).size.width < 600) {
      return 10.0; // Mobile
    } else {
      return 12.0; // Tablet & Desktop
    }
  }

  double _getResponsiveSocialIconSize(BuildContext context) {
    if (MediaQuery.of(context).size.width < 600) {
      return 18.0; // Mobile
    } else {
      return 20.0; // Tablet & Desktop
    }
  }
}
