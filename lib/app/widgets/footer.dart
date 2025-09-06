import 'package:flutter/material.dart';
import 'package:flutter_animate/flutter_animate.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:get/get.dart';

class Footer extends StatelessWidget {
  const Footer({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 60),
      decoration: BoxDecoration(
        color: Get.theme.colorScheme.surface,
        border: Border(
          top: BorderSide(
            color: Get.theme.colorScheme.onBackground.withOpacity(0.1),
            width: 1,
          ),
        ),
      ),
      child: Column(
        children: [
          LayoutBuilder(
            builder: (context, constraints) {
              if (constraints.maxWidth > 768) {
                return _buildDesktopFooter();
              } else {
                return _buildMobileFooter();
              }
            },
          ),

          const SizedBox(height: 40),

          const Divider(),

          const SizedBox(height: 20),

          Text(
            '© 2024 Sayed Faisal Shah. All rights reserved.',
            style: TextStyle(
              color: Get.theme.colorScheme.onBackground.withOpacity(0.6),
            ),
          ).animate().fadeIn(delay: 600.ms),
        ],
      ),
    );
  }

  Widget _buildDesktopFooter() {
    return Row(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Expanded(
          flex: 2,
          child: _buildFooterSection(
            'Portfolio',
            'Creating amazing digital experiences with\n Flutter and modern web technologies.',
            null,
          ),
        ),
        Expanded(
          child: _buildFooterSection('Quick Links', null, [
            'Home',
            'Projects',
            'Services',
            'About',
            'Contact',
          ]),
        ),
        Expanded(
          child: _buildFooterSection('Contact', null, [
            'Email: agcasma59@gmail.com',
            'Phone: +923408846826',
          ]),
        ),
        Expanded(
          child: _buildFooterSection('Follow Me', null, null, showSocial: true),
        ),
      ],
    );
  }

  Widget _buildMobileFooter() {
    return Column(
      children: [
        _buildFooterSection(
          'Portfolio',
          'Creating amazing digital experiences with Flutter and modern web technologies.',
          null,
        ),
        const SizedBox(height: 40),
        _buildFooterSection('Quick Links', null, [
          'Home',
          'Projects',
          'Services',
          'About',
          'Contact',
        ]),
        const SizedBox(height: 40),
        _buildFooterSection('Contact', null, [
          'Email: hello@example.com',
          'Phone: +1 234 567 890',
        ]),
        const SizedBox(height: 40),
        _buildFooterSection('Follow Me', null, null, showSocial: true),
      ],
    );
  }

  Widget _buildFooterSection(
    String title,
    String? description,
    List<String>? links, {
    bool showSocial = false,
  }) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          title,
          style: TextStyle(
            fontSize: 20,
            fontWeight: FontWeight.bold,
            color: Get.theme.colorScheme.primary,
          ),
        ).animate().fadeIn(delay: 200.ms),

        if (description != null) ...[
          const SizedBox(height: 16),
          Text(
            description,
            style: TextStyle(
              color: Get.theme.colorScheme.onBackground.withOpacity(0.7),
              height: 1.6,
            ),
          ).animate().fadeIn(delay: 400.ms),
        ],

        if (links != null) ...[
          const SizedBox(height: 16),
          ...links.asMap().entries.map((entry) {
            final index = entry.key;
            final link = entry.value;
            return Padding(
                  padding: const EdgeInsets.only(bottom: 8),
                  child: InkWell(
                    onTap: () {
                      // TODO: Implement navigation
                    },
                    child: Text(
                      link,
                      style: TextStyle(
                        color: Get.theme.colorScheme.onBackground.withOpacity(
                          0.7,
                        ),
                      ),
                    ),
                  ),
                )
                .animate()
                .fadeIn(delay: (600 + index * 100).ms)
                .slideX(begin: 0.3, end: 0);
          }),
        ],

        if (showSocial) ...[
          const SizedBox(height: 16),
          Row(
            children: [
              _buildSocialIcon(FontAwesomeIcons.github),
              const SizedBox(width: 16),
              _buildSocialIcon(FontAwesomeIcons.linkedin),
              const SizedBox(width: 16),
              _buildSocialIcon(FontAwesomeIcons.facebook),
            ],
          ).animate().fadeIn(delay: 600.ms),
        ],
      ],
    );
  }

  Widget _buildSocialIcon(IconData icon) {
    return InkWell(
      onTap: () {
        // TODO: Implement social media links
      },
      child: Container(
        padding: const EdgeInsets.all(12),
        decoration: BoxDecoration(
          color: Get.theme.colorScheme.primary.withOpacity(0.1),
          borderRadius: BorderRadius.circular(12),
        ),
        child: FaIcon(icon, size: 20, color: Get.theme.colorScheme.primary),
      ),
    );
  }
}
