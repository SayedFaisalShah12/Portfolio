import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:flutter_animate/flutter_animate.dart';
import 'about_controller.dart';
import '../../widgets/navigation_bar.dart';

class AboutView extends GetView<AboutController> {
  const AboutView({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SingleChildScrollView(
        child: Column(
          children: [
            const CustomNavigationBar(),
            Container(
              width: double.infinity,
              padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 80),
              child: Column(
                children: [
                  Text(
                    'About Me',
                    style: Theme.of(context).textTheme.displayMedium?.copyWith(
                      color: Get.theme.colorScheme.primary,
                    ),
                  ).animate().fadeIn(delay: 200.ms),

                  const SizedBox(height: 16),

                  Text(
                    'Learn more about my journey',
                    style: Theme.of(context).textTheme.titleLarge?.copyWith(
                      color: Get.theme.colorScheme.onBackground.withOpacity(
                        0.7,
                      ),
                    ),
                  ).animate().fadeIn(delay: 400.ms),

                  const SizedBox(height: 60),

                  LayoutBuilder(
                    builder: (context, constraints) {
                      if (constraints.maxWidth > 768) {
                        return _buildDesktopAbout();
                      } else {
                        return _buildMobileAbout();
                      }
                    },
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildDesktopAbout() {
    return Row(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Expanded(flex: 1, child: _buildAboutImage()),
        const SizedBox(width: 60),
        Expanded(flex: 2, child: _buildAboutContent()),
      ],
    );
  }

  Widget _buildMobileAbout() {
    return Column(
      children: [
        _buildAboutImage(),
        const SizedBox(height: 40),
        _buildAboutContent(),
      ],
    );
  }

  Widget _buildAboutImage() {
    return Container(
      height: 400,
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
    ).animate().fadeIn(delay: 600.ms).slideX(begin: -0.3, end: 0);
  }

  Widget _buildAboutContent() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          'My Story',
          style: TextStyle(
            fontSize: 32,
            fontWeight: FontWeight.bold,
            color: Get.theme.colorScheme.onBackground,
          ),
        ).animate().fadeIn(delay: 800.ms),

        const SizedBox(height: 24),

        Text(
          'I am a passionate Flutter developer with over 5 years of experience in mobile and web development. My journey began when I discovered the power of Flutter to create beautiful, cross-platform applications.',
          style: TextStyle(
            fontSize: 18,
            color: Get.theme.colorScheme.onBackground.withOpacity(0.7),
            height: 1.6,
          ),
        ).animate().fadeIn(delay: 1000.ms),

        const SizedBox(height: 24),

        Text(
          'Throughout my career, I have worked on various projects ranging from small business apps to enterprise-level solutions. I believe in writing clean, maintainable code and creating user experiences that delight users.',
          style: TextStyle(
            fontSize: 18,
            color: Get.theme.colorScheme.onBackground.withOpacity(0.7),
            height: 1.6,
          ),
        ).animate().fadeIn(delay: 1200.ms),

        const SizedBox(height: 40),

        _buildExperienceSection(),
      ],
    );
  }

  Widget _buildExperienceSection() {
    final experiences = [
      {
        'year': '2024/08 - 2025/03',
        'title': 'Senior Flutter Developer',
        'company': 'CodexDev Software House',
      },
      {
        'year': '2023/11 - 2024/07',
        'title': 'Junior Developer',
        'company': 'EncoderBytes Private Ltd',
      },
      {
        'year': '2022/11 - 2023/11',
        'title': 'Junior Developer',
        'company': 'ITSAWK IT Training Center',
      },
      {
        'year': '2021/01 - 2021/08',
        'title': 'IT Support Assistant',
        'company': 'Khadim Welfare Society',
      },
    ];

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          'Experience',
          style: TextStyle(
            fontSize: 24,
            fontWeight: FontWeight.bold,
            color: Get.theme.colorScheme.onBackground,
          ),
        ).animate().fadeIn(delay: 1400.ms),

        const SizedBox(height: 20),

        ...experiences.asMap().entries.map((entry) {
          final index = entry.key;
          final experience = entry.value;
          return Padding(
                padding: const EdgeInsets.only(bottom: 20),
                child: Row(
                  children: [
                    Container(
                      width: 12,
                      height: 12,
                      decoration: BoxDecoration(
                        color: Get.theme.colorScheme.primary,
                        shape: BoxShape.circle,
                      ),
                    ),
                    const SizedBox(width: 20),
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            experience['year']!,
                            style: TextStyle(
                              fontSize: 14,
                              color: Get.theme.colorScheme.primary,
                              fontWeight: FontWeight.w600,
                            ),
                          ),
                          const SizedBox(height: 4),
                          Text(
                            experience['title']!,
                            style: TextStyle(
                              fontSize: 18,
                              fontWeight: FontWeight.bold,
                              color: Get.theme.colorScheme.onBackground,
                            ),
                          ),
                          const SizedBox(height: 4),
                          Text(
                            experience['company']!,
                            style: TextStyle(
                              fontSize: 16,
                              color: Get.theme.colorScheme.onBackground
                                  .withOpacity(0.7),
                            ),
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
              )
              .animate()
              .fadeIn(delay: (1600 + index * 200).ms)
              .slideX(begin: 0.3, end: 0);
        }),
      ],
    );
  }
}
