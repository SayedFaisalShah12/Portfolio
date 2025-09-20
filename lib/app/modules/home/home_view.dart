import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:flutter_animate/flutter_animate.dart';
import 'home_controller.dart';
import '../../widgets/navigation_bar.dart';
import '../../widgets/hero_section.dart';
import '../../widgets/about_section.dart';
import '../../widgets/skills_section.dart';
import '../../widgets/cta_section.dart';
import '../../widgets/footer.dart';

class HomeView extends GetView<HomeController> {
  const HomeView({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SingleChildScrollView(
        child: Column(
          children: [
            // Navigation Bar
            const CustomNavigationBar(),

            // Hero Section
            const HeroSection(),

            // About Section
            const AboutSection(),

            // Skills Section
            const SkillsSection(),

            // Call to Action Section
            const CTASection(),

            // Footer
            const Footer(),
          ],
        ),
      ),
    );
  }
}
