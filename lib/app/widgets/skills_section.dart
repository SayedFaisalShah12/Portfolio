import 'package:flutter/material.dart';
import 'package:flutter_animate/flutter_animate.dart';
import 'package:get/get.dart';

class SkillsSection extends StatelessWidget {
  const SkillsSection({super.key});

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
            'Skills & Technologies',
            style: Theme.of(context).textTheme.displayMedium?.copyWith(
              color: Get.theme.colorScheme.primary,
              fontSize: _getResponsiveTitleSize(context),
            ),
          ).animate().fadeIn(delay: 200.ms),

          SizedBox(height: _getResponsiveSpacing(context)),

          Text(
            'Technologies I work with',
            style: Theme.of(context).textTheme.titleLarge?.copyWith(
              color: Get.theme.colorScheme.onBackground.withOpacity(0.7),
              fontSize: _getResponsiveSubtitleSize(context),
            ),
          ).animate().fadeIn(delay: 400.ms),

          SizedBox(height: _getResponsiveLargeSpacing(context)),

          _buildSkillsGrid(context),
        ],
      ),
    );
  }

  Widget _buildSkillsGrid(BuildContext context) {
    final skills = [
      {'name': 'Flutter', 'icon': Icons.flutter_dash, 'level': 0.9},
      {'name': 'Dart', 'icon': Icons.code, 'level': 0.85},
      {'name': 'Firebase', 'icon': Icons.cloud, 'level': 0.8},
      {'name': 'GetX', 'icon': Icons.psychology, 'level': 0.9},
      {'name': 'UI/UX Design', 'icon': Icons.design_services, 'level': 0.75},
      {'name': 'REST APIs', 'icon': Icons.api, 'level': 0.8},
      {'name': 'Git', 'icon': Icons.source, 'level': 0.85},
      {'name': 'Responsive Design', 'icon': Icons.devices, 'level': 0.9},
    ];

    return GridView.builder(
      shrinkWrap: true,
      physics: const NeverScrollableScrollPhysics(),
      gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
        crossAxisCount: _getResponsiveGridColumns(context),
        crossAxisSpacing: _getResponsiveGridSpacing(context),
        mainAxisSpacing: _getResponsiveGridSpacing(context),
        childAspectRatio: _getResponsiveAspectRatio(context),
      ),
      itemCount: skills.length,
      itemBuilder: (context, index) {
        return _buildSkillCard(
          skills[index]['name'] as String,
          skills[index]['icon'] as IconData,
          skills[index]['level'] as double,
          index,
          context,
        );
      },
    );
  }

  Widget _buildSkillCard(String name, IconData icon, double level, int index, BuildContext context) {
    return Card(
          child: Padding(
            padding: EdgeInsets.all(_getResponsiveCardPadding(context)),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Icon(
                  icon, 
                  size: _getResponsiveIconSize(context), 
                  color: Get.theme.colorScheme.primary
                ),
                SizedBox(height: _getResponsiveIconSpacing(context)),
                Text(
                  name,
                  style: TextStyle(
                    fontSize: _getResponsiveSkillNameSize(context),
                    fontWeight: FontWeight.w600,
                    color: Get.theme.colorScheme.onBackground,
                  ),
                  textAlign: TextAlign.center,
                ),
                SizedBox(height: _getResponsiveProgressSpacing(context)),
                LinearProgressIndicator(
                  value: level,
                  backgroundColor: Get.theme.colorScheme.onBackground
                      .withOpacity(0.1),
                  valueColor: AlwaysStoppedAnimation<Color>(
                    Get.theme.colorScheme.primary,
                  ),
                ),
              ],
            ),
          ),
        )
        .animate()
        .fadeIn(delay: (200 * (index + 1)).ms)
        .slideY(begin: 0.3, end: 0);
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

  int _getResponsiveGridColumns(BuildContext context) {
    if (MediaQuery.of(context).size.width < 600) {
      return 2; // Mobile: 2 columns
    } else if (MediaQuery.of(context).size.width < 900) {
      return 3; // Tablet: 3 columns
    } else {
      return 4; // Desktop: 4 columns
    }
  }

  double _getResponsiveGridSpacing(BuildContext context) {
    if (MediaQuery.of(context).size.width < 600) {
      return 16.0; // Mobile
    } else if (MediaQuery.of(context).size.width < 900) {
      return 20.0; // Tablet
    } else {
      return 24.0; // Desktop
    }
  }

  double _getResponsiveAspectRatio(BuildContext context) {
    if (MediaQuery.of(context).size.width < 600) {
      return 1.0; // Mobile: square cards
    } else if (MediaQuery.of(context).size.width < 900) {
      return 1.1; // Tablet
    } else {
      return 1.2; // Desktop
    }
  }

  double _getResponsiveCardPadding(BuildContext context) {
    if (MediaQuery.of(context).size.width < 600) {
      return 16.0; // Mobile
    } else if (MediaQuery.of(context).size.width < 900) {
      return 18.0; // Tablet
    } else {
      return 20.0; // Desktop
    }
  }

  double _getResponsiveIconSize(BuildContext context) {
    if (MediaQuery.of(context).size.width < 600) {
      return 32.0; // Mobile
    } else if (MediaQuery.of(context).size.width < 900) {
      return 36.0; // Tablet
    } else {
      return 40.0; // Desktop
    }
  }

  double _getResponsiveIconSpacing(BuildContext context) {
    if (MediaQuery.of(context).size.width < 600) {
      return 12.0; // Mobile
    } else {
      return 16.0; // Tablet & Desktop
    }
  }

  double _getResponsiveSkillNameSize(BuildContext context) {
    if (MediaQuery.of(context).size.width < 600) {
      return 14.0; // Mobile
    } else if (MediaQuery.of(context).size.width < 900) {
      return 15.0; // Tablet
    } else {
      return 16.0; // Desktop
    }
  }

  double _getResponsiveProgressSpacing(BuildContext context) {
    if (MediaQuery.of(context).size.width < 600) {
      return 8.0; // Mobile
    } else {
      return 12.0; // Tablet & Desktop
    }
  }
}
