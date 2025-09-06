import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:flutter_animate/flutter_animate.dart';
import 'contact_controller.dart';
import '../../widgets/navigation_bar.dart';

class ContactView extends GetView<ContactController> {
  const ContactView({super.key});

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
                    'Contact Me',
                    style: Theme.of(context).textTheme.displayMedium?.copyWith(
                      color: Get.theme.colorScheme.primary,
                    ),
                  ).animate().fadeIn(delay: 200.ms),

                  const SizedBox(height: 16),

                  Text(
                    'Let\'s get in touch',
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
                        return _buildDesktopContact();
                      } else {
                        return _buildMobileContact();
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

  Widget _buildDesktopContact() {
    return Row(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Expanded(flex: 1, child: _buildContactInfo()),
        const SizedBox(width: 60),
        Expanded(flex: 1, child: _buildContactForm()),
      ],
    );
  }

  Widget _buildMobileContact() {
    return Column(
      children: [
        _buildContactInfo(),
        const SizedBox(height: 40),
        _buildContactForm(),
      ],
    );
  }

  Widget _buildContactInfo() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          'Get In Touch',
          style: TextStyle(
            fontSize: 28,
            fontWeight: FontWeight.bold,
            color: Get.theme.colorScheme.onBackground,
          ),
        ).animate().fadeIn(delay: 600.ms),

        const SizedBox(height: 24),

        Text(
          'I\'m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.',
          style: TextStyle(
            fontSize: 18,
            color: Get.theme.colorScheme.onBackground.withOpacity(0.7),
            height: 1.6,
          ),
        ).animate().fadeIn(delay: 800.ms),

        const SizedBox(height: 40),

        _buildContactItem(Icons.email, 'Email', 'Agcasma59@gmail.com'),
        _buildContactItem(Icons.phone, 'Phone', '+923423047978'),
        _buildContactItem(Icons.location_on, 'Location', 'Peshawar, Pakistan'),
      ],
    );
  }

  Widget _buildContactItem(IconData icon, String title, String value) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 24),
      child: Row(
        children: [
          Container(
            padding: const EdgeInsets.all(12),
            decoration: BoxDecoration(
              color: Get.theme.colorScheme.primary.withOpacity(0.1),
              borderRadius: BorderRadius.circular(12),
            ),
            child: Icon(icon, color: Get.theme.colorScheme.primary, size: 24),
          ),
          const SizedBox(width: 16),
          Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                title,
                style: TextStyle(
                  fontSize: 16,
                  fontWeight: FontWeight.w600,
                  color: Get.theme.colorScheme.onBackground,
                ),
              ),
              Text(
                value,
                style: TextStyle(
                  fontSize: 16,
                  color: Get.theme.colorScheme.onBackground.withOpacity(0.7),
                ),
              ),
            ],
          ),
        ],
      ),
    ).animate().fadeIn(delay: 1000.ms).slideX(begin: 0.3, end: 0);
  }

  Widget _buildContactForm() {
    return Card(
      child: Padding(
        padding: const EdgeInsets.all(32),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              'Send Message',
              style: TextStyle(
                fontSize: 24,
                fontWeight: FontWeight.bold,
                color: Get.theme.colorScheme.onBackground,
              ),
            ).animate().fadeIn(delay: 600.ms),

            const SizedBox(height: 32),

            _buildTextField(
              controller: controller.nameController,
              label: 'Name',
              hint: 'Your name',
              icon: Icons.person,
            ),

            const SizedBox(height: 20),

            _buildTextField(
              controller: controller.emailController,
              label: 'Email',
              hint: 'Your email',
              icon: Icons.email,
            ),

            const SizedBox(height: 20),

            _buildTextField(
              controller: controller.messageController,
              label: 'Message',
              hint: 'Your message',
              icon: Icons.message,
              maxLines: 4,
            ),

            const SizedBox(height: 32),

            SizedBox(
              width: double.infinity,
              child: Obx(
                () => ElevatedButton(
                  onPressed:
                      controller.isLoading.value ? null : controller.submitForm,
                  child:
                      controller.isLoading.value
                          ? const SizedBox(
                            height: 20,
                            width: 20,
                            child: CircularProgressIndicator(strokeWidth: 2),
                          )
                          : const Text('Send Message'),
                ),
              ),
            ).animate().fadeIn(delay: 1200.ms).slideY(begin: 0.3, end: 0),
          ],
        ),
      ),
    ).animate().fadeIn(delay: 800.ms).slideX(begin: 0.3, end: 0);
  }

  Widget _buildTextField({
    required TextEditingController controller,
    required String label,
    required String hint,
    required IconData icon,
    int maxLines = 1,
  }) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          label,
          style: TextStyle(
            fontSize: 16,
            fontWeight: FontWeight.w600,
            color: Get.theme.colorScheme.onBackground,
          ),
        ),
        const SizedBox(height: 8),
        TextField(
          controller: controller,
          maxLines: maxLines,
          decoration: InputDecoration(
            hintText: hint,
            prefixIcon: Icon(icon),
            border: OutlineInputBorder(borderRadius: BorderRadius.circular(8)),
            focusedBorder: OutlineInputBorder(
              borderRadius: BorderRadius.circular(8),
              borderSide: BorderSide(
                color: Get.theme.colorScheme.primary,
                width: 2,
              ),
            ),
          ),
        ),
      ],
    );
  }
}
