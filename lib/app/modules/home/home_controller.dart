import 'package:get/get.dart';

class HomeController extends GetxController {
  final RxBool isLoading = false.obs;
  final RxString currentSection = 'hero'.obs;

  @override
  void onInit() {
    super.onInit();
    // Initialize any data or start animations
  }

  void setCurrentSection(String section) {
    currentSection.value = section;
  }

  void toggleLoading() {
    isLoading.value = !isLoading.value;
  }
}
