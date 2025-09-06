import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:flutter_animate/flutter_animate.dart';
import 'projects_controller.dart';
import '../../widgets/navigation_bar.dart';

class ProjectsView extends GetView<ProjectsController> {
  const ProjectsView({super.key});

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
                    'My Projects',
                    style: Theme.of(context).textTheme.displayMedium?.copyWith(
                      color: Get.theme.colorScheme.primary,
                      fontSize: _getResponsiveTitleSize(context),
                    ),
                  ).animate().fadeIn(delay: 200.ms),

                  SizedBox(height: _getResponsiveSpacing(context)),

                  Text(
                    'Some of my recent work',
                    style: Theme.of(context).textTheme.titleLarge?.copyWith(
                      color: Get.theme.colorScheme.onBackground.withOpacity(
                        0.7,
                      ),
                      fontSize: _getResponsiveSubtitleSize(context),
                    ),
                  ).animate().fadeIn(delay: 400.ms),

                  SizedBox(height: _getResponsiveLargeSpacing(context)),

                  Obx(
                    () =>
                        controller.isLoading.value
                            ? const Center(child: CircularProgressIndicator())
                            : _buildProjectsGrid(context),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildProjectsGrid(BuildContext context) {
    return GridView.builder(
      shrinkWrap: true,
      physics: const NeverScrollableScrollPhysics(),
      gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
        crossAxisCount: _getResponsiveGridColumns(context),
        crossAxisSpacing: _getResponsiveGridSpacing(context),
        mainAxisSpacing: _getResponsiveGridSpacing(context),
        childAspectRatio: _getResponsiveAspectRatio(context),
      ),
      itemCount: controller.projects.length,
      itemBuilder: (context, index) {
        final project = controller.projects[index];
        return _buildProjectCard(project, index, context);
      },
    );
  }

  Widget _buildProjectCard(
    Map<String, dynamic> project,
    int index,
    BuildContext context,
  ) {
    return Card(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Expanded(
                child: Container(
                  width: double.infinity,
                  decoration: BoxDecoration(
                    borderRadius: const BorderRadius.vertical(
                      top: Radius.circular(12),
                    ),
                    color: Get.theme.colorScheme.primary.withOpacity(0.1),
                  ),
                  child: Icon(
                    Icons.image,
                    size: _getResponsiveIconSize(context),
                    color: Colors.grey,
                  ),
                ),
              ),
              Padding(
                padding: EdgeInsets.all(_getResponsiveCardPadding(context)),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      project['title'],
                      style: TextStyle(
                        fontSize: _getResponsiveCardTitleSize(context),
                        fontWeight: FontWeight.bold,
                        color: Get.theme.colorScheme.onBackground,
                      ),
                    ),
                    SizedBox(height: _getResponsiveSmallSpacing(context)),
                    Text(
                      project['description'],
                      style: TextStyle(
                        color: Get.theme.colorScheme.onBackground.withOpacity(
                          0.7,
                        ),
                        height: 1.4,
                        fontSize: _getResponsiveCardDescriptionSize(context),
                      ),
                    ),
                    SizedBox(height: _getResponsiveMediumSpacing(context)),
                    Wrap(
                      spacing: _getResponsiveChipSpacing(context),
                      runSpacing: _getResponsiveChipSpacing(context),
                      children:
                          (project['technologies'] as List<String>)
                              .map(
                                (tech) => Chip(
                                  label: Text(
                                    tech,
                                    style: TextStyle(
                                      fontSize: _getResponsiveChipTextSize(
                                        context,
                                      ),
                                    ),
                                  ),
                                  backgroundColor: Get.theme.colorScheme.primary
                                      .withOpacity(0.1),
                                  labelStyle: TextStyle(
                                    color: Get.theme.colorScheme.primary,
                                    fontSize: _getResponsiveChipTextSize(
                                      context,
                                    ),
                                  ),
                                ),
                              )
                              .toList(),
                    ),
                    SizedBox(height: _getResponsiveMediumSpacing(context)),
                    Row(
                      children: [
                        Expanded(
                          child: OutlinedButton(
                            onPressed: () {
                              // TODO: Implement GitHub link
                            },
                            child: Text(
                              'GitHub',
                              style: TextStyle(
                                fontSize: _getResponsiveButtonTextSize(context),
                              ),
                            ),
                          ),
                        ),
                        SizedBox(width: _getResponsiveSmallSpacing(context)),
                        Expanded(
                          child: ElevatedButton(
                            onPressed: () {
                              // TODO: Implement demo link
                            },
                            child: Text(
                              'Demo',
                              style: TextStyle(
                                fontSize: _getResponsiveButtonTextSize(context),
                              ),
                            ),
                          ),
                        ),
                      ],
                    ),
                  ],
                ),
              ),
            ],
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

  double _getResponsiveMediumSpacing(BuildContext context) {
    if (MediaQuery.of(context).size.width < 600) {
      return 12.0; // Mobile
    } else {
      return 16.0; // Tablet & Desktop
    }
  }

  double _getResponsiveSmallSpacing(BuildContext context) {
    if (MediaQuery.of(context).size.width < 600) {
      return 6.0; // Mobile
    } else {
      return 8.0; // Tablet & Desktop
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
      return 0.9; // Mobile: taller cards
    } else if (MediaQuery.of(context).size.width < 900) {
      return 0.85; // Tablet
    } else {
      return 0.8; // Desktop
    }
  }

  double _getResponsiveIconSize(BuildContext context) {
    if (MediaQuery.of(context).size.width < 600) {
      return 60.0; // Mobile
    } else if (MediaQuery.of(context).size.width < 900) {
      return 70.0; // Tablet
    } else {
      return 80.0; // Desktop
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

  double _getResponsiveCardTitleSize(BuildContext context) {
    if (MediaQuery.of(context).size.width < 600) {
      return 18.0; // Mobile
    } else if (MediaQuery.of(context).size.width < 900) {
      return 19.0; // Tablet
    } else {
      return 20.0; // Desktop
    }
  }

  double _getResponsiveCardDescriptionSize(BuildContext context) {
    if (MediaQuery.of(context).size.width < 600) {
      return 14.0; // Mobile
    } else {
      return 16.0; // Tablet & Desktop
    }
  }

  double _getResponsiveChipSpacing(BuildContext context) {
    if (MediaQuery.of(context).size.width < 600) {
      return 6.0; // Mobile
    } else {
      return 8.0; // Tablet & Desktop
    }
  }

  double _getResponsiveChipTextSize(BuildContext context) {
    if (MediaQuery.of(context).size.width < 600) {
      return 11.0; // Mobile
    } else {
      return 12.0; // Tablet & Desktop
    }
  }

  double _getResponsiveButtonTextSize(BuildContext context) {
    if (MediaQuery.of(context).size.width < 600) {
      return 14.0; // Mobile
    } else {
      return 16.0; // Tablet & Desktop
    }
  }
}
