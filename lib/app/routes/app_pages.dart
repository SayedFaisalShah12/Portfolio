import 'package:get/get.dart';
import '../modules/home/home_binding.dart';
import '../modules/home/home_view.dart';
import '../modules/projects/projects_binding.dart';
import '../modules/projects/projects_view.dart';
import '../modules/services/services_binding.dart';
import '../modules/services/services_view.dart';
import '../modules/about/about_binding.dart';
import '../modules/about/about_view.dart';
import '../modules/contact/contact_binding.dart';
import '../modules/contact/contact_view.dart';
import 'app_routes.dart';

class AppPages {
  static final routes = [
    GetPage(
      name: AppRoutes.home,
      page: () => const HomeView(),
      binding: HomeBinding(),
    ),
    GetPage(
      name: AppRoutes.projects,
      page: () => const ProjectsView(),
      binding: ProjectsBinding(),
    ),
    GetPage(
      name: AppRoutes.services,
      page: () => const ServicesView(),
      binding: ServicesBinding(),
    ),
    GetPage(
      name: AppRoutes.about,
      page: () => const AboutView(),
      binding: AboutBinding(),
    ),
    GetPage(
      name: AppRoutes.contact,
      page: () => const ContactView(),
      binding: ContactBinding(),
    ),
  ];
}
