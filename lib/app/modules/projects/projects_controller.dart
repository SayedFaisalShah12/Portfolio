import 'package:get/get.dart';

class ProjectsController extends GetxController {
  final RxBool isLoading = false.obs;
  final RxList<Map<String, dynamic>> projects = <Map<String, dynamic>>[].obs;

  @override
  void onInit() {
    super.onInit();
    loadProjects();
  }

  void loadProjects() {
    isLoading.value = true;
    // Simulate loading projects
    Future.delayed(const Duration(seconds: 1), () {
      projects.value = [
        {
          'title': 'NBA Player Performance Predictor',
          'description':
              'This Streamlit app predicts an NBA players weight based on their height and age using a machine learning regression model trained with Python.',
          'image': 'assets/images/project1.jpg',
          'technologies': [
            'Dart',
            'Flutter',
            'Python',
            'Bloc',
            'API Integration',
            'Data Analysis',
          ],
          'github': 'https://github.com',
          'demo': 'https://demo.com',
        },
        {
          'title': 'Spacetomic',
          'description':
              'Spacetomic is a cross-platform Flutter app (Web, iOS, Android) that showcases breathtaking space images and leverages NASA’s AI-powered services. The app integrates NASA APIs to provide real-time space data, astronomy pictures, Mars rover photos, and AI-driven space insights',
          'image': 'assets/images/project2.jpg',
          'technologies': [
            'Dart',
            'Flutter',
            'Bloc',
            'API Integration',
            'Live Streaming',
          ],
          'github': 'https://github.com',
          'demo': 'https://demo.com',
        },
        {
          'title': 'CouponHub',
          'description':
              'This is a learning platform app where users can explore and join courses of their choice. It provides a modern, responsive UI with smooth navigation, search and filter options, and interactive features like course details, ratings, and media support',
          'image': 'assets/images/project3.jpg',
          'technologies': [
            'Dart',
            'Flutter',
            'REST API',
            'BLoc',
            'Third Party Packages',
          ],
          'github': 'https://github.com',
          'demo': 'https://demo.com',
        },
        {
          'title': 'PharmaCare+',
          'description':
              'PharmaCare+ is a modern healthcare mobile app designed to make medicine management simple and accessible. It helps users track prescriptions, set reminders, explore drug information, and connect with reliable healthcare resources, ensuring better health outcomes with technology',
          'image': 'assets/images/project3.jpg',
          'technologies': [
            'Dart',
            'Flutter',
            'LLM Integration',
            'BLoc',
            'API Integraion',
          ],
          'github': 'https://github.com',
          'demo': 'https://demo.com',
        },
        {
          'title': 'Health',
          'description':
              'An AI-powered Health & Fitness app helps users track workouts, monitor nutrition, and improve overall well-being using smart AI recommendations.',
          'image': 'assets/images/project3.jpg',
          'technologies': [
            'Dart',
            'Flutter',
            'LLM Integration',
            'BLoc',
            'API Integraion',
          ],
          'github': 'https://github.com',
          'demo': 'https://demo.com',
        },
      ];
      isLoading.value = false;
    });
  }
}
