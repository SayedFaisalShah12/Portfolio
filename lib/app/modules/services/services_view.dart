import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:flutter_animate/flutter_animate.dart';
import 'services_controller.dart';
import '../../widgets/navigation_bar.dart';

class ServicesView extends GetView<ServicesController> {
  const ServicesView({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SingleChildScrollView(
        child: Column(
          children: [
            const CustomNavigationBar(),
            Container(
              width: double.infinity,
              padding: EdgeInsets.symmetric(
                horizontal: _getResponsivePadding(context),
                vertical: _getResponsiveVerticalPadding(context),
              ),
              child: Column(
                children: [
                  Text(
                    'Services',
                    style: Theme.of(context).textTheme.displayMedium?.copyWith(
                      color: Get.theme.colorScheme.primary,
                      fontSize: _getResponsiveTitleSize(context),
                    ),
                  ).animate().fadeIn(delay: 200.ms),

                  SizedBox(height: _getResponsiveSpacing(context)),

                  Text(
                    'What I can do for you',
                    style: Theme.of(context).textTheme.titleLarge?.copyWith(
                      color: Get.theme.colorScheme.onBackground.withOpacity(
                        0.7,
                      ),
                      fontSize: _getResponsiveSubtitleSize(context),
                    ),
                  ).animate().fadeIn(delay: 400.ms),

                  SizedBox(height: _getResponsiveLargeSpacing(context)),

                  _buildServicesGrid(context),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildServicesGrid(BuildContext context) {
    final services = [
      {
        'title': 'Mobile App Development',
        'description':
            'Native and cross-platform mobile applications using Flutter',
        'icon': Icons.mobile_friendly,
      },
      {
        'title': 'Web Development',
        'description': 'Responsive web applications and progressive web apps',
        'icon': Icons.web,
      },
      {
        'title': 'UI/UX Design',
        'description': 'User-centered design with modern design principles',
        'icon': Icons.design_services,
      },
      {
        'title': 'API Development',
        'description': 'RESTful APIs and backend services',
        'icon': Icons.api,
      },
      {
        'title': 'Consulting',
        'description': 'Technical consulting and project planning',
        'icon': Icons.business,
      },
      {
        'title': 'Maintenance',
        'description': 'Ongoing support and maintenance services',
        'icon': Icons.support_agent,
      },
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
      itemCount: services.length,
      itemBuilder: (context, index) {
        final service = services[index];
        return _buildServiceCard(service, index, context);
      },
    );
  }

  Widget _buildServiceCard(
    Map<String, dynamic> service,
    int index,
    BuildContext context,
  ) {
    return Card(
          child: Padding(
            padding: EdgeInsets.all(_getResponsiveCardPadding(context)),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Icon(
                  service['icon'],
                  size: _getResponsiveIconSize(context),
                  color: Get.theme.colorScheme.primary,
                ),
                SizedBox(height: _getResponsiveIconSpacing(context)),
                Text(
                  service['title'],
                  style: TextStyle(
                    fontSize: _getResponsiveServiceTitleSize(context),
                    fontWeight: FontWeight.bold,
                    color: Get.theme.colorScheme.onBackground,
                  ),
                  textAlign: TextAlign.center,
                ),
                SizedBox(height: _getResponsiveDescriptionSpacing(context)),
                Text(
                  service['description'],
                  style: TextStyle(
                    color: Get.theme.colorScheme.onBackground.withOpacity(0.7),
                    height: 1.4,
                    fontSize: _getResponsiveServiceDescriptionSize(context),
                  ),
                  textAlign: TextAlign.center,
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
      return 1; // Mobile: 1 column
    } else if (MediaQuery.of(context).size.width < 900) {
      return 2; // Tablet: 2 columns
    } else {
      return 3; // Desktop: 3 columns
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
      return 20.0; // Mobile
    } else if (MediaQuery.of(context).size.width < 900) {
      return 22.0; // Tablet
    } else {
      return 24.0; // Desktop
    }
  }

  double _getResponsiveIconSize(BuildContext context) {
    if (MediaQuery.of(context).size.width < 600) {
      return 40.0; // Mobile
    } else if (MediaQuery.of(context).size.width < 900) {
      return 44.0; // Tablet
    } else {
      return 48.0; // Desktop
    }
  }

  double _getResponsiveIconSpacing(BuildContext context) {
    if (MediaQuery.of(context).size.width < 600) {
      return 16.0; // Mobile
    } else {
      return 20.0; // Tablet & Desktop
    }
  }

  double _getResponsiveServiceTitleSize(BuildContext context) {
    if (MediaQuery.of(context).size.width < 600) {
      return 18.0; // Mobile
    } else if (MediaQuery.of(context).size.width < 900) {
      return 19.0; // Tablet
    } else {
      return 20.0; // Desktop
    }
  }

  double _getResponsiveDescriptionSpacing(BuildContext context) {
    if (MediaQuery.of(context).size.width < 600) {
      return 8.0; // Mobile
    } else {
      return 12.0; // Tablet & Desktop
    }
  }

  double _getResponsiveServiceDescriptionSize(BuildContext context) {
    if (MediaQuery.of(context).size.width < 600) {
      return 14.0; // Mobile
    } else {
      return 16.0; // Tablet & Desktop
    }
  }
}
